let recents =new Array()
let recentSearch = document.querySelector("ul#recentSearch")

function updateArray(aray, num,content) {
    aray.push(content)
    if (aray.length > num) {
        aray.shift()
    }
}

function printAray(aray,container) {
    container.innerHTML =""
    for (let x = 0; x < aray.length; x++) {
        const el = aray[x];
        let li = document.createElement("li")
        li.innerHTML = `${el}`
        container.appendChild(li)
    }
}