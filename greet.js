//get reference to textbox
var textNameElem = document.querySelector(".textName")
//get reference to all radio buttons
var checkedRadioBtn = document.querySelector('.selectTypeRadio1')
//var textNameElem = document.querySelector('.textName')

//get reference to greet button
var greetMeBtnElem = document.querySelector('.greetMeBtn')
//get reference to reset button
var resetBtnElem = document.querySelector('.resetBtn')

//get reference to counter number
var counterElem = document.querySelector('.counter')
//get reference to message desplay
var displayedNameElem = document.querySelector('.displayedName')
//var radioAddBtn= document.querySelector('.selectTypeRadio')



//add an event listener for when the 'greetMessage' button is pressed
//greetMeBtnElem.addEventListener('click', greetMessage3);
//retrive names from local storage
//let key = greetInsta.getNames();
//localStorage.getItem(JSON.parse(key));
//console.log(localStorage.getItem('name').length)


if (localStorage['name']) {
    var names = JSON.parse(localStorage.getItem('name'))
}
//console.log(names.length)
//counterElem.innerHTML = names.length

var greetInsta = tools(names)
counterElem.innerHTML = greetInsta.counter();

resetBtnElem.addEventListener('click', function () {
    localStorage.clear()
    location.reload();
}
);



function thebuttons1() {
    var checkedRadio = document.querySelector("input[name='selectTypeRadio']:checked");


    if (!checkedRadio && textNameElem.value === "") {
        return displayedNameElem.innerHTML = 'Enter your name and select a language!';
    } else if (!checkedRadio) {

        return displayedNameElem.innerHTML = 'Select a language!';
    } if (textNameElem.value === "") {

        return displayedNameElem.innerHTML = 'Enter your name';
    }

    else {
        greetInsta.storeNames(textNameElem.value)

        displayedNameElem.innerHTML = greetInsta.greet(checkedRadio.value, textNameElem.value);
        // counterElem.innerHTML = greetInsta.counter()
        counterElem.innerHTML = greetInsta.counter();

        //set names  into localstorage.
        let key = greetInsta.getNames();
        // let value = greetInsta.counter();
        localStorage.setItem('name', JSON.stringify(key));
    }
}
greetMeBtnElem.addEventListener('click', thebuttons1);


