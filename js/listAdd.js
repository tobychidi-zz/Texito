let line;
let showAlert = false;
let alertTip = document.getElementById("alert")
let textList = new Array()
let ogaUL = document.getElementById("listContainer")
let setUL = false

function alertUser(set) {
    showAlert = set
    if(showAlert == true) {
        alertTip.style.display = "flex"
    } else {
        alertTip.style.display = "none"
    }
}

function getLine() {
    if (inputReady == true) {
        line = textInput.value
        if (line != false) {
            textList.push(line)
        }
    } else if (textInput.value == "" && blurred == true) {
        alertUser(true)
        line = false
    } else{
        line = false
    }
        
}

function createList() {
    for (let x = 0; x < textList.length; x++) {
        let newItem = document.createElement("li")
        const el = textList[x]; 
        newItem.innerHTML = `<p></p> <button class="listItem-close" id ="${x}" onclick="butcher(this)"><img src="/assets/svg-icons/close.svg" alt=""></button>`
        newItem.firstChild.innerText = el
        ogaUL.appendChild(newItem)
    };
    setUL = true
}

textButton.onclick = () => {
    getLine()
    if (line != false) {
        ogaUL.innerHTML = ""
        createList()
    }
}