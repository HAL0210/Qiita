const body = document.querySelector('body');
const darkmodeBtn = document.getElementById('darkmodeBtn');
const clearBtn = document.getElementById('clear');

var mode = localStorage.getItem('mode');
if (mode === 'dark') {
  body.classList.add('dark');
}

darkmodeBtn.addEventListener('click', () => {
  body.classList.toggle('dark');
  if (mode === 'dark') {
    localStorage.setItem('mode', 'normal');
    mode = 'normal';
  } else {
    localStorage.setItem('mode', 'dark');
    mode = 'dark';
  }
});

clearBtn.addEventListener('click', () => {
  localStorage.removeItem('mode');
  console.log('ローカルストレージがクリアされました。')
});