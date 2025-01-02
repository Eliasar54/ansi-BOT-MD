const axios = require('axios');
const fs = require('fs');

const API_KEY = 'ac264bb12446e44e2106125f05b5d364';

async function uploadImage(imagePath, expiration = 0) {
  try {
    const image = fs.readFileSync(imagePath);
    const base64Image = image.toString('base64');

    const formData = new URLSearchParams();
    formData.append('key', API_KEY);
    formData.append('image', base64Image);
    if (expiration) formData.append('expiration', expiration);

    const response = await axios.post('https://api.imgbb.com/1/upload', formData, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    if (response.data.success) {
      return response.data.data.url;
    } else {
      throw new Error('Error al subir la imagen: ' + response.data.error.message);
    }
  } catch (error) {
    console.error('Error al subir la imagen:', error);
    throw error;
  }
}

module.exports = { uploadImage };