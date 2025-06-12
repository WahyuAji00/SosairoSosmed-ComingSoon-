import { createImage, getRadianAngle } from './loadImage';

export default async function cropImage(imageSrc, pixelCrop, returnType = 'base64') {
  const image = await createImage(imageSrc);
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  canvas.width = pixelCrop.width;
  canvas.height = pixelCrop.height;

  ctx.drawImage(
    image,
    pixelCrop.x,
    pixelCrop.y,
    pixelCrop.width,
    pixelCrop.height,
    0,
    0,
    pixelCrop.width,
    pixelCrop.height
  );

  return new Promise((resolve) => {
    if (returnType === 'blob') {
      canvas.toBlob((blob) => resolve(blob), 'image/jpeg');
    } else {
      resolve(canvas.toDataURL('image/jpeg'));
    }
  });
}
