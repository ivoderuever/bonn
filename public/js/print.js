const printBonForm = document.querySelector('#printRecipt');
const bon = document.querySelector('#bon');

if (printBonForm) {
  printBonForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if(bon.value === '') return alert('Please enter a value');
    axios.post('/api/print', {
      text: bon.value
    }).then((res) => {
      console.log(res.data);
    }).catch((err) => {
      console.log(err);
    });
    console.log(bon.value);
  });
}