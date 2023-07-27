document.getElementById("calculadora").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevenir el envío del formulario
  
    const gramsOfRice = parseFloat(document.getElementById("grams").value);
    const agua = gramsOfRice * 1.1;
    const vinagreArroz = gramsOfRice * 0.18;
    const azucar = gramsOfRice * 0.03333333333;
    const sal = gramsOfRice * 0.0133333333;
  
    // Mostrar los resultados en el área de resultados
    document.getElementById("resultado").innerHTML = `
      <p>Cantidad de agua necesaria: ${agua.toFixed(2)} ml</p>
      <p>Cantidad de vinagre de arroz necesaria: ${vinagreArroz.toFixed(2)} ml</p>
      <p>Cantidad de azúcar necesaria: ${azucar.toFixed(2)} gramos</p>
      <p>Cantidad de sal necesaria: ${sal.toFixed(2)} gramos</p>
    `;
  });
  