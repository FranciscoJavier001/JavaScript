import React, { useState } from "react";

function App() {
  const [fechaFinal, setFechaFinal] = useState("");
  const [resultado, setResultado] = useState("");

  // Función para asignar la fecha de "hoy"
  const setFechaHoy = () => {
    const hoy = new Date();
    const hoyISO = hoy.toISOString().split("T")[0]; // YYYY-MM-DD
    setFechaFinal(hoyISO);
  };

  // Función para calcular el gasto desde 10/01/2025 hasta la fecha ingresada
  const calcularGasto = () => {
    // Validar que exista una fecha
    if (!fechaFinal) {
      setResultado("Por favor, ingresa o selecciona una fecha.");
      return;
    }

    // Fecha ingresada
    const fechaIngresada = new Date(fechaFinal);

    // Fecha de inicio: 10 de enero de 2025
    const fechaInicio = new Date(2025, 0, 10);

    // Diferencia en milisegundos
    const diferenciaMs = fechaIngresada - fechaInicio;
    const unDiaMs = 24 * 60 * 60 * 1000;

    // Días transcurridos
    const diasDiferencia = Math.floor(diferenciaMs / unDiaMs);

    // Si la fecha ingresada es anterior al 10/01/2025
    if (diasDiferencia < 0) {
      setResultado(
        "La fecha ingresada es anterior al 10 de enero de 2025. No hay gastos que calcular."
      );
      return;
    }

    // Cálculo del gasto (4.20 pesos por día)
    const gastoPorDia = 4.23;
    const totalGastado = diasDiferencia * gastoPorDia;

    // Mostrar resultado
    const resultadoTexto =
      `Días transcurridos: ${diasDiferencia}\n` +
      `Total gastado: $${totalGastado.toFixed(2)}`;

    setResultado(resultadoTexto);
  };

  // Estilos
  const containerStyle = {
    maxWidth: "400px",
    margin: "20px auto",     // Centra el contenedor horizontalmente
    textAlign: "center",     // Centra el contenido de texto
    fontFamily: "Arial, sans-serif"
  };

  const textareaStyle = {
    whiteSpace: "pre-line",
    marginTop: "20px",
    fontWeight: "bold"
  };

  return (
    <div style={containerStyle}>
      <h1>Calculadora de Gastos</h1>
      <p>
        Esta calculadora te muestra cuánto has gastado desde el{" "}
        <strong>10 de enero de 2025</strong> hasta la fecha que indiques,
        asumiendo un gasto de $4.23 por día.
      </p>

      {/* Campo para seleccionar la fecha */}
      <label>Selecciona la fecha:</label>
      <br />
      <input
        type="date"
        value={fechaFinal}
        onChange={(e) => setFechaFinal(e.target.value)}
        style={{
          width: "50%",        // Ocupa la mitad del ancho del contenedor
          margin: "0 auto",    // Centra el elemento horizontalmente
          marginBottom: "10px",
          padding: "8px"
        }}
      />
      <br />
      {/* Botón para poner la fecha de hoy */}
      <button
        onClick={setFechaHoy}
        style={{ marginRight: "10px", padding: "8px" }}
      >
        Usar fecha de hoy
      </button>

      {/* Botón para calcular */}
      <button onClick={calcularGasto} style={{ padding: "8px" }}>
        Calcular
      </button>

      {/* Muestra el resultado */}
      <div style={textareaStyle}>{resultado}</div>
    </div>
  );
}

export default App;
