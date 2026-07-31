const db= require ("../models");
const proveedor= db.proveedor;
const Op= db.Sequelize.Op;

exports.create= (req,res) =>{
    if (!req.body.nombre || !req.body.apellido){
        res.status(400).send({
            message: "nombre o apellido son obligatorios"
        });
        return;
    }

    const proveedor={
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        edad: req.body.edad,
        telefono: req.body.telefono,
        estado: req.body.estado? req.body.estado: false
    }

    proveedor.create(proveedor)//manda a la base de datos
        .then(data=>{
            res.send(data);
        })
        .catch(err=>{
            res.status(500).send({
                message: err.message || "ocurrio un error al crear el cliente"
            });
    });
};


exports.findAll = (req,res) =>{
    const nombre=req.query.nombre;
    var condition = nombre ? { nombre: { [Op.ilike]: '%${nombre}%'} } : null;
    proveedor.findAll({where: condition})
    .then(data=> {
        res.send(data);
    })
    .catch(err=>{
        res.status(500).send({
            message: err.message || "ocurrio un error al recuperar los proveedores"
        });
    });
};

exports.findOne = (req,res) => {
    const id= req.params.id;

    proveedor.findByPk(id)
    .then(data => {
        res.send(data);
    })
    .catch(err=> {
        res.status(500).send ({
            message: "error en algo"
        });
    });
};

exports.update = (req,res) => {
    const id=req.params.id;

    proveedor.update(req.body,{
        where: { id:id}
    })
    .then(num=> {
        if (num==1){
            res.send({
                message: "el proveedor se actualizo"
            });
        }else{
            res.send({
                message: "no se encontro al proveedor"
            });
        }
    })
    .catch(err=> {
        res.status(500).send({
            message: "error al acutalizar"
        });
    });
}

exports.delete = (req,res) => {
    const id=req.params.id;

    proveedor.destroy({
        where: {id:id}
    })
    .then(num=>{
        if(num==1){
            res.send({
                message: "el proveedor se elimino exitosamente"
            });
        }else{
            res.send({
                message: " el id no existe"
            });
        }
    })
    .catch(err=>{
        res.status(500).send({
            message: "no se pudo eliminar el cliente"
        });
    });
}

exports.deleteAll=(req,res) => {
    proveedor.destroy({
        where: {},
        truncate: false
    })
    .then (nums=> {
        res.send({
            message: "proveedor eliminado"
        });
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "error mientras se estaban eliminado los proveedor"
        });
    });
};

exports.findAllestado =(req,res) => {
    proveedor.findAll({
        where: {
            estado: true
        }
    })
    .then(data=>{
        res.send(data);
    })
    .catch(err=> {
        res.status(500).send({
            message: err.message || "algo ocurio "
        });
    });
};