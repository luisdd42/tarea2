function BarraBusqueda({ setPais }) {
  return (
    <input
      type="text"
      placeholder="Escribe un país"
      onChange={(e) => setPais(e.target.value)} // Actualiza el estado del país
    />
  );
}

export default BarraBusqueda;
