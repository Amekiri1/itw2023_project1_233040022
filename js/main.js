// Scroll Header
const scrollHeader = () =>{
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('scroll-header') 
                       : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

// PopUp
const scriptURL = 'https://script.google.com/macros/s/AKfycbz3YE1bjRvdI-vZSwBnbb3cex1Cl7t6g0QGpz9iZdIyQR-VL8KR1dGaWSpK3aagfw4WRg/exec'
const form = document.forms['Asep-Deri-Contact-Form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert("Thank you! your form is submitted successfully." ))
    .then(() => { window.location.reload(); })
    .catch(error => console.error('Error!', error.message))
})