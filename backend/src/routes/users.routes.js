const express = require("express");
const router = express.Router();
const pool = require("../db/pool");
const bcrypt = require("bcrypt");

router
  .route("/")
  .get(async (req, res) => {
    const { email, password } = req.body;
    try {
      const { rows } = await pool.query(
        "SELECT id_usuario, u_nombre, u_paterno, u_materno, u_telefono, u_fecha_nac, u_password, u_sexo, u_direccion FROM usuario WHERE u_email=$1",
        [email]
      );
      bcrypt.compare(password, rows[0].u_password, (err, result) => {
        if (err) {
          res.status(422).json({ error: "Error al desencriptar" });
        } else if (result) {
          res.json(rows[0]);
        } else {
          res.status(401).json({ mensaje: "Contraseña incorrecta" });
        }
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error al obtener usuarios" });
    }
  })
  .post((req, res) => {
    const {
      nombre,
      paterno,
      materno,
      telefono,
      fecha,
      sexo,
      email,
      password,
      direccion,
    } = req.body;
    bcrypt.hash(password, 10, async (err, hash) => {
      if (err) {
        console.error("Error al encriptar la contraseña:", err);
        res.status(500).json({ error: "Error al crear el usuario" });
      } else {
        try {
          await pool.query(
            "INSERT INTO usuario (u_nombre, u_paterno, u_materno, u_telefono, u_email, u_fecha_nac, u_password, u_sexo, u_direccion) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)",
            [
              nombre,
              paterno,
              materno,
              telefono,
              email,
              fecha,
              hash,
              sexo,
              direccion,
            ]
          );
          res.status(201).json({ message: "Usuario creado con éxito" });
        } catch (error) {
          console.error(error);
          res.status(500).json({ error: "Error al crear el usuario" });
        }
      }
    });
  });

// Ruta para obtener, actualizar y eliminar un usuario por ID
router
  .route("/:id")
  .get(async (req, res) => {
    const { id } = req.params;
    try {
      const { rows } = await pool.query("SELECT * FROM usuario WHERE id = $1", [
        id,
      ]);
      if (rows.length === 0) {
        res.status(404).json({ error: "Usuario no encontrado" });
      } else {
        res.json(rows[0]);
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error al obtener el usuario" });
    }
  })
  .put(async (req, res) => {
    const { id } = req.params;
    const { nombre, apellido, correo, contraseña } = req.body;
    try {
      await pool.query(
        "UPDATE usuarios SET nombre = $1, apellido = $2, correo = $3, contraseña = $4 WHERE id = $5",
        [nombre, apellido, correo, contraseña, id]
      );
      res.json({ message: "Usuario actualizado con éxito" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error al actualizar el usuario" });
    }
  })
  .delete(async (req, res) => {
    const { id } = req.params;
    try {
      await pool.query("DELETE FROM usuarios WHERE id = $1", [id]);
      res.json({ message: "Usuario eliminado con éxito" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error al eliminar el usuario" });
    }
  });

module.exports = router;
