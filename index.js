let form = document.forms.signup
let inps = form.querySelectorAll('.nes')
let countT = 0
let countF = 0
let succes = document.querySelector("#succes")
let unsucces = document.querySelector("#unsucces")
let texts = document.querySelectorAll(".nesP")
let images = document.querySelectorAll("img")
let block = document.querySelector(".block")
let button = document.querySelector("button")
let error = false
let pattern = {
    Name: /^[a-z ,.'-]+$/i,
    Age: /\b([1-9]|[1-9][0-9]|100)\b/,
    Surname: /^[a-z ,.'-]+$/i,
    AboutYou: /(^[a-z ]+$)|[1-9]/i,
    Email: /^[\w-\.]+@([\w-]+\.)+[\w-]{1,3}$/g,
    WhatIsJavaScript: /(^[a-z ]+$)|[1-9]/i,
    Phone: /^998(9[012345789]|6[125679]|7[01234569])[0-9]{7}$/,
    WhatIsHTML: /(^[a-z ]+$)|[1-9]/i,
    MomsName: /^[a-z ,.'-]+$/i,
    DadsName: /^[a-z ,.'-]+$/i,
    YourFavouriteCar: /(^[a-z ]+$)|[1-9]/i,
    WhatIsCSS: /(^[a-z ]+$)|[1-9]/i
}
inps.forEach(inp => {
    inp.onkeyup = () => {
        console.log(1);
        let key = inp.getAttribute("name")
        if (pattern[key].test(inp.value)) {
            inp.parentElement.previousSibling.style.color = "green"
            inp.style.borderColor = "green"
            inp.nextElementSibling.style.display = "none"
        } else {
            error = true
            inp.style.borderColor = "red"
            inp.parentElement.previousSibling.style.color = "red"
            inp.nextElementSibling.style.display = "block"

        }
        
    }
})
form.onsubmit = (event) => {
    event.preventDefault();
    

    inps.forEach(inp => {

        if (inp.value.length === 0) {
            error = true
            inp.style.borderColor = "red"
            inp.parentElement.previousSibling.style.color = "red"
            inp.parentElement.previousSibling.style.color
            countF++
            countT = 7 - countF
            inp.nextElementSibling.style.display = "block"

        } else {
            inp.parentElement.previousSibling.style.color = "blue"
            inp.style.borderColor = "blue"
            inp.nextElementSibling.style.display = "none"

        }

    })


    succes.innerHTML = `Success: ${countT}/7`
    unsucces.innerHTML = `Error: ${countF}/7`
    if (error) {
        alert('go home')
    } else {
        submit()
    }
    countF = 0
}

function submit() {
    let user = {}

    let fm = new FormData(form)
    succes.innerHTML = "Success: 7/7"
    fm.forEach((value, key) => {
        user[key] = value
    })
    block.style.transform = "translateX(0%)";
    block.style.opacity =  "1"
    button.style.display = "none"
    setTimeout(() => {
        block.style.transform = "translateX(-150%)";
        block.style.opacity =  "0"
        button.style.display = "block"

    }, 3000);
    console.log(user);
}
