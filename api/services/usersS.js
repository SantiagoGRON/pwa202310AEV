const objCon = require('../libs/conexion');
const {QueryTypes} = require('sequelize');

class UsersService{
    async getUsers(){
        const users = await objCon.query(
            "SELECT * FROM `usuario`",
            {type: QueryTypes.SELECT}
        );
        return users;
    }
    async getUser (id){
        const user = await objCon.query(
            "SELECT * FROM `usuario` where `id_usuario` = " + id,
            { type: QueryTypes.SELECT}
        );
        return user;
    }
    async login(body){
        let sentence = `SELECT * FROM usuario where correo =
        '${body.correo}' and contrasena = '${body.contrasena}'`;
        const user = await objCon.query(
            sentence,
            {type: QueryTypes.SELECT}
        );
        return user;
    }

    async register(body){
        let sentence = `INSERT INTO datos_generales(nombre,apellido1,apellido2,telefono)
        values('${body.nombre}','${body.apellido1}','${body.apellido2}','${telefono}')`;

        let genDataId = await objCon.query(
            sentence,
            {
                type: QueryTypes.INSERT,
                returning:true
            }
        );

        sentence = `INSERT INTO usuario(correo, contrasena)
        values('${body.correo}','${body.contrasena}'`;

        await objCon.query(
            sentence,
            {
                type: QueryTypes.INSERT
            }
        );
        return 1;
    }
}

module.exports=UsersService