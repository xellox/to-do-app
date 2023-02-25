// create variables for the values we are gonna use//
const newContent = document.getElementById('contentList')
const textinput = document.getElementById('textinput')
//function for creating the list elements and append the content from input bar//
function newList() {
    const addLi= document.createElement('li');
    const textLi = textinput.value;
    addLi.append(textLi);
    newContent.append(addLi);
}