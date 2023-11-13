const express = require("express");
const router = express.Router();
const pool = require("../db/pool");
const bcrypt = require("bcrypt");

router
  .route("/:correo")
  .post(async (req, res) => {
    const email = req.params.correo;
    const { password } = req.body;
    try {
      const { rows } = await pool.query(
        "SELECT id_usuario, u_nombre, u_paterno, u_materno, u_telefono, u_fecha_nac, u_password, u_sexo, u_direccion FROM usuario WHERE u_email=$1",
        [email]
      );
      if (rows) {
        bcrypt.compare(password, rows[0].u_password, (err, result) => {
          if (err) {
            res.status(422).json({ message: "Error al desencriptar" });
          } else if (result) {
            console.log(rows[0]);
            res.status(201).json({
              nombre: rows[0].u_nombre,
              paterno: rows[0].u_paterno,
              materno: rows[0].u_materno,
              telefono: rows[0].u_telefono,
              fecha_nac: rows[0].u_fecha_nac,
              sexo: rows[0].u_sexo,
              direccion: rows[0].u_direccion,
            });
          } else {
            console.log("contraseña incorrecta");
            res.status(401).json({ message: "Contraseña incorrecta" });
          }
        });
      } else {
        res.status(401).json({ message: "Correo no registrado." });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Correo no encontrado." });
    }
  })
  .patch(async (req, res) => {
    const email = req.params.correo;
    const { password } = res.body;
    try {
      await pool.query(
        "UPDATE usuario SET u_password = $1 WHERE u_email = $2 RETURNING *;",
        [password, email]
      );
      res.json({ message: "Contraseña actualizada actualizado con éxito" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Correo no encontrado." });
    }
  });
router
  .route("/")
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
        res.status(500).json({ message: "Error al crear el usuario" });
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
          res.status(500).json({ message: "Error al crear el usuario" });
        }
      }
    });
  })
  .get(async (req, res) => {
    try {
      const { rows } = await pool.query(
        "SELECT id_usuario, u_nombre, u_paterno, u_materno, u_telefono, u_fecha_nac, u_sexo, u_direccion FROM usuario"
      );
      if (rows) {
        console.log(rows[0]);
        res.status(201).json(rows);
      } else {
        res.status(401).json({ message: "No se encontraron usuarios." });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error al obtener usuarios." });
    }
  });

// Ruta para obtener, actualizar y eliminar un usuario por ID
router
  .route("/:id")
  .get(async (req, res) => {
    const { id } = req.params;
    try {
      const { rows } = await pool.query(
        "SELECT id_usuario, u_nombre, u_paterno, u_materno, u_telefono, u_fecha_nac, u_sexo, u_direccion FROM usuario WHERE id_usuario = $1",
        [id]
      );
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
  .patch(async (req, res) => {
    const { id } = req.params;
    const { nombre, paterno, materno, telefono, direccion } = req.body;
    try {
      await pool.query(
        "UPDATE usuario SET u_nombre = $1, u_paterno = $2, u_materno = $3, u_telefono = $4, u_direccion = $5 WHERE id_usuario = $6 RETURNING *;",
        [nombre, paterno, materno, telefono, , direccion, id]
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
      await pool.query("DELETE FROM usuario WHERE id_usuario = $1", [id]);
      res.json({ message: "Usuario eliminado con éxito" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error al eliminar el usuario" });
    }
  });

module.exports = router;
