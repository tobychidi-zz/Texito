function butcher(el) {
    if (searchOpen == true) {
        indexNum = el.id * 1
        console.log(indexNum)
        textList.splice(indexNum, 1)
        ogaUL.innerHTML = ""
        searchList()
    } else {
        indexNum = el.id * 1
        textList.splice(indexNum, 1)
        ogaUL.innerHTML = ""
        if (textList.length != 0) {
            createList()
        } else {
            ogaUL.innerHTML = `
                <div id="introBox">
                    <svg id="introguy">
                        <use xlink:href="assets/boss.svg#guy"></use>
                    </svg>
                    <h3>All Cleared</h3>
                    <p>Hope you enjoyed it. Click the '+' below to add more items</p>
                </div>`
        }
    }
}