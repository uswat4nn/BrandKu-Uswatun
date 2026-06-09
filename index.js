const buttonStart = document.querySelector('#buttonstart');
const teksInfo = document.querySelector('#teksinfo');

   let counter = 0;

   buttonStart.addEventListener('click', () => {
    // console.log(counter);

    counter++;

    if (counter === 1) {
      teksInfo.textContent = 'Clicked';
      // console.log('Clicked');
      teksInfo.classList.remove('hidden');


    } else if (counter === 2) {
      // console.log('Off');
      teksInfo.textContent = 'Off';
      teksInfo.classList.remove('hidden');
       buttonStart.disabled = true;
       buttonStart.classList.add('hidden');
    } 
  

});