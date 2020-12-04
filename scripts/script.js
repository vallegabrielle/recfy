// sliding images

let time = 2000
let actualImage = 0
let selectImage = document.querySelectorAll("#images img")
let numberImages = selectImage.length

window.onload = function() {
    setInterval(() => {
        nextImage()
    }, time)
}

function nextImage() {
    selectImage[actualImage].classList.remove("actual")

    actualImage++

    if (actualImage == numberImages) actualImage = 0

    selectImage[actualImage].classList.add("actual")
}

// theme colors

const html = document.querySelector('html')
const switchButton = document.getElementById('switch-button')
const textButton = document.getElementById('text-button')


switchButton.addEventListener('click', function() {
    html.classList.toggle('dark-mode')
})