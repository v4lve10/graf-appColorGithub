const red = document.getElementById("red");
const green = document.getElementById("green");
const blue = document.getElementById("blue");

const redInput = document.getElementById("redInput");
const greenInput = document.getElementById("greenInput");
const blueInput = document.getElementById("blueInput");

const colorPicker = document.getElementById("colorPicker");
const colorBox = document.getElementById("colorBox");
const rgbText = document.getElementById("rgbText");
const hexText = document.getElementById("hexText");

// Función para actualizar color
function updateColor(r, g, b) {
  const color = `rgb(${r}, ${g}, ${b})`;
  const hex = rgbToHex(r, g, b);

  // Actualizar cuadro y textos
  colorBox.style.backgroundColor = color;
  rgbText.textContent = color;
  hexText.textContent = hex;

  // Sincronizar inputs
  red.value = r;
  green.value = g;
  blue.value = b;
  redInput.value = r;
  greenInput.value = g;
  blueInput.value = b;
  colorPicker.value = hex;
}

// Convertir RGB a HEX
function rgbToHex(r, g, b) {
  return (
    "#" +
    [r, g, b]
      .map((x) => {
        const hex = parseInt(x).toString(16);
        return hex.length === 1 ? "0" + hex : hex;
      })
      .join("")
  );
}

// Convertir HEX a RGB
function hexToRgb(hex) {
  let bigint = parseInt(hex.slice(1), 16);
  let r = (bigint >> 16) & 255;
  let g = (bigint >> 8) & 255;
  let b = bigint & 255;
  return [r, g, b];
}

// Eventos sliders
[red, green, blue].forEach((slider) => {
  slider.addEventListener("input", () => {
    updateColor(red.value, green.value, blue.value);
  });
});

// Eventos inputs numéricos
[redInput, greenInput, blueInput].forEach((input) => {
  input.addEventListener("input", () => {
    updateColor(redInput.value, greenInput.value, blueInput.value);
  });
});

// Evento color picker
colorPicker.addEventListener("input", () => {
  const [r, g, b] = hexToRgb(colorPicker.value);
  updateColor(r, g, b);
});

// Inicializar
updateColor(0, 0, 0);
