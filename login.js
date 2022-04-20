const name = document.getElementById('username')
const password = document.getElementById('password')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
    let messages = []
    if (name.value === '' || name.value == null){
        messages.push('Email or phone number is required!')
    }

    if (password.value.length <= 0){
        messages.push('password required!')
    }


    if (messages.length > 0){
        e.preventDefault()
        errorElement.innerText = messages.join(', ')

    }
    
    
})