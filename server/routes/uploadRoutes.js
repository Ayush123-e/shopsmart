import express from 'express';
import { upload } from '../middleware/upload.js';
import { uploadImage } from '../utils/uploadImage.js';
import fs from 'fs';

const router = express.Router();

router.post('/test-upload', upload.single('image'), async (req, res, next) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: 'No image file provided'
      });
    }

    const result = await uploadImage(req.file);

    // Delete local file after upload
    fs.unlinkSync(req.file.path);

    res.status(200).json({
      success: true,
      message: 'Image uploaded successfully',
      url: result.url,
      publicId: result.publicId
    });
  } catch (error) {
    // Clean up file if upload fails
    if (req.file && fs.existsSync(req.file.path)) {
      fs.unlinkSync(req.file.path);
    }
    next(error);
  }
});

export default router;
