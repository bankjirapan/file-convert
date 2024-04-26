import { v4 as uuidv4 } from "uuid";
import config from "../config/config";

const indexCtrl = {
  getIndex: (req, res, next) => {
    req.session.process = uuidv4()
    res.render("index", {
      process: req.session.process,
      file_type: config.SUPPORT_IMAGES_FILE
    });

  },
};

export default indexCtrl;
