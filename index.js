let form = document.forms.signup
let inps = form.querySelectorAll('input')
let countT = 0
let countF = 0
let succes = document.querySelector("#succes")
let unsucces = document.querySelector("#unsucces")
let texts = document.querySelectorAll(".nesP")
console.log(texts);
form.onsubmit = (event) => {
    event.preventDefault();
    let error = false

    texts.forEach(text =>{
        
    })

    inps.forEach(inp => {
        texts.forEach(text =>{
            if (inp.value.length === 0 && inp.classList.contains("nes")) {
                text.style.color = "red"
                
            } else {
                text.style.color = "blue"
            }
        })
        if (inp.value.length === 0 && inp.classList.contains("nes")) {
            error = true
            inp.style.borderColor = "red"
            countF++
            countT = 7 - countF
        } else {

            inp.style.borderColor = "black"
        }

    })


    console.log(succes.innerHTML);
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
    succes.innerHTML = `Success: 7/7`
    let fm = new FormData(form)

    fm.forEach((value, key) => {
        user[key] = value
    })

    console.log(user);
}