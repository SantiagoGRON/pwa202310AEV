use arciBD;
CREATE TABLE usuario (
    id_usuario INT NOT NULL AUTO_INCREMENT,
    correo VARCHAR(100),
    contrasena VARCHAR(100),
    PRIMARY KEY (id_usuario)
);
CREATE TABLE datos_generales(
	Id_correo VARCHAR (50),
    Nombre VARCHAR (50),
	Apellido1 VARCHAR (30),
	Apellido2 VARCHAR (30),
	Telefono INT (30),
	PRIMARY KEY (Id_correo),
    FOREIGN KEY(Id_correo) REFERENCES usuario(correo)
);


CREATE TABLE comentarios(
	id_nombre VARCHAR (30),
	comen VARCHAR (50),
	correo_contacto VARCHAR (30),
	telefono INT (30),
	PRIMARY KEY (id_nombre),
    FOREIGN KEY(Correo_contacto) REFERENCES usuario(correo),
    FOREIGN KEY(id_nombre) REFERENCES datos_generales(Nombre)
);