const addText = document.querySelector("#textButton>img")
const searchNow = document.querySelector("#searchButton>img")

function changeIcon(me, nw) {
    me.src = `../assets/svg-icons/${nw}.svg`
    me.alt = "Done"
}

function restoreIcon(me, nw) {
    me.src = `../assets/svg-icons/${nw}.svg`
    me.alt = "Add"
}

function changeIt() {
    if (textInput.value != "") {
        changeIcon(addText, "tick")
    } else {
        restoreIcon(addText, "plus")
    }
}

function searchChange() {
    if (searchOpen == true) {
        changeIcon(searchNow, "sclose")
        searchButton.classList.add("open")
    } else {
        restoreIcon(searchNow, "search")
        searchButton.classList.remove("open")
    }
}

textInput.oninput = () => {
    changeIt()
}