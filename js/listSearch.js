let searchOpen = false

const closeSearch = () => {
    if (searchInput.value != "") {
        updateArray(recents, 3, searchInput.value)
        printAray(recents, recentSearch)
    }
    ogaUL.innerHTML = ""
    searchOpen = false
    searchInput.value = ""
    searchChange()
    createList()
    // stopActive(searchButton, searchInput)
}

function searchList() {
    ogaUL.innerHTML = ""
    searchOpen = true
    for (let x = 0; x < textList.length; x++) {
        let newItem = document.createElement("li")
        const el = textList[x];
        re = new RegExp(searchInput.value, "gi")
        if (el.search(re) != -1) {
            newItem.innerHTML = `<p></p> <button class="listItem-close" id ="${x}" onclick="butcher(this)"><img src="/assets/svg-icons/close.svg" alt=""></button>`
            let ch = el.replace(re, `<span style="background: lightgreen; text-transform: uppercase;">${searchInput.value}</span>`)
            newItem.firstChild.innerHTML = ch
            ogaUL.appendChild(newItem)
        }
    };
    if (ogaUL.innerHTML == "") {
        ogaUL.innerHTML = "No results"
    }
}

searchInput.oninput = () => {
    if (searchInput.value != "") {
        searchList()
        searchChange()
    } else {
        closeSearch()
    }
}

searchButton.onclick = () => {
    if (searchOpen == false) {
        searchChange()
        if (sblurred == true && searchInput.value == "") {
            alertUser(true)
        }
    } else if (searchOpen == true) {
        closeSearch()
    }
}