import {setFormValueUp, setFormValueIn, submitSignUpForm,submitSignInForm, validateEmail, validatePassword, validatePasswordRepeat, validatePasswordRepeatIn, getValidationUp, getValidationIn} from "./utils.js"


////// ДЕМОНСТРАЦИОННЫЙ УЧАСТОК КОДА. На оценку не влияет, исключительно для саморазвития.

// Предлагаю "поиграться" с частями кода ниже, чтобы познакомиться с JS
// Получаем элемент и меняем его класс, который определеён в библиотеке стилей materialize

//  password.classList.add("valid")
//  password.classList.remove("valid")

// В браузере можно посмотреть, что из себя представляет документ
// (CTRL+SHIFT+i для открытия консоли и открыть вкладку "консоль", туда будет залогированно значение)
console.log("Document")
console.log(document)

// Если запросить id, которого нет в DOM дереве - вернется undefined
// => надо быть осторожней: коллега может поменять id вашего элемента и упадёт !ВАШ! код
// const first_name = document.getElementById('first_name_invalid');
// first_name.oninput = (e) => validatePassword(e)

// Селекция по классу. Может пригодится, для того, чтобы упростить обработку полей в двух формах.
// Чтобы не делать кучу уникальных айди, можно определённым полям формы давать один класс и обрабатывать их в цикле
// const passwords = document.querySelectorAll('.password')
// console.log(passwords)
// for (const password of passwords) {
//   password.style.background = "red"
// }

////// КОНЕЦ ДЕМОНСТРАЦИОННОГО УЧАСТКА КОДА. Дальше код для оцениваемой части задания


// Выписываем все айдишники HTMl-элементов в константы для переиспользования
const first_name_id = 'first_name'
const last_name_id = 'last_name'
const password_up_id = 'password-up'
const password_up_repeat_id = 'password-up-repeat'
const email_id = 'email'

const sign_in_link_id = 'sign_in_link'
const sign_up_form_id = 'sign_up_form'

const sign_up_btn_id = 'sign_up_btn'
const sign_in_btn_id = 'sign_in_btn'
const sign_in_form_id = 'sign_in_form'
const sign_up_link_id = 'sign_up_link'

// Получаем элемент DOM-дерева по id и присваиваем значение аттрибуту oninput
// oninput вызывается с параметром "event" каждый раз, когда ввод меняется
// Значение, которое мы присваеваем этому аттрибуту - это функция, определённая в стрелочном стиле
// Гуглить по тегам "события JS", "onchange/oninput HTML", "стрелочные функции JS", ...

const first_name = document.getElementById(first_name_id);
first_name.oninput = (e) => setFormValueUp(first_name_id, e.target.value)  // Установить значение без валидации

const email = document.getElementById(email_id);
email.oninput = (e) => setFormValueUp(email_id, e.target.value, validateEmail) // Установить значение с валидацией

const password_up = document.getElementById('password-up');
const password_up_repeat = document.getElementById('password-up-repeat');
password_up.oninput = (e) => {
  setFormValueUp(password_up_id, e.target.value, validatePassword)
  if (!getValidationUp(password_up_id)) {
    password_up.classList.add("invalid")
  }
  else {
    password_up.classList.remove("invalid")
  }
}

 password_up_repeat.oninput = (e) => {
  setFormValueUp(password_up_repeat_id, e.target.value, validatePasswordRepeat)
  if (!getValidationUp(password_up_repeat_id)) {
    password_up_repeat.classList.add("invalid")
  }
  else {
    password_up_repeat.classList.remove("invalid")
  }
}

const password_in = document.getElementById('password-in');
const password_in_repeat = document.getElementById('password-in-repeat');
password_in.oninput = (e) => {
  setFormValueIn(password_up_id, e.target.value, validatePassword)
  if (!getValidationIn(password_up_id)) {
    password_in.classList.add("invalid")
  }
  else {
    password_in.classList.remove("invalid")
  }
}

 password_in_repeat.oninput = (e) => {
  setFormValueIn(password_in_repeat, e.target.value, validatePasswordRepeatIn)
  if (!getValidationIn(password_in_repeat)) {
    password_in_repeat.classList.add("invalid")
  }
  else {
    password_in_repeat.classList.remove("invalid")
  }
 }


// Меняем стили объекта DOM дерева. Это позволяет скрыть форму регистрации и показать форму авторизации
// Объект формы не исключается из DOM дерева, а просто становистя невидимым
const switch_to_sign_in = document.getElementById(sign_in_link_id);
switch_to_sign_in.onclick = (e) => {
  document.getElementById(sign_up_form_id).style.display = "none"
  document.getElementById(sign_in_form_id).style.display = ""
}

const switch_to_sign_up = document.getElementById(sign_up_link_id);
switch_to_sign_up.onclick = (e) => {
  document.getElementById(sign_in_form_id).style.display = "none"
  document.getElementById(sign_up_form_id).style.display = ""
}

const sign_up_btn = document.getElementById(sign_up_btn_id);
sign_up_btn.onclick = (e) => {
  // При нажатии кнопки в форме по умолчанию происходит перезагрузка страницы.
  // Чтобы отключить его, нужно отменить стандартное поведение события

  if(!submitSignUpForm()) {
    e.preventDefault()
  }
}

const sign_in_btn = document.getElementById(sign_in_btn_id);
sign_in_btn.onclick = (e) => {
  // При нажатии кнопки в форме по умолчанию происходит перезагрузка страницы.
  // Чтобы отключить его, нужно отменить стандартное поведение события
  if(!submitSignInForm()) {
    e.preventDefault()
  }
}
