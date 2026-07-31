module.exports = (sequelize, Sequelize) => {
    const Proveedor = sequelize.define("proveedor",
        {
            nombre: {
                type: Sequelize.STRING
            },
            apellido: {
                type: Sequelize.STRING
            },
            edad: {
                type: Sequelize.STRING
            },
            telefono: {
                type: Sequelize.STRING
            },
            estado: {
                type: Sequelize.BOOLEAN
            }
        }
    );
    return Proveedor;
};