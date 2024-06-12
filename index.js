const hours = document.getElementById('hour')

const minutes = document.getElementById('minute')

const secounds = document.getElementById('secounds')

const container = document.getElementById('--container')
const toggler = document.getElementById('--bulb')



function lightAndDark(){
    container.classList.toggle('container--light')
    container.classList.toggle('container--dark')
    toggler.classList.toggle('--bulb--light')
    toggler.classList.toggle('--bulb--dark')
}

setInterval(function () {
    const currentDate = new Date()

    hours.style.transform = `translate(-50%, -50%) rotate(${currentDate.getHours() * 30}deg)`

    minutes.style.transform = `translate(-50%, -50%) rotate(${currentDate.getMinutes() * 6}deg)`

    secounds.style.transform = `translate(-50%, -50%) rotate(${currentDate.getSeconds() * 6}deg)`
}, 1000)