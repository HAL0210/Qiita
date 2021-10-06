{
  
  const body = document.querySelector('body');
  const darkmodeBtn = document.getElementById('darkmodeBtn');
  
  var isDarkmode = localStorage.getItem('darkmode');
  console.log(isDarkmode)
  if (isDarkmode === 'dark') {
    body.classList.add('dark');
  }

  darkmodeBtn.addEventListener('click', () => {
    body.classList.toggle('dark');
    if (isDarkmode === 'normal') {
      localStorage.setItem('darkmode', 'dark');
    } else {
      localStorage.setItem('darkmode', 'normal');
    }
    isDarkmode = localStorage.getItem('darkmode');
    console.log(isDarkmode)
  });
}