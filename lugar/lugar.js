const axios = require('axios');

const getLugarLatLng = async(direccion) => {

    let encodeUrl = encodeURI(direccion)
    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeUrl}&key=AIzaSyAu2rb0mobiznVJnJd6bVb5Bn2WsuXP2QI`)
    if (resp.data.status === 'ZERO_RESULT') {
        throw new Error(`No hay resultados para la ciudad ${direccion}`);
    }


    let dir = resp.data.results[0].formatted_address;
    let lat = resp.data.results[0].geometry.location.lat;
    let lng = resp.data.results[0].geometry.location.lng;

    return {
        direccion: dir,
        lng: lng,
        lat: lat
    }
};
module.exports = {
    getLugarLatLng
}