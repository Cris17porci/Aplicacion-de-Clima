const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad donde queremos saber el clima',
        demand: true
    }
}).argv;

let getInfo = async() => {

    try {
        let coors = await lugar.getLugarLatLng(argv.direccion);
        let temp = await clima.getClima(coors.lat, coors.lng);

        return `El clima en ${coors.direccion} es de ${temp}°`
    } catch (e) {
        return `No se puede determinar el clima en ${argv.direccion}`
    }


}

getInfo(argv.direccion)
    .then(resp => {
        console.log(resp);
    })
    .catch(e => console.log(e));