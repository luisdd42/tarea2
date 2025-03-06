function HistorialBusqueda({ historial }) {
  return (
    <div>
      <ul>
        {historial.length === 0 ? (
          <li>No hay historial de búsqueda</li>
        ) : (
          <li>{historial[0]}</li> // Mostrar solo el último país del historial
        )}
      </ul>
    </div>
  );
}

export default HistorialBusqueda;
