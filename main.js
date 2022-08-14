const form = document.querySelector('form')
const error = document.querySelector('.error')
const email = document.querySelector('input')



let emailTemplate = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

let emailValue = (emailcheck) => {
    if (emailcheck.value.match(emailTemplate)) return true
    else return false
}
let isValid = false
let compareEmail = (emailcheck) => {
    if(!isValid) return

   let emailIsTrue = emailValue(emailcheck)

    if (!emailIsTrue) {
        error.classList.remove('hidden')
        email.classList.add('error-border')
    }
    else{
        error.classList.add('hidden')
        email.classList.remove('error-border')
    }
}



form.addEventListener('submit', (e) => {  /* runs when form is submited */
isValid = true
    e.preventDefault()
    compareEmail(email)
})
email.addEventListener('input', () => {     /* clears the error when user is typing into the field */
    compareEmail(email)
})
