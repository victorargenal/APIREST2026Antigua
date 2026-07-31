module.exports = (sequelize, Sequelize) => {
    const Producto = sequelize.define("producto",
        {
            nombreProducto: {
                type: Sequelize.STRING
            },
            tipoProducto: {
                type: Sequelize.STRING
            },
            stock: {
                type: Sequelize.STRING
            },
            caducidad: {
                type: Sequelize.DATE
            }
        }
    );
    return Producto;
}