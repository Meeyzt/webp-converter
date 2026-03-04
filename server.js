const express = require('express');
const multer = require('multer');
const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 7878;

// Configure multer for file uploads using memory storage
const storage = multer.memoryStorage();

const upload = multer({
    storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype.startsWith('image/')) {
            cb(null, true);
        } else {
            cb(new Error('Only image files are allowed!'), false);
        }
    }
});

app.use(express.static('public'));

app.post('/upload', upload.array('images'), async (req, res) => {
    if (!req.files || req.files.length === 0) {
        return res.status(400).json({ error: 'No files uploaded' });
    }

    try {
        const results = [];
        
        for (const file of req.files) {
            const filenameWithoutExt = path.basename(file.originalname, path.extname(file.originalname));
            const outputFilename = `${filenameWithoutExt}.webp`;

            const buffer = await sharp(file.buffer, { failOn: 'truncated' })
                .rotate() // Auto-orient based on EXIF
                .webp({ 
                    quality: 85,
                    lossless: false, 
                    alphaQuality: 100,
                    force: true,      // Force WebP output
                    smartSubsample: true // better chroma subsampling
                })
                .withMetadata() // Preserve necessary HTTP metadata properly if any
                .toBuffer();

            const base64Data = buffer.toString('base64');
            const dataUrl = `data:image/webp;base64,${base64Data}`;

            results.push({
                originalName: file.originalname,
                filename: outputFilename,
                downloadUrl: dataUrl
            });
        }

        res.json({
            success: true,
            message: `${results.length} images converted successfully`,
            files: results
        });

    } catch (error) {
        console.error('Error converting images:', error);
        res.status(500).json({ error: 'Failed to convert images' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
