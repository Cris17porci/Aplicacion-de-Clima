const axios = require('axios');
const getClima = async(lat, lng) => {


    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=d4af0c996efb940de48de22207cf4c09`)


    return resp.data.main.temp;

}

module.exports = {
    getClima
}