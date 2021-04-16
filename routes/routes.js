// import other routes
// para importar las rutas se necesita asignar un nombre distinto
const dashboard = require('./dashboard');
const ordenes = require('./ordenes');



const appRouter = (app, fs) => {

    // default route
    app.get('/', (req, res) => {
        res.send('welcome to the development api-server');
    });

    // // other routes
    // incorporar acá las const declaradas al comienzo junto al app y fs
    dashboard(app, fs);
    ordenes(app, fs);

};

module.exports = appRouter;