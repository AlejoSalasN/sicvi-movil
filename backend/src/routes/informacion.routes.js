const express = require("express");
const router = express.Router();
const pool = require("../db/pool");

router
  .route("/")
  .get(async (req, res) => {
    try {
      const { rows } = await pool.query(
        "SELECT id_informacion, i_titulo, i_fecha, i_contenido, i_image FROM informacion ORDER BY i_fecha DESC limit 10"
      );
      if (rows) {
        res.status(201).json(rows);
      } else {
        res.status(401).json({ message: "No se encontró información." });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error de servidor" });
    }
  })
  .post(async (req, res) => {
    const { titulo, fecha, contenido, image } = req.body;
    try {
      await pool.query(
        "INSERT INTO informacion (i_titulo, i_fecha, i_contenido, i_image) VALUES ($1, $2, $3, $4)",
        [titulo, fecha, contenido, image]
      );
      res
        .status(201)
        .json({ message: "Información educativa creada con éxito." });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error interno del servidor." });
    }
  });

router
  .route("/:id")
  .get(async (req, res) => {
    const { id } = req.params;
    try {
      const { rows } = await pool.query(
        "SELECT * FROM informacion WHERE id_informacion = $1",
        [id]
      );
      if (rows) {
        res.status(201).json(rows);
      } else {
        res
          .status(401)
          .json({ message: "Información educativa no encontrada" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error al obtener evento. (Servidor)" });
    }
  })
  .put(async (req, res) => {
    const { id } = req.params;
    const { titulo, fecha, contenido, image } = req.body;
    try {
      const { rows } = await pool.query(
        "UPDATE informacion SET i_titulo, i_fecha, i_contenido, i_image WHERE id_informacion = $5) VALUES ($1, $2, $3, $4, $5)",
        [titulo, fecha, contenido, image, id]
      );
      if (rows) {
        res
          .status(200)
          .json({ message: "Información educativa modificada correctamente." });
      } else {
        res.status(401).json({ message: "No se encontró el evento." });
      }
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ message: "Error al crear la información.(Servidor)" });
    }
  })
  .delete(async (req, res) => {
    const { id } = req.params;
    try {
      const deleteQuery = `
      DELETE FROM informacion
      WHERE id_informacion = $1
    `;

      await pool.query(deleteQuery, [id]);
      res
        .status(200)
        .json({ message: "Información educativa eliminada correctamente." });
    } catch (error) {
      res.status(500).json({ error: "Error interno del servidor" });
    }
  });

module.exports = router;
