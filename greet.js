//get reference to textbox
var textNameElem = document.querySelector(".textName")
//get reference to all radio buttons
var checkedRadioBtn = document.querySelector('.selectTypeRadio1')
var textNameElem = document.querySelector('.textName')
//get reference to greet button
var greetMeBtnElem = document.querySelector('.greetMeBtn')
//get reference to counter number
var counterElem = document.querySelector('.counter')
//get reference to message desplay
var displayedNameElem = document.querySelector('.displayedName')
//var radioAddBtn= document.querySelector('.selectTypeRadio')



//add an event listener for when the 'greetMessage' button is pressed
//greetMeBtnElem.addEventListener('click', greetMessage3);
var greetInsta = tools()

function thebuttons1() {
    var checkedRadio = document.querySelector("input[name='selectTypeRadio']:checked");
    if (checkedRadio) {
        var selectL = checkedRadio.value;
        //alert(selectL)
    } else {
        //    // alert()
        return  displayedNameElem.innerHTML =  'Enter your name and select a language!';
        
    }

    displayedNameElem.innerHTML = greetInsta.greet(selectL, textNameElem.value);

}

greetMeBtnElem.addEventListener('click', thebuttons1);

