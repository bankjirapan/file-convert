import express from 'express'
import uploadCtrl from '../controllers/image.controller';
import indexCtrl from '../controllers/index.controller';
import uploader from '../core/uploader';

const router = express.Router()


router.get('/',indexCtrl.getIndex)
router.get('/download/:filename',uploadCtrl.getDownload)
router.put('/upload',uploader.array('file',10),uploadCtrl.postUpload)

export default router;