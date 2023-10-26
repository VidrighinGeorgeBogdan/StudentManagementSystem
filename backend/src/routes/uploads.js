import multer from 'multer';
import { Router } from 'express';
const router = Router();
const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, __dirname + '/uploads');
    },
    // Sets file(s) to be saved in uploads folder in same directory
    filename: function (req, file, callback) {
        callback(null, file.originalname);
    }
    // Sets saved filename(s) to be original filename(s)
  })
  const uploads =multer({storage: storage})
router.post("/upload", uploads.array("file"), (req, res) => {
    // Sets multer to intercept files named "files" on uploaded form data
    
        console.log(req.body); // Logs form body values
        console.log(req.file); // Logs any files
        res.json({ message: "File(s) uploaded successfully" });
    
    });
export default router;