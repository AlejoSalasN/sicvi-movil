CREATE DATABASE sicvi;

CREATE TABLE contacto (
    id_contacto SERIAL PRIMARY KEY,
    c_nombre VARCHAR(45) NOT NULL,
    c_apellido VARCHAR(45) NOT NULL,
    c_telefono VARCHAR(20) NOT NULL
);

CREATE TABLE prueba (
    id_prueba SERIAL PRIMARY KEY,
    p_detalles TEXT NOT NULL
);

CREATE TABLE denuncia (
    id_denuncia SERIAL PRIMARY KEY,
    d_latitud VARCHAR(25) NOT NULL,
    d_longitud VARCHAR(25) NOT NULL,
    d_fecha DATE NOT NULL,
    d_tipo VARCHAR(20) NOT NULL,
    p_id INT NOT NULL REFERENCES prueba(id_prueba)
);

CREATE TABLE agresor (
    id_agresor SERIAL PRIMARY KEY,
    ag_nombre VARCHAR(45) NOT NULL,
    ag_paterno VARCHAR(45) NOT NULL,
    ag_materno VARCHAR(45) NOT NULL,
    ag_direccion TEXT NOT NULL,
    ag_sexo VARCHAR(20) NOT NULL
);

CREATE TABLE denunciavsagresor (
    d_id INT NOT NULL REFERENCES denuncia(id_denuncia),
    ag_id INT NOT NULL REFERENCES agresor(id_agresor)
);

CREATE TABLE expositor (
    id_expositor SERIAL PRIMARY KEY,
    exp_nombre VARCHAR(45) NOT NULL,
    exp_apellido VARCHAR(45) NOT NULL,
    exp_grado VARCHAR(20) NOT NULL,
    exp_email VARCHAR(255) NOT NULL,
    exp_email VARCHAR(20) NOT NULL,
    exp_pais VARCHAR(25)
);

CREATE TABLE operador (
    id_operador SERIAL PRIMARY KEY,
    o_nombre VARCHAR(45) NOT NULL,
    o_paterno VARCHAR(45) NOT NULL,
    o_materno VARCHAR(45) NOT NULL,
    o_telefono VARCHAR(20) NOT NULL,
    o_email VARCHAR(255) NOT NULL,
    o_password VARCHAR(50) NOT NULL
);

CREATE TABLE articulo (
    id_articulo SERIAL PRIMARY KEY,
    art_titulo TEXT NOT NULL,
    art_numero VARCHAR(25) NOT NULL, 
    art_resumen TEXT NOT NULL,
    art_enlace TEXT NOT NULL
);

CREATE TABLE centro (
    id_centro SERIAL PRIMARY KEY,
    cen_tipo VARCHAR(45) NOT NULL,
    cen_nombre VARCHAR(45) NOT NULL,
    cen_direccion VARCHAR(255) NOT NULL,
    cen_latitud VARCHAR(25) NOT NULL,
    cen_longitud VARCHAR(25) NOT NULL
);

CREATE TABLE usuario (
    id_usuario SERIAL PRIMARY KEY,
    u_nombre VARCHAR(45) NOT NULL,
    u_paterno VARCHAR(45) NOT NULL,
    u_materno VARCHAR(45) NOT NULL,
    u_telefono VARCHAR(20) NOT NULL,
    u_email VARCHAR(255) NOT NULL,
    u_fecha_nac DATE NOT NULL,
    u_password VARCHAR(50) NOT NULL,
    u_sexo VARCHAR(20) NOT NULL,
    u_direccion TEXT NOT NULL, 
    c_id INT NOT NULL REFERENCES contacto(id_contacto),
    d_id INT NOT NULL REFERENCES denuncia(id_denuncia)
);

CREATE TABLE informacion (
    id_informacion SERIAL PRIMARY KEY,
    i_titulo VARCHAR(255) NOT NULL,
    i_fecha DATE NOT NULL,
    i_contenido TEXT NOT NULL,
    i_image TEXT NOT NULL
);

CREATE TABLE evento (
    id_evento SERIAL PRIMARY KEY,
    e_titulo VARCHAR(255) NOT NULL,
    e_fecha DATE NOT NULL,
    e_dia VARCHAR(10) NOT NULL,
    e_ubicacion VARCHAR(255) NOT NULL,
    e_tipo VARCHAR(50) NOT NULL,
    e_descripcion TEXT NOT NULL,
    e_image TEXT NOT NULL
);

CREATE TABLE administrador (
    id_administrador SERIAL PRIMARY KEY,
    a_nombre VARCHAR(45) NOT NULL,
    a_paterno VARCHAR(45) NOT NULL,
    a_materno VARCHAR(45) NOT NULL,
    a_telefono VARCHAR(20) NOT NULL,
    a_email VARCHAR(255) NOT NULL,
    a_password VARCHAR(50) NOT NULL,
    i_id INT NOT NULL REFERENCES informacion(id_informacion),
    art_id INT NOT NULL REFERENCES articulo(id_articulo)
);

CREATE TABLE administradorvsevento (
    a_id INT NOT NULL REFERENCES administrador(id_administrador),
    e_id INT NOT NULL REFERENCES evento(id_evento)
);

CREATE TABLE eventovsexpositor (
    e_id INT NOT NULL REFERENCES evento(id_evento),
    exp_id INT NOT NULL REFERENCES expositor(id_expositor)
);

CREATE TABLE operadorvsdenuncia (
    o_id INT NOT NULL REFERENCES operador(id_operador),
    d_id INT NOT NULL REFERENCES denuncia(id_denuncia)
);