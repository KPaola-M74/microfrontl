const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
//micro front orqueasteador 
  remotes: {
    "mfShopping": "http://localhost:4201/remoteEntry.js",
    "mfPaymet": "http://localhost:4200/remoteEntry.js",    
  },
//compartir cosas , librerias, qu etodo este con la misma version de librerias
  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
