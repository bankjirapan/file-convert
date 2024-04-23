import { Convert } from "../core/convertor";

const imageCtrl = {

    postUpload: async (req,res,next)  => {

        await Convert(req.sessionID,'png')
        return res.send('OK')
    }

}

export default imageCtrl;