// Referencias sliders
const red = document.getElementById('red');
const green = document.getElementById('green');
const blue = document.getElementById('blue');

// Inputs numéricos
const inputRed = document.getElementById('inputRed');
const inputGreen = document.getElementById('inputGreen');
const inputBlue = document.getElementById('inputBlue');

// Otros elementos
const colorBox = document.getElementById('colorBox');
const hexCode = document.getElementById('hexCode');
const headerColor = document.getElementById('headerColor');
const copyBtn = document.getElementById('copyBtn');

// Actualizar color
function updateColor() {
  const r = parseInt(red.value);
  const g = parseInt(green.value);
  const b = parseInt(blue.value);

  // Sincronizar inputs
  inputRed.value = r;
  inputGreen.value = g;
  inputBlue.value = b;

  // Aplicar colores
  const rgbColor = `rgb(${r}, ${g}, ${b})`;
  colorBox.style.backgroundColor = rgbColor;
  headerColor.style.backgroundColor = rgbColor;

  // Hex
  const hex = "#" +
    r.toString(16).padStart(2, '0') +
    g.toString(16).padStart(2, '0') +
    b.toString(16).padStart(2, '0');

  hexCode.textContent = hex.toUpperCase();
}

// Actualizar desde inputs numéricos
function updateFromInputs() {
  const r = Math.min(255, Math.max(0, parseInt(inputRed.value) || 0));
  const g = Math.min(255, Math.max(0, parseInt(inputGreen.value) || 0));
  const b = Math.min(255, Math.max(0, parseInt(inputBlue.value) || 0));

  red.value = r;
  green.value = g;
  blue.value = b;

  updateColor();
}

// Copiar código al portapapeles
copyBtn.addEventListener('click', () => {
  navigator.clipboard.writeText(hexCode.textContent).then(() => {
    copyBtn.textContent = "✅ Copiado";
    setTimeout(() => copyBtn.textContent = "📋 Copiar", 2000);
  });
});

// Eventos
[red, green, blue].forEach(slider => slider.addEventListener('input', updateColor));
[inputRed, inputGreen, inputBlue].forEach(input => input.addEventListener('input', updateFromInputs));

// Inicializar
updateColor();
