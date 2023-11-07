import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import Option from "../components/Options";
import Results from "../components/Results";

const preguntas = [
  "¿Has experimentado situaciones de violencia en tu vida?",
  "¿Te sientes intimidado/a o temeroso/a de alguien en tu entorno?",
  "¿Has sido objeto de burlas, insultos o humillaciones por parte de alguien cercano a ti?",
  "¿Has tenido que ocultar información o cambiar tu comportamiento para evitar conflictos con alguien?",
  "¿Te han amenazado con dañarte físicamente o con difamarte?",
  "¿Has sentido que alguien te controla o te limita en tus decisiones y acciones?",
  "¿Has presenciado situaciones de violencia en tu entorno, como peleas, agresiones físicas o verbales?",
  "¿Has buscado ayuda o apoyo debido a situaciones de violencia que has experimentado o presenciado?",
  "¿Te has sentido presionado/a o coaccionado/a a hacer cosas que no querías hacer?",
  "¿Has sufrido agresiones físicas por parte de alguien en tu vida?",
  "¿Has presenciado discriminación o prejuicios hacia otras personas debido a su género, raza, religión u orientación sexual?",
  "¿Te han forzado a mantener relaciones sexuales contra tu voluntad?",
  "¿Te han difamado o intentado dañar tu reputación de manera maliciosa?",
  "¿Te han acosado de manera persistente a través de medios digitales o redes sociales?",
  "¿Te han presionado o amenazado para que te mantengas en silencio sobre situaciones de violencia que has experimentado?",
];

const Encuesta = () => {
  const [total, setTotal] = useState(0);
  const [visible, setVisible] = useState(false);
  const [respuesta, setRespuesta] = useState("");

  const handleCalculate = () => {
    if (total >= 45) {
      setRespuesta(
        "¡CUIDADO! Pide asesoría y apoyo, tu seguridad puede estar en riesgo."
      );
    } else if (total >= 30) {
      setRespuesta(
        "ESTÁS EXPERIMENTANDO VIOLENCIA. Busca apoyo y considera tomar medidas para tu bienestar."
      );
    } else if (total >= 15) {
      setRespuesta(
        "ES POSIBLE QUE HAYA SEÑALES DE ABUSO EN TU VIDA. Reflexiona sobre tus relaciones y busca apoyo."
      );
    } else {
      setRespuesta(
        "NO PARECE QUE EXPERIMENTES VIOLENCIA, pero recuerda que la violencia puede tomar muchas formas. Mantén relaciones saludables y busca apoyo si lo necesitas."
      );
    }

    setVisible(true);
  };

  const handleModalClose = () => {
    setVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cuestionario</Text>

      <ScrollView style={{ flex: 1 }}>
        <Text style={styles.instructions}>
          Por favor, responde con sinceridad a las siguientes preguntas sobre
          situaciones de violencia en tu vida. Para cada pregunta, elige una de
          las siguientes opciones: sí, a veces, rara vez, no.
        </Text>
        {preguntas?.map((pregunta, index) => (
          <View key={`opcion-${index}`} style={styles.questionContainer}>
            <Text style={styles.textQuestion}>
              {`${index + 1}. ${pregunta}`}
            </Text>
            <Option total={total} setTotal={setTotal} />
          </View>
        ))}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleCalculate}>
            <Text style={styles.textButton}>Calcular</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <Results
        visible={visible}
        onClose={handleModalClose}
        respuesta={respuesta}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    fontWeight: "bold",
    marginVertical: 6,
  },
  instructions: {
    fontSize: 14,
    fontWeight: "400",
    marginTop: 6,
    marginBottom: 12,
  },
  questionContainer: {
    marginVertical: 6,
    padding: 10,
    backgroundColor: "#F7F7F7", // Color de fondo suave
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  textQuestion: {
    marginBottom: 6,
    fontSize: 16,
    fontWeight: "500",
    color: "#000",
  },
  buttonContainer: {
    flex: 1,
    alignItems: "flex-end",
    marginBottom: 12,
  },
  button: {
    backgroundColor: "#59028e",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    width: 150,
    height: 46,
  },
  textButton: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Encuesta;
