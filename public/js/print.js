const printBonForm = document.querySelector('#printRecipt');
const printBonbtn = document.querySelector('#submitBon');
const bon = document.querySelector('#bon');

if (printBonForm) {
  printBonForm.addEventListener('submit', (e) => {
    printBonForm.disabled = true;
    bon.disabled = true;
    e.preventDefault();
    if(bon.value === '') return alert('Please enter a value');
    axios.post('/api/print', {
      text: bon.value
    }).then((res) => {
      printBonForm.disabled = false;
      bon.disabled = false;
      window.location.href = '/#liveStreamPage';
    }).catch((err) => {
      alert('Something went wrong');
      printBonForm.disabled = false;
      bon.disabled = false;
      console.log(err);
    });
    console.log(bon.value);
  });
}