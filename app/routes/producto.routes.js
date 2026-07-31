module.exports = app => {
    const producto = require("../controllers/producto.controller.js");
    var router = require("express").Router();
    
    router.post("/create/", producto.create);
    
    router.get("/", producto.findAll);
    
    router.get("/:id", producto.findOne);
    
    router.put("/update/:id", producto.update);
    
    router.delete("/delete/:id", producto.delete);
    
    router.delete("/delete/", producto.deleteAll);
    
    app.use("/api/producto", router);
};
