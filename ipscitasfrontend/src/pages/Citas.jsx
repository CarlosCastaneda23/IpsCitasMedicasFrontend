import React, { useState } from "react";
import axios from "axios";
import CitaCard from "../components/CitaCard";

const Citas = () => {
  const [especialidad, setEspecialidad] = useState("");
  const [citas, setCitas] = useState([]);
  const [loading, setLoading] = useState(false);

  const obtenerCitas = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`http://localhost:5067/api/citas/disponibles/${especialidad}`);
      setCitas(response.data);
    } catch (error) {
      console.error("Error al obtener citas", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="citas-container">
        <h1 className="citas-title">Reservar Cita Médica</h1>
    
        <select
        className="citas-select"
        value={especialidad}
        onChange={(e) => setEspecialidad(e.target.value)}
        >
        <option value="">Seleccione una especialidad</option>
        <option value="Medicina General">Medicina General</option>
        <option value="Odontologia">Odontología</option>
        </select>
    
        <button
        className="citas-boton"
        onClick={obtenerCitas}
        disabled={loading}
        >
        {loading ? "Buscando citas..." : "Buscar Citas"}
        </button>
    
        <div className="citas-listado">
        {citas.length > 0 ? (
            citas.map((cita) => <CitaCard key={cita.id} cita={cita} />)
        ) : (
            <p className="text-gray-500 mt-2">No hay citas disponibles</p>
        )}
        </div>
    </div>
  );
};

export default Citas;
