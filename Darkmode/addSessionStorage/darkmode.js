const body = document.querySelector('body');
const darkmodeBtn = document.getElementById('darkmodeBtn');

var mode = sessionStorage.getItem('mode');
if (mode === 'dark') {
  body.classList.add('dark');
}

darkmodeBtn.addEventListener('click', () => {
  body.classList.toggle('dark');
  if (mode === 'normal') {
    sessionStorage.setItem('mode', 'dark');
    mode = 'dark';
  } else {
    sessionStorage.setItem('mode', 'normal');
    mode = 'normal';
  }
});