const bandas = require('../db/index');

const bandasController = {
    index: function(req, res) {
        return res.render('bandas', {
            lista: bandas.lista,
            mensaje: "Todas las bandas"
        });
    },
    detalleId: function (req, res) {
        let id = req.params.id
        res.render('bandas', {
            lista: bandas.lista[id],
            mensaje: `Banda: ${bandas.lista[id].nombre}`
        });
     
    },
    genero: function (req, res) {
        let genero = req.params.genero
        let resultado = [];
        for (let i = 0; i < bandas.lista.length; i++) {
            if(genero == bandas.lista[i].genero){
                resultado.push(bandas.lista[i])
            }
        }
        return res.render('genero', {
            lista: resultado,
            mensaje: `Bandas del genero: ${genero}`
        });
        
    }

}

    
module.exports = bandasController;