// create variables for the values we are gonna use//
const newContent = document.getElementById('contentList');
const textinput = document.getElementById('textinput');
//function for creating the list elements and append the content from input bar//
function newList() {
    const divList = document.createElement('div');
    const addLi= document.createElement('li');
    const checkButton = document.createElement('button');
    const removeButton = document.createElement('button');
    divList.classList.add('divList')
    removeButton.classList.add('submitbutton')
    checkButton.classList.add('submitbutton')
    removeButton.addEventListener('click', removeFunction);
    checkButton.addEventListener('click', checkFunction);
    addLi.style.textDecoration = 'none'
//create a div parent with list and buttons child elements//
    newContent.append(divList);
    addLi.append(textinput.value);
    divList.append(addLi);
    divList.append(checkButton);
    divList.append(removeButton);

// remove task item button function//
    function removeFunction(){
        divList.remove()
    }
// check task item button function// 
    function checkFunction(){
        
        if(addLi.style.textDecoration === 'none') {
            addLi.style.textDecoration = 'line-through';
            addLi.style.color = 'red'
        } else {
            addLi.style.textDecoration = 'none'
            addLi.style.color = 'black'
        }

    }
}

