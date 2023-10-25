const {app, BrowserWindow} = require('electron')
const path = require('path')

app.on('ready', () => {
    const window = new BrowserWindow({
        width: 700,
        height: 450,
        autoHideMenuBar: true
    })

    window.loadFile(path.join(__dirname, 'client', 'index.html'))
})