import React from "react";
import axios from "axios";

const CitaCard = ({ cita }) => {
  const reservarCita = async () => {
    try {
      await axios.post(`http://localhost:5067/api/citas/reservar/${cita.id}`);
      alert("Cita reservada con éxito");
    } catch (error) {
      console.error("Error al reservar cita", error);
      alert("Hubo un error al reservar la cita");
    }
  };

  return (
  <div className="cita-card">
    <p><strong>Fecha:</strong> {cita.fechaHora}</p>
    <p><strong>Médico:</strong> {cita.medico.nombre}</p>
    <button onClick={reservarCita}>Reservar</button>
  </div>
  );
};

export default CitaCard;
