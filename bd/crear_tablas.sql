USE pwabd2023;
CREATE TABLE IF NOT EXISTS usuario (
    id_usuario INT NOT NULL AUTO_INCREMENT,
    correo VARCHAR(100),
    contrasena VARCHAR(100),
    PRIMARY KEY (id_usuario)
);
CREATE TABLE IF NOT EXISTS datos_generales(
	id_correo INT NOT NULL AUTO_INCREMENT,
    nombre VARCHAR (50),
	apellido1 VARCHAR (30),
	apellido2 VARCHAR (30),
	telefono INT (30),
	PRIMARY KEY (id_correo)
);


CREATE TABLE IF NOT EXISTS comentarios(
	id_nombre INT NOT NULL AUTO_INCREMENT,
	comen VARCHAR (50),
	correo_contacto VARCHAR (100),
	telefono INT (30),
	PRIMARY KEY (id_nombre)
);