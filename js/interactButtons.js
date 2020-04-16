const textButton = document.getElementById("textButton")
const searchButton = document.getElementById("searchButton")
const textInput = document.getElementById("textInput")
const searchInput = document.getElementById("searchInput")
let focused = false;
let blurred = false;
let champ = false;
let sfocused = false;
let sblurred = false;
let schamp = false;
let inputReady = false;
let searchReady = false;

function switchActive(myButton, myInput) {
    //me is the active button and you is the inactive button
    myButton.classList.add("active")
    myInput.classList.add("active")
}

function clearActive(myButton, myInput) { //me is the active button and you is the inactive button
    myButton.classList.remove("active")
    myInput.classList.remove("active")
    focused = false;
    alertUser(false)
}

function keepActive(myButton, myInput) {
    myButton.classList.add("active")
    myInput.classList.add("active")
    focused = true;
    
}

function stopActive(myButton, myInput) { //me is the active button and you is the inactive button
    myButton.classList.remove("active")
    myInput.classList.remove("active")
    focused = false;
}

searchButton.onfocus = () => {
    switchActive(searchButton, searchInput)
}
searchButton.onblur = () => {
    if (sfocused != true || searchOpen != true) {
        clearActive(searchButton, searchInput)
    }
    sblurred = false
}

searchInput.onfocus = () => {
    keepActive(searchButton, searchInput)
    sfocused = true
    // searchInput.select()
    sblurred = true
}

searchButton.onmouseenter = () => {
    schamp = true
}

searchButton.onmouseleave = () => {
    schamp = false
}

searchInput.onblur = () => {
    if (searchOpen != true) {
        stopActive(searchButton, searchInput)
        sfocused = false;
    }
    if (schamp == true) {
        sblurred = true
    } else {
        sblurred = false
    }
}

textButton.onfocus = () => {
    changeIt()
    switchActive(textButton, textInput)
    if (blurred == true && textInput.value != "") {
        inputReady = true
    }
    closeSearch()
    clearActive(searchButton, searchInput)
}
textButton.onblur = () => {
    if (focused != true) {
        clearActive(textButton, textInput)
        restoreIcon(addText, "plus")
        inputReady = false;
    }
    blurred = false
    champ = false
}

textInput.onfocus = () => {
    keepActive(textButton, textInput)
    changeIt()
    blurred = true
    // textInput.select()
}

textButton.onmouseenter = () => {
    champ = true
}

textButton.onmouseleave = () => {
    champ = false
}

textInput.onblur = () => {
    stopActive(textButton, textInput)
    restoreIcon(addText, "plus")
    inputReady = false;
    if (champ == true) {
        blurred = true
    } else {
        blurred = false
    }
}

// textButton.onclick = () => {
//     console.log(inputReady)
//     console.log(blurred)

// }