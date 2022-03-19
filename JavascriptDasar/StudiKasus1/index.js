const searchForm = document.querySelector('.search');
const plane = document.getElementById('plane');
const maskapaiName = document.querySelector('.maskapai-name');
const garuda = document.querySelector('.garuda');
const lion = document.querySelector('.lion');
const batavia = document.querySelector('.batavia');
// const ticketAvail = document.querySelector('.ticket-avail');

searchForm.addEventListener('submit', (event) => {
  let maskapaiTicket = [
    {
      name: garuda.value,
      stock: 0,
    },
    {
      name: lion.value,
      stock: 10,
    },
    {
      name: batavia.value,
      stock: 30,
    },
  ];

  for (let p = 0; p < maskapaiTicket.length; p++) {
    let jumlahTicket = (maskapaiName) => {
      if (maskapaiTicket[p].stock === 0) {
        console.log(`Maaf Tiket ${maskapaiTicket[p].name} Habis`);
        // ticketAvail.innerText = `Maaf Tiket ${maskapaiTicket[p].name} Habis`;
      } else if (maskapaiTicket[p].stock <= 10) {
        console.log(`Tiket ${maskapaiTicket[p].name} Tersisa < 10`);
        // ticketAvail.innerText = `Tiket ${maskapaiTicket[p].name} Tersisa < 10`;
      } else {
        console.log(maskapaiTicket[p].stock);
        // ticketAvail.innerText = maskapaiTicket[p].stock;
      }
    };
    jumlahTicket(maskapaiName);
  }

  const mencariMaskapai = () => {
    if (garuda.selected === true) {
      maskapaiName.innerText = garuda.value;
    } else if (lion.selected === true) {
      maskapaiName.innerText = lion.value;
    } else if (batavia.selected === true) {
      maskapaiName.innerText = batavia.value;
    }
  };

  event.preventDefault();
  mencariMaskapai();
});
