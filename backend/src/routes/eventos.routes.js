const express = require("express");
const router = express.Router();
const pool = require("../db/pool");

router
  .route("/")
  .get(async (req, res) => {
    try {
      const fechaActual = new Date().toISOString().split("T")[0];
      const { rows } = await pool.query(
        "SELECT id_evento, e_fecha, e_titulo, e_image, e_descripcion FROM evento WHERE e_fecha >= $1",
        [fechaActual]
      );
      if (rows) {
        res.status(201).json(rows);
      } else {
        res.status(401).json({ message: "No se encontraron eventos." });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error interno del servidor" });
    }
  })
  .post(async (req, res) => {
    const { titulo, fecha, dia, ubicacion, tipo, descripcion, image } =
      req.body;
    try {
      await pool.query(
        "INSERT INTO evento (e_titulo, e_fecha, e_dia, e_ubicacion, e_tipo, e_descripcion, e_image) VALUES ($1, $2, $3, $4, $5, $6, $7)",
        [titulo, fecha, dia, ubicacion, tipo, descripcion, image]
      );
      res.status(201).json({ message: "Evento creado con éxito." });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error al crear el evento. (Servidor)" });
    }
  });

router
  .route("/:id")
  .get(async (req, res) => {
    const id = req.params.id;
    try {
      const { rows } = await pool.query(
        "SELECT * FROM evento WHERE id_evento = $1",
        [id]
      );
      if (rows) {
        res.status(201).json(rows);
      } else {
        res.status(401).json({ message: "Evento no encontrado" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error al obtener evento. (Servidor)" });
    }
  })
  .put(async (req, res) => {
    const id = req.params.id;
    const { titulo, fecha, dia, ubicacion, tipo, descripcion, image } =
      req.body;
    try {
      const { rows } = await pool.query(
        "UPDATE evento SET e_titulo, e_fecha, e_dia, e_ubicacion, e_tipo, e_descripcion, e_image WHERE id_evento = $8) VALUES ($1, $2, $3, $4, $5, $6, $7)",
        [titulo, fecha, dia, ubicacion, tipo, descripcion, image, id]
      );
      if (rows) {
        res.status(200).json({ message: "Evento modificado correctamente." });
      } else {
        res.status(401).json({ message: "No se encontró el evento." });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error al crear el evento.(Servidor)" });
    }
  })
  .delete(async (req, res) => {
    const { id } = req.params;
    try {
      const deleteQuery = `
      DELETE FROM evento
      WHERE id_evento = $1
    `;

      await pool.query(deleteQuery, [id]);
      res.status(200).json({ message: "Evento eliminado correctamente." });
    } catch (error) {
      res.status(500).json({ error: "Error interno del servidor" });
    }
  });

module.exports = router;
