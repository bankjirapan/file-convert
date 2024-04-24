import multer from "multer";
import fs from "fs";

// Store image to server
const storage = multer.diskStorage({
  destination: async (req, file, cb) => {
    const folderName = "uploads/" + req.session.process;
    try {
      if (!fs.existsSync(folderName)) {
        await fs.mkdirSync(folderName);
      }
    } catch (err) {
      console.error(err);
    }

    cb(null, "uploads/" + req.session.process + "/");
  },
  filename: (req, file, cb) => {
    const fileName = file.originalname.split(":")[0];
    cb(null, fileName);
  },
});

const upload = multer({
  storage: storage,
});

export default upload;
