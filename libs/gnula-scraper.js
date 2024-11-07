//CÓDIGO ECHO DESDE 0 POR @Eliasar54 (EliasarYT) https://github.com/Eliasar54
//© Eliasar54 (EliasarYT)
const cheerio = require('cheerio');
const axios = require('axios');

const searchMovies = async (nombre) => {
    try {
        let searchQuery = nombre;
        if (!searchQuery.toLowerCase().includes("ver")) {
            searchQuery = `Ver ${searchQuery}`;
        }
        if (!searchQuery.toLowerCase().includes("online")) {
            searchQuery = `${searchQuery} online`;
        }

        const searchUrl = `https://gnulahd.nu/?s=${encodeURIComponent(searchQuery)}`;
        const { data } = await axios.get(searchUrl);
        const $ = cheerio.load(data);
        const results = [];

        $('.post').each((i, element) => {
            const fechaPublicacion = $(element).find('.time span').text().trim();
            const titulo = $(element).find('h2 a').attr('title').replace('Permanent Link to ', '');
            const enlace = $(element).find('h2 a').attr('href');
            const autor = $(element).find('.date span').text().replace('posted by ', '').trim();
            const imagen = $(element).find('.entry img').attr('src');
            const sinopsis = $(element).find('p').eq(1).text().trim();
            const descripcion = $(element).find('p:contains("Más cosas:")').text().replace('Más cosas:', '').trim();
            const advertencia = $(element).find('.iframes').text().trim();
            const iframeSrc = $(element).find('iframe').attr('src');

            results.push({
                fechaPublicacion,
                titulo,
                enlace,
                autor,
                imagen,
                sinopsis,
                descripcion,
                advertencia,
                iframeSrc
            });
        });

        return results;
    } catch (error) {
        console.error(`Error al buscar la película: ${error.message}`);
        return [];
    }
};

const getIframeDetails = async (iframeUrl) => {
    try {
        const { data } = await axios.get(iframeUrl);
        const $ = cheerio.load(data);
        const idioma = $('td:contains("subtitulado")').text().trim();
        const calidad = $('td span').text().trim();
        const enlaceDescarga = $('a.btn-download2').attr('href');

        return {
            idioma,
            calidad,
            enlaceDescarga
        };
    } catch (error) {
        console.error(`Error al obtener detalles del iframe: ${error.message}`);
        return {};
    }
};

const searchAndFetchDetails = async (nombre) => {
    const movies = await searchMovies(nombre);
    
    for (const movie of movies) {
        if (movie.iframeSrc) {
            const iframeDetails = await getIframeDetails(movie.iframeSrc);
            movie.idioma = iframeDetails.idioma;
            movie.calidad = iframeDetails.calidad;
            movie.enlaceDescarga = iframeDetails.enlaceDescarga;
        }
    }

    return movies;
};

module.exports = { searchAndFetchDetails };