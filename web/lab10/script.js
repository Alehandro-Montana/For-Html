
let btnShow =document.querySelector('button');
const form = document.getElementById('form');
const username = document.getElementById('username');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
var valid =false;
//const cbox =document.getElementById('cbox');
var cbox =document.querySelectorAll("input[type='checkbox']");
 if(document.getElementById("cbox").cheked){
     valid=true;
 }
 if(valid){
     alert("Данные отправлены");
 }
 else{
     alert("Поставьте галочку");
     return false;
 }

if(check.value==true)
    alert('win');
function check(mycheckbox){
    if(cbox.cheked==true)
        alert("Send");
    else
        alert("Подтвердите ,что вам есть 18");
}
btnShow.addEventListener('click',()=>{
    let checkbox=document.querySelector('input[type="checkbox"]:checked');
    if(checkbox.value==true)
        alert('win');
}
);

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};


const validateInputs = () => {
    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
   // const cbox =cbox.value.trim();


    if(usernameValue === '') {
        setError(username, 'Введите Имя');
    } else {
        setSuccess(username);
    }
    if(passwordValue === '') {
        setError(password, 'Введите пароль');
    } else {
        setSuccess(password);
    }

    if(password2Value === '') {
        setError(password2, 'Повторите пароль');
    } else if (password2Value !== passwordValue) {
        setError(password2, "Пароли не совпадают");
    } else {
        setSuccess(password2);
    }
    if(document.getElementById("terms").cheked){
       alert("Принято");
    }
    else{
        alert("Не выбрано");
    }
};
