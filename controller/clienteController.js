const Cliente = require ('../models/Cliente');
// funcion para agregar clientes
exports.agregarClientes = async(req, res) => {

    try {

    let clientes;
    clientes = new Cliente(req.body);
    await clientes.save();
    res.send(clientes);

    } catch (error) {
    console.log(error);
    res.status(500).send('Hubo un error al agregar un cliente');
    }

}