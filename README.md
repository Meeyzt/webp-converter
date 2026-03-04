# Image to WebP Converter

A lightweight, premium-looking local tool that quickly and efficiently converts any image files (PNG, JPEG, GIF) to the highly optimized WebP format. Conversions happen entirely in-memory, ensuring speed and preventing any unwanted files from piling up on your local disk.

![Converter UI](https://via.placeholder.com/800x450.png?text=WebP+Converter+Interface)

## Features

- **🚀 Instant Conversion**: Upload and immediately download WebP files. No disk storage or temporary file lingering.
- **✨ Premium UI**: Beautiful glassmorphism aesthetic, interactive drag-and-drop zone, and smooth animations.
- **📚 Batch Support**: Drag and drop or browse to select multiple images at once.
- **💯 Quality Preservation**: Hand-tuned Sharp processor parameters guaranteeing great quality and compatibility across Strapi, Next.js Image components, and CMSs.
- **🔄 Original Names Intact**: Keep your original file names securely. You bring `hero.png`, you download `hero.webp`.

## Prerequisites

- [Node.js](https://nodejs.org/) (version 14.x or newer is recommended)
- `npm` (Node Package Manager)

## Installation

1. Clone or download this repository.
2. Navigate into the project folder:
   ```bash
   cd png-to-webp
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

## Usage

1. Start the local Express server:
   ```bash
   node server.js
   ```
2. Open your web browser and navigate to:
   ```text
   http://localhost:7878
   ```
3. Drag and drop your images onto the upload area, and click the download button for your processed files.

## Technology Stack

- **Backend**: Node.js, Express, Multer, Sharp
- **Frontend**: Vanilla HTML/CSS/JS with modern variable properties (Inter font, CSS gradients, etc.)

## License

This project is licensed under the ISC License.
