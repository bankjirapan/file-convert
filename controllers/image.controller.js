import { Convert,ReadFileConvert,GetFileFormDisk } from "../core/convertor";


function isValidFileType(filename) {
  const validExtensions = ["jpg", "jpeg", "png", "webp"];
  return validExtensions.includes(filename);
}

const imageCtrl = {
  postUpload: async (req, res, next) => {
    const fileType = req.body.filetype;
    const processId = req.session.process
    if (isValidFileType(fileType) && processId) {
      await Convert(processId, fileType);
      await ReadFileConvert(processId)
    }
    return res.send("OK");
  },

  getDownload: async (req,res,next) => {
    const fileName = req.params.filename
    const session  = req.session.process
    const fileType = req.query.filetype
    if (!session && !fileName && !fileExtension) {
      return res.send("invalid")
    }
    const file = await GetFileFormDisk(session,fileName,fileType)
    res.download(file.path)
  }

};

export default imageCtrl;
