import { v4 as uuidv4 } from "uuid";

const indexCtrl = {
  getIndex: (req, res, next) => {
    req.session.process = uuidv4()
    res.render("index", {
      process: req.session.process
    });

  },
};

export default indexCtrl;
