const showBtn = document.getElementById("show-btn");
const modal = document.getElementById("modal");
const close = document.getElementById("close");
const overlay = document.getElementById("overlay")

showBtn.addEventListener('click', () => {
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')

})
close.addEventListener('click', () => {
    modal.classList.add('hidden')
    overlay.classList.add('hidden')

})