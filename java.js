// create variables for the values we are gonna use//
const newContent = document.getElementById('contentList');
const textinput = document.getElementById('textinput');

//function for creating the list elements and append the content from input bar//
function newList() {
    const divList = document.createElement('div');
    const addLi= document.createElement('li');
    const checkButton = document.createElement('button');
    const removeButton = document.createElement('button');

// add classes and events to the buttons // 
    divList.classList.add('divList')
    removeButton.classList.add('removebutton')
    checkButton.classList.add('checkbutton')
    removeButton.addEventListener('click', removeFunction);
    checkButton.addEventListener('click', checkFunction);
    addLi.style.textDecoration = 'none';

//create a div parent with list and buttons child elements//
    newContent.append(divList);
    addLi.append(textinput.value);
    divList.append(addLi);
    divList.append(checkButton);
    divList.append(removeButton);

//remove input text after clicking submit//
textinput.value =''    

// remove task item button function ,sync the fade animation with the remove func//
    function removeFunction(){
        divList.classList.add('divListRemove')
        setTimeout(() => divList.remove(), 300)    
    }

// check task item button function// 
    function checkFunction(){
        
        if(addLi.style.textDecoration === 'none') {
            addLi.style.textDecoration = 'line-through';
            addLi.style.opacity = '0.5'   
        } else {
            addLi.style.textDecoration = 'none';
            addLi.style.opacity = '1'
        }

    }

}

textinput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        newList()
    }
});
