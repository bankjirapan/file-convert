import { Convert } from "../core/convertor";


function isValidFileType(filename) {
  const validExtensions = ["jpg", "jpeg", "png", "webp"];
  return validExtensions.includes(filename);
}

const imageCtrl = {
  postUpload: async (req, res, next) => {
    const fileType = req.body.filetype;
    console.log(fileType)
    if (isValidFileType(fileType)) {
      await Convert(req.sessionID, fileType);
    }
    return res.send("OK");
  },
};

export default imageCtrl;
