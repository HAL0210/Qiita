{
  const body = document.querySelector('body');
  const darkmodeBtn = document.getElementById('darkmodeBtn');
  darkmodeBtn.addEventListener('click', () => {
    body.classList.toggle('dark');
  });
}