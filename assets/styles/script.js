const progress = document.querySelector("#progress")
const prev = document.querySelector("#prev")
const next = document.querySelector("#next")
const circle = document.querySelectorAll(".circles")

let currentactive = 1

next.addEventListener('click', ()=> {
     currentactive++

     if(currentactive > circle.length) {
        currentactive = circle.length
     }

     update()
})

prev.addEventListener('click', ()=> {
    if(currentactive > 1) {
        currentactive = 1
    }

    update()
})

function update(){
    circle.forEach((circle, index) => {
        if(index < currentactive){
            circle.classList.add('active')
        }
        else {
            circle.classList.remove('active')
        }
    })
    
    if(currentactive=== 1) {
        prev.disabled= true
    } else if(currentactive === circle.length) {
        next.disabled === true
    } else {
        prev.disabled = false
        next.disabled = false
    }
}

