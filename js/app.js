/*****************************************************************************************/
/********** ZADANIE 1.1 ***********/
/*****************************************************************************************/

let generujBtn = document.getElementById('generuj');
let sprawdzajBtn = document.getElementById('sprawdzaj');
let firstOutField = document.getElementById('firstOut');
let sortujBtn = document.getElementById('sortuj');
let randomNum, randomNumTwo;

generujBtn.onclick = generuj;
sprawdzajBtn.onclick = sprawdzaj;
sortujBtn.onclick = sortuj;


function generuj () {
    let tabela = [1,2,3,4,5,6,7,8,9,10];
/********** Tasuje tabelę ***********/
    randomNum = tabela.sort(() => .5 - Math.random());
    randomNumTwo=  randomNum.slice(0,5);
    firstOutField.innerHTML= randomNumTwo;
}
function sprawdzaj(){
    let n = 1;
    
    while (n<11){
        /********** Jeśli ma cyfrę n, to zwiększ ją o 1 ***********/
        if(randomNumTwo.includes(n)) {
            n++
        }else {
            /********** Jeśli nie ma cyfry n, to ją dodaj do tabeli i zwiększ ją o 1 ***********/
            randomNumTwo.push(n);
            n++
        }
    }
    firstOutField.innerHTML = randomNumTwo;
}

function sortuj(){
    randomNumTwo.sort(function(a,b){return (a-b);});
    firstOutField.innerHTML=randomNumTwo;
}


/*****************************************************************************************/
/********** ZADANIE 1.2 ***********/
/*****************************************************************************************/


let secondOutField = document.getElementById('secondOut');

/********** Resetuj input field przy kliknięciu ***********/
secondOutField.addEventListener('click', function(){
    secondOutField.value = '';
})
/********** Formatuj input field, kiedy zniknie z niego focus ***********/
secondOutField.addEventListener('blur', function() {
    let sorted = secondOutField.value.substr(0,2) + ' ' + secondOutField.value.substr(2).replace(/(\w{4})/g, '$1 ');
    secondOutField.value = sorted;
});


/*****************************************************************************************/
/********** ZADANIE 2 ********** */
/*****************************************************************************************/


let zaloguj = document.getElementById('loginBtn');
zaloguj.onclick = fieldCheck;

function fieldCheck(){
    let email = document.getElementById('email');
    let pw = document.getElementById('pw');
    let login = document.getElementById('login');
    let success = document.getElementById('success');
    let emailValue= document.getElementById('emailValue');
    let passwordValue= document.getElementById('passwordValue');

    /* Reset */
    login.style.display='none';
    email.style.display = 'none';
    pw.style.display = 'none';
    success.style.display='none';

/* Sprawdza czy jest podany email */
    if (emailValue.value == '') {
        /* Jeśli nie, wyświetla error */
        email.style.display = 'block';
        /* Sprawdza czy mail jest prawidłowy */
    } else if(emailValue.value == 'ImTheBest@gmail.com'){
        /* Reset errorów jeśli tak */
        email.style.display = 'none';
        login.style.display='none';
        /* Jeśli mail podany */
    } else {
        email.style.display = 'none';
        login.style.display='none';
    }
/* Sprawdza czy jest podane hasło */
    if (passwordValue.value == '') {
        /* Jeśli nie, wyświetla error */
        pw.style.display = 'block';
        /* Sprawdza czy hasło jest prawidłowe */
    } else if(passwordValue.value == 'Around') {
        /* Reset errorów jeśli tak */
        pw.style.display = 'none';
        login.style.display='none';
        /* Jeśli hasło jest podane */
    } else {
        pw.style.display = 'none';
        login.style.display='none';
    }
/* Jeśli mail i hasło są nieprawidłowe */
    if (passwordValue.value !== '' && emailValue.value !== '' ){
        /* Jeśli nie, wyświetla error */
        login.style.display='block';
    } 
/* Jeśli mail i hasło są prawidłowe */
    if (emailValue.value == 'ImTheBest@gmail.com' && passwordValue.value == 'Around'){
        success.style.display='block';
        /* Reset errorów jeśli tak */
        login.style.display='none';
    }
}



/*****************************************************************************************/
/********** ZADANIE 3 ********** */
/*****************************************************************************************/



let no = 3;
let btnDodaj = document.getElementById('dodaj');
btnDodaj.onclick = dodaj;

function dodaj () {
    let tableContainer = document.querySelector('.table__output');
    let name = document.getElementById('name');
    let phone = document.getElementById('phone');
    let age = document.getElementById('age');
    let html, newHtml;
    /* Wygląd elementów dodanych do tabeli */
    html= '<div class="table__output--item"><div class="table__output--example">%no%</div><div class="table__output--example">%name%</div><div class="table__output--example">%phone%</div><div class="table__output--example">%age%</div></div>';
    /* Sprawdza, czy pola są wypełnione */
    if (name.value !== '' && phone.value !== '' && age.value !== '') {
        /* Zwiększa liczbę porządkową z każdym kliknięciem */
        (function (){
        no++;
        }());
        /* Wstawienie danych z pól input */
        newHtml = html.replace('%no%', no);
        newHtml = newHtml.replace('%name%', name.value);
        newHtml = newHtml.replace('%phone%', phone.value);
        newHtml = newHtml.replace('%age%', age.value);
        /* Wstawienie wstawienie elementów do HTML */
        tableContainer.insertAdjacentHTML('beforeend',newHtml);
        /* Wyczyszczenie pól input */
        name.value=null;
        phone.value=null;
        age.value=null;
    }
}






