const { app, BrowserWindow, Menu } = require('electron');
const url = require('url');
const path = require('path');

if (process.env.NODE_ENV !== 'production') {
    require('electron-reload')(__dirname, {
        electron: path.join(__dirname, '../node_modules', '.bin', 'electron')
    })
}

let mainWindow
let newService
let newCotiza
    //es la funcion que abre la primera ventana que contiene la vista principal
app.on('ready', () => {
    mainWindow = new BrowserWindow({})
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'views/index.html'),
        protocol: 'file',
        slashes: true
    }))
    const mainMenu = Menu.buildFromTemplate(templateMenu);
    Menu.setApplicationMenu(mainMenu);


});

//la nueva ventana de servicios
function newServiceWindow() {
    newService = new BrowserWindow({
        width: 400,
        height: 400,
        title: 'Nuevo Servicio'
    });
    newService.loadURL(url.format({
        pathname: path.join(__dirname, 'views/productos.html'),
        protocol: 'file',
        slashes: true
    }))
}
// segunda ventana de servicios
function newCotizaWindow() {
    newCotiza = new BrowserWindow({
        width: 400,
        height: 400,
        title: 'Nueva cotizacion'
    });
    newCotiza.loadURL(url.format({
        pathname: path.join(__dirname, 'views/cotizacion.html'),
        protocol: 'file',
        slashes: true
    }))
}

// aqui se agregan las opciones y objetos de navegacion
const templateMenu = [{
        label: 'Archivo',
        submenu: [{
                label: 'Documento',
                accelerator: 'Ctrl+f',
                click() {
                    newServiceWindow();
                }

            },
            {
                label: 'Guardar',
                accelerator: 'Ctrl+S',
                click() {

                }

            },
            {
                label: 'Guardar como',
                accelerator: 'Ctrl+S+G',
                click() {

                }
            },
            {
                role: 'quit',
                accelerator: 'Ctrl+Q',
                click() {

                }
            }
        ],
    },
    {
        label: 'Ventas',
        submenu: [{
                label: 'Cotizacion',
                accelerator: 'Ctrl+Y',
                click() {
                    newCotizaWindow();
                }
            },
            {
                label: 'Financiacion',
                accelerator: 'Ctrl + F',
                click() {
                    newCotizaWindow();
                }
            },
        ]

    },
    {
        label: ' Estadisticas',
        submenu: [{
            label: 'Ingresos',
            accelerator: 'Ctrl + I',
            click() {

            }

        }]
    },

    {
        label: ' Estadisticas',
        submenu: [{
            label: 'Ingresos',
            accelerator: 'Ctrl + I',
            click() {

            }

        }]
    }



];