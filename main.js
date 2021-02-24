
function add1() {
    let currNum = document.getElementById('currNum')
    let val = Number(currNum.innerText) + 1 
    currNum.innerHTML = val
    
}

function minus1() {
    let currNum = document.getElementById('currNum')
    let val = Number(currNum.innerText) - 1 
    currNum.innerHTML = val
    
}

function add5() {
    let currNum = document.getElementById('currNum')
    let val = Number(currNum.innerText) + 5 
    currNum.innerHTML = val
    
}

function minus5() {
    let currNum = document.getElementById('currNum')
    let val = Number(currNum.innerText) - 5
    currNum.innerHTML = val
    
}