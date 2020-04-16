function butcher(el) {
    if (searchOpen == true) {
        indexNum = el.id * 1
        console.log(indexNum)
        textList.splice(indexNum, 1)
        ogaUL.innerHTML = ""
        searchList()
    } else {
        indexNum = el.id * 1
        console.log(indexNum)
        textList.splice(indexNum, 1)
        ogaUL.innerHTML = ""
        createList()
    }
}