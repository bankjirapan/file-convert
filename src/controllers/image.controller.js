import { Convert,ReadFileConvert,GetFileFormDisk } from "../core/convertor";
import config from "../config/config";


function isValidFileType(filename) {
  const validExtensions = config.SUPPORT_IMAGES_FILE;
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
