import { useState, useEffect } from "react";
import BarraBusqueda from "./componentes/BarraBusqueda";
import InformacionPais from "./componentes/InformacionPais";
import HistorialBusqueda from "./componentes/HistorialBusqueda";

function App() {
  const [pais, setPais] = useState(""); // Estado para el nombre del país
  const [datos, setDatos] = useState(null); // Estado para los datos del país
  const [historial, setHistorial] = useState([]); // Estado para el historial de búsquedas
  const [error, setError] = useState(null); // Estado para los errores

  useEffect(() => {
    if (pais === "") {
      setDatos(null);
      setError(null);
      return;
    }

    const buscarPais = async () => {
      try {
        const respuesta = await fetch(
          `https://restcountries.com/v3.1/name/${pais}`
        );
        if (!respuesta.ok) {
          throw new Error("País no encontrado");
        }
        const data = await respuesta.json();
        setDatos(data[0]);
        setError(null);

        // Actualizar historial con el último país buscado (sin duplicados)
        setHistorial((prevHistorial) => {
          // Si el país ya está en el historial, no lo agregamos
          if (!prevHistorial.includes(data[0].name.common)) {
            return [data[0].name.common]; // Solo el último país buscado
          }
          return prevHistorial; // Si ya está, no hacemos cambios
        });
      } catch (error) {
        setDatos(null);
        setError(error.message);
      }
    };

    buscarPais();
  }, [pais]);

  return (
    <div className="app-container">
      <h1>Buscador de Países</h1>

      {/* Recuadro para la barra de búsqueda */}
      <div className="recuadro">
        <h2>Buscar Países</h2>
        <BarraBusqueda setPais={setPais} />
      </div>

      {/* Recuadro para los resultados */}
      <div className="recuadro">
        <h2>Resultados</h2>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <InformacionPais datos={datos} />
      </div>

      {/* Recuadro para el historial de búsqueda */}
      <div className="recuadro">
        <h2>Historial de Búsqueda</h2>
        <HistorialBusqueda historial={historial} />
      </div>
    </div>
  );
}

export default App;
