const modalOpener = document.querySelector('.modal-opener')
const modal = document.querySelector('.exit-modal')
const blur = document.querySelector('.blur-layout')
const exitBtn = document.querySelector('.exit-btn')

modalOpener.addEventListener('click', () => {
  modal.classList.remove('closed')
  blur.classList.remove('closed')
})

exitBtn.addEventListener('click', () => {
  modal.classList.add('closed')
  blur.classList.add('closed')
})
