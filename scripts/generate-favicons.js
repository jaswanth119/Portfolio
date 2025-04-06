const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

async function generateFavicons() {
  const inputSvg = path.join(__dirname, '../public/favicon.svg');
  const publicDir = path.join(__dirname, '../public');

  // Read the SVG file
  const svgBuffer = await fs.readFile(inputSvg);

  // Generate different sizes
  const sizes = {
    'favicon-32x32.png': 32,
    'favicon-16x16.png': 16,
    'apple-touch-icon.png': 180,
    'android-chrome-192x192.png': 192,
    'android-chrome-512x512.png': 512,
  };

  // Process each size
  for (const [filename, size] of Object.entries(sizes)) {
    const outputPath = path.join(publicDir, filename);
    await sharp(svgBuffer)
      .resize(size, size)
      .png()
      .toFile(outputPath);
    
    console.log(`Generated ${filename}`);

    // Create favicon.ico from the 32x32 PNG
    if (filename === 'favicon-32x32.png') {
      const faviconPath = path.join(publicDir, 'favicon.ico');
      await fs.copyFile(outputPath, faviconPath);
      console.log('Generated favicon.ico');
    }
  }
}

generateFavicons().catch(console.error);
