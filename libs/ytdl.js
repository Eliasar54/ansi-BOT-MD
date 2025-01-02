const ytdl = require('@distube/ytdl-core');

async function obtenerInfo(url) {
  try {
    const datos = await ytdl.getInfo(url);
    return {
      titulo: datos.videoDetails.title,
      descripcion: datos.videoDetails.shortDescription,
      autor: datos.videoDetails.author.name,
      fecha: datos.videoDetails.uploadDate,
      duracion: datos.videoDetails.lengthSeconds,
      vistas: datos.videoDetails.viewCount,
      miniatura: datos.videoDetails.thumbnails[0].url,
      formatos: datos.formats.map(f => ({
        calidad: f.qualityLabel,
        tipo: f.container,
        enlace: f.url
      }))
    };
  } catch (e) {
    console.error('Error:', e);
    throw e;
  }
}

module.exports = obtenerInfo;