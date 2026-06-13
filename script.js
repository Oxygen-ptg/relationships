const userSelect = document.getElementById('userSelect');
const modeSwitch = document.getElementById('modeSwitch');
const tableImage = document.getElementById('tableImage');

function updateImage() {
  const user = userSelect.value;
  const mode = modeSwitch.checked ? 'to' : 'from';
  tableImage.src = `images/${user}_${mode}.webp`;
  tableImage.alt = `${user} — ${mode === 'to' ? 'TO' : 'FROM'}`;
}

userSelect.addEventListener('change', updateImage);
modeSwitch.addEventListener('change', updateImage);

// Init
updateImage();
