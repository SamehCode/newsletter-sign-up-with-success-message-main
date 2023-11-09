
let inputMail = document.getElementById('mail');
let form = document.getElementById('form');
let errorElement = document.getElementById('error')


form.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log(inputMail.value.length)
    let mailRe = /\w+@\w+.\w+/i
    let msg = [];
    console.log(mailRe.test(inputMail.value))
    
    if (mailRe.test(inputMail.value)) {
        e.preventDefault()
        form.classList.add('success');
        document.querySelector('.container').classList.add('success');
        document.getElementById('success-msg').classList.add('success');
        errorElement.innerText = 'succeed';
        inputMail.classList.remove('fail');
        document.querySelector('.pSucces span').innerText = inputMail.value;
        return true
    } else {
        e.preventDefault()
        errorElement.innerText = 'Valid email required'
        inputMail.innerText = inputMail.value;
        inputMail.classList.add('fail')
        return false
    }

})

document.getElementById('success-btn').onclick = function () {
    form.classList.remove('success');
    document.querySelector('.container').classList.remove('success')
    document.getElementById('success-msg').classList.remove('success')
}
// console.log(/^[a-zA-Z1-9]+@[a-zA-Z1-9]+\.\w+/.test(mail))
