const os = require('os');

function getNetworkInfo() {
  const networkInfo = {};
  const interfaces = os.networkInterfaces();

  for (const interfaceName in interfaces) {
    networkInfo[interfaceName] = [];

    interfaces[interfaceName].forEach((iface) => {
      const info = {
        Familia: iface.family,
        Dirección: iface.address,
        Interno: iface.internal,
      };

      networkInfo[interfaceName].push(info);
    });
  }

  return networkInfo;
}

module.exports = getNetworkInfo;