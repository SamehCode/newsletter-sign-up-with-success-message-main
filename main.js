let form = document.getElementById('form');
let inputEmail = document.getElementById('mail');
let succesMsg = document.getElementById('success-msg');
let successBtn = document.getElementById('success-btn');
let invalidLabel = document.getElementById('invalid')
let inputControl = document.getElementById('input-control')

form.addEventListener('submit', e => {
    e.preventDefault();

    if(inputEmail.value.trim() !== '') {
        inputEmail.classList.add('success')
        succesMsg.classList.add('success')
        document.querySelector('.container').classList.add('success')
        
    } else {
        document.getElementById('invalid').classList.add('show')
    }
})

console.log(invalidLabel)

successBtn.onclick = function () {
    inputEmail.classList.remove('success')
    succesMsg.classList.remove('success')
    document.querySelector('.container').classList.remove('success')
    document.getElementById('invalid').classList.remove('show')
}