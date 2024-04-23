import multer from "multer";
import fs from "fs";

// Store image to server
const storage = multer.diskStorage({
  destination: async (req, file, cb) => {
    const folderName = "uploads/" + req.sessionID;

    try {
      if (!fs.existsSync(folderName)) {
        await fs.mkdirSync(folderName);
      }
    } catch (err) {
      console.error(err);
    }

    cb(null, "uploads/" + req.sessionID + "/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + ".jpg");
  },
});

const upload = multer({
  storage: storage,
});

export default upload;
