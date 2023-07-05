document.addEventListener("DOMContentLoaded", function() {
  const celsiusInput = document.getElementById("celsius");
  const fahrenheitInput = document.getElementById("fahrenheit");
  const kelvinInput = document.getElementById("kelvin");
  const submitButton = document.getElementById("submit");
  const clearButton = document.getElementById("clear");

  submitButton.addEventListener("click", function() {
    const celsius = parseFloat(celsiusInput.value);
    const fahrenheit = parseFloat(fahrenheitInput.value);
    const kelvin = parseFloat(kelvinInput.value);

    if (!isNaN(celsius)) {
      fahrenheitInput.value = (celsius * 9 / 5 + 32).toFixed(2);
      kelvinInput.value = (celsius + 273.15).toFixed(2);
    } else if (!isNaN(fahrenheit)) {
      celsiusInput.value = ((fahrenheit - 32) * 5 / 9).toFixed(2);
      kelvinInput.value = (((fahrenheit - 32) * 5 / 9) + 273.15).toFixed(2);
    } else if (!isNaN(kelvin)) {
      celsiusInput.value = (kelvin - 273.15).toFixed(2);
      fahrenheitInput.value = (((kelvin - 273.15) * 9 / 5) + 32).toFixed(2);
    }
  });

  clearButton.addEventListener("click", function() {
    celsiusInput.value = "";
    fahrenheitInput.value = "";
    kelvinInput.value = "";
  });
});