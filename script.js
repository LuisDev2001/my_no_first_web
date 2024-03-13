const $btnMenu = document.getElementById('btnMenu')
const $menu = document.getElementById('menu')

const $form = document.getElementById('form')
const $alert = document.getElementById('alert')
const $fieldName = document.getElementById('name')

const validInputName = (input, alertContainer, message) => {
  let valid = true
  if (input.length < 4) {
    alertContainer.style.display = 'block'
    alertContainer.innerHTML += message
    valid = false
  } else {
    alertContainer.style.display = 'block'
    alertContainer.innerHTML = 'Mensaje enviado!'
    valid = true
  }

  return { valid }
}

$form.addEventListener('submit', (event) => {
  const { valid } = validInputName($fieldName.value, $alert, '* El campo nombre debe de tener  al menos 4 letras.<br>')
  if (!valid) {
    event.preventDefault()
  }
})

$btnMenu.addEventListener('click', () => {
  $menu.classList.toggle('active')
})

$menu.addEventListener('click', (event) => {
  if (event.target.tagName === 'A') {
    $menu.classList.remove('active')
  }
})
