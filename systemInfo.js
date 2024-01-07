const getOSInfo = require('osModule');  
const getNetworkInfo = require('networkModule');  
const osInfo = getOSInfo();
const networkInfo = getNetworkInfo();

console.log('Información del Sistema Operativo:');
for (const key in osInfo) {
  console.log(`${key}: ${osInfo[key]}`);
}

console.log('\nInformación de Red:');
for (const interfaceName in networkInfo) {
  console.log(`Interfaz ${interfaceName}:`);
  networkInfo[interfaceName].forEach((info) => {
    console.log(`  Familia: ${info.Familia} Dirección: ${info.Dirección} Interno: ${info.Interno}`);
  });
}