const searchForm = document.querySelector('.search');
const plane = document.getElementById('plane');
const maskapaiName = document.querySelector('.maskapai-name');

searchForm.addEventListener('submit', (event) => {
  const garuda = document.querySelector('.garuda');
  const lion = document.querySelector('.lion').value;
  const batavia = document.querySelector('.batavia').value;

  const mencariMaskapai = () => {
    if (garuda.selected === true) {
      maskapaiName.innerText = garuda.value;
    } else if (lion.selected === true) {
      maskapaiName.innerText = lion.value;
    }
  };
  event.preventDefault();

  mencariMaskapai();
});
