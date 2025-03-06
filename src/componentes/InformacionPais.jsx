function InformacionPais({ datos }) {
  if (!datos) return null;

  return (
    <div>
      <h2>{datos.name.common}</h2>
      <img
        src={datos.flags.png}
        alt={`Bandera de ${datos.name.common}`}
        width="150"
      />
      <p>
        <strong>Capital:</strong> {datos.capital?.[0] || "No disponible"}
      </p>
      <p>
        <strong>Población:</strong> {datos.population.toLocaleString()}
      </p>
    </div>
  );
}

export default InformacionPais;
