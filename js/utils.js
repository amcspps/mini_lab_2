const formValues = {}  // Сюда пишутся значения формы (Object как в Java, или dict из Python)
const formValidationUp = {}
const formValidationIn = {}
// Сюда пишутся статусы валидации каждого поля. Если поле ни разу не валидировалось,
// то при обращении к Object вернётся undefined, который при логическом сравнении обрабатывается как false


// Объявляется и инициализируется константная переменная
// Инициализация функцией, заданной в стрелочном виде
export const validatePassword = (password) => {
  const regExp = " "
  console.log("Password validation...")
  console.log(password.includes(regExp))
  if(String(password).includes(regExp) || String(password) == '') {
    return false
  }
  else {
    return true
  } 
}

export const validatePasswordRepeat = (password) => {
  const regExp = " "
  var password_repeat_up = document.getElementById('password-up').value
  console.log("Password repeat validation...")
  console.log (String(password), String(password_repeat_up))
  if(String(password) == String(password_repeat_up)&&(!String(password_repeat_up).includes(regExp)))  {
    return true
  }
  else {
    return false
  }
}

export const validatePasswordRepeatIn = (password) => {
  const regExp = " "
  var password_repeat_in = document.getElementById('password-in').value
  console.log("Password repeat validation...")
  console.log (String(password), String(password_repeat_in))
  if(String(password) == String(password_repeat_in)&&(!String(password_repeat_in).includes(regExp)))  {
    return true
  }
  else {
    return false
  }
}



export const validateEmail = (email) => {
  // Создадим шаблон регулярного выражения. В нём применяются шаблонные строки
  // Гуглить по тегам: "шаблонные строки js", "регулярные выражения"
  const regExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  return String(email)
    .toLowerCase()
    .match(regExp);
}


// Функция возвращающая true если все валидации пройдены, и false если хотя бы одна не пройдена
export const getValidationStatus = (formValidation) => {
  // Происходит функциональная мгаия, читай строчку кода ниже как:
  // Получить значения (не ключи) из объекта, затем применить к каждому значению функцию двойного логического отрицания
  // (преобразование к булевому типу) и результаты всех применений это true, то вернуть true, иначе - false
  return Object.values(formValidation).every((validationStatus) => !!validationStatus)
}


// Функция возвращающая которая ставит значение поля в форме по ключу
export const setFormValueUp = (valueKey, newValue, validator) => {
  formValues[valueKey] = newValue
  if (validator !== undefined) {
    formValidationUp[valueKey] = validator(newValue)
  }
}

export const setFormValueIn = (valueKey, newValue, validator) => {
  formValues[valueKey] = newValue
  if (validator !== undefined) {
    formValidationIn[valueKey] = validator(newValue)
  }
}

export const getValidationUp = (valueKey) => {
  return formValidationUp[valueKey]
}

export const getValidationIn = (valueKey) => {
  return formValidationIn[valueKey]
}
// Функция для обработки отправки формы регистрации
// В этой функции должен быть http запрос на сервер для регистрации пользователя (сейчас просто демонстрация)
export const submitSignUpForm = () => {
  if (!getValidationStatus(formValidationUp)) {
    console.log("FORM IS INCORRECT")
    alert("something is wrong. check ur fields")
    console.log(formValidationUp)
    return false
  }
  console.log("FORM IS FINE")
  alert("data is sent")
  console.log(formValues)
  return true
}

export const submitSignInForm = () => {
  if (!getValidationStatus(formValidationIn)) {
    console.log("FORM IS INCORRECT")
    alert("something is wrong. check ur fields")
    console.log(formValidationUp)
    return false
  }
  console.log("FORM IS FINE")
  alert("data is sent")
  console.log(formValues)
  return true
}