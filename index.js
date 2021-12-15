let count = 0 
let AddItNow = document.getElementById("addIt")
let savesave = document.getElementById("previous")

function start() {
    count = count + 1
    AddItNow.innerText = count
}

function saving() {
   let niewiem = count + " - "
   savesave.innerText += niewiem
   
}

