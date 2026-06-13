const userSelect = document.getElementById('userSelect');
const modeSwitch = document.getElementById('modeSwitch');
const tableImage = document.getElementById('tableImage');

function updateImage() {
  const user = userSelect.value;
  const isTo = modeSwitch.checked;

  if (isTo) {
    // В режиме TO всегда показываем заглушку "soon", независимо от пользователя
    tableImage.src = `images/soon.gif`;
    tableImage.alt = 'Soon';
  } else {
    tableImage.src = `images/${user}_from.png`;
    tableImage.alt = `${user} — FROM`;
  }
}

userSelect.addEventListener('change', updateImage);
modeSwitch.addEventListener('change', updateImage);

// Init
updateImage();
