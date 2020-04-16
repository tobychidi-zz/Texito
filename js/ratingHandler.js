let stars = document.querySelectorAll("div#starsBox>button")

function clearRating(arry) {
    for (let x = 0; x < arry.length; x++) {
        const el = arry[x];
        el.classList.remove("checked")
    }
}

function rateMe(arry, x) {
    switch (x) {
        case 0:
            arry[0].classList.add("checked")
            break;
        case 1:
            arry[0].classList.add("checked")
            arry[1].classList.add("checked")
            break;
        case 2:
            arry[0].classList.add("checked")
            arry[1].classList.add("checked")
            arry[2].classList.add("checked")
            break;
        case 3:
            arry[0].classList.add("checked")
            arry[1].classList.add("checked")
            arry[2].classList.add("checked")
            arry[3].classList.add("checked")
            break;
        case 4:
            arry[0].classList.add("checked")
            arry[1].classList.add("checked")
            arry[2].classList.add("checked")
            arry[3].classList.add("checked")
            arry[4].classList.add("checked")
            break;
        default:
            break;
    }
}

for (let x = 0; x < stars.length; x++) {
    const el = stars[x];
    el.onclick = () => {
        clearRating(stars)
        rateMe(stars,x)
    }
}