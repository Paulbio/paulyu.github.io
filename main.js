const p1 = document.getElementById('p1')
const p2 = document.getElementById('p2')

let item

state1 = (x)=>{
    return x.addEventListener('mouseover', (e)=>{
        item = e.target.textContent
        e.target.textContent = "View Code"
    })
}

state2 = (x)=>{
    return x.addEventListener('mouseout', (e)=>{
        e.target.textContent = item
    })
}

state1(p1);state2(p1);state1(p2);state2(p2)