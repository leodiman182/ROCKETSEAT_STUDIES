const buttonOpenModal = document.getElementById('openModal')

const modalWrapper = document.querySelector('.modal-wrapper')

buttonOpenModal.onclick = function () {
    modalWrapper.classList.add('visible')
}

document.addEventListener('keydown', function(event) {
    const isEcsKey = event.key === 'Escape'

    if(modalWrapper.classList.contains('visible') || isEcsKey) {
        modalWrapper.classList.remove('visible')
    }
})