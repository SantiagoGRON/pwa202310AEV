const objCon = require('../libs/conexion');
const {QueryTypes} = require('sequelize');

class CommentsService{
    async createComment(body){
        let sentence = `INSERT INTO comentarios(id_nombre,comen,correo_contacto,telefono) 
        values('${body.id_nombre}','${body.comen}','${body.correo_contacto}','${telefono}')`;
        
        let genDataId = await objCon.query(
            sentence,
            {
                type: QueryTypes.INSERT,
                returning:true
            }
        );
        return genDataId;
    }

    async getComment (){
        const user = await objCon.query(
            "SELECT * FROM `comentarios`",
            { type: QueryTypes.SELECT}
        );
        return user;
    }
}
module.exports = CommentsService