const divTag = document.getElementById('world')

setTimeout(() => {
    // divTag.innerText = 'Welcome To Myanmar!'
}, 3000) // run code after 3 seconds 

setInterval(() => {
    // console.log('Hello ********', new Date())
}, 3000) // run code every 3 seconds


// ====================== Event ===================

const buttonTag = document.getElementById('btn')

buttonTag.addEventListener('click', () => {
    divTag.innerText = "Welcome To Myanmar"
})