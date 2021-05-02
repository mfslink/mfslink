module.exports = {
    packagerConfig: {
        icon: __dirname + "/logo.ico"
    },
    makers: [
      {
        name: '@electron-forge/maker-zip'
      }
    ]
  }