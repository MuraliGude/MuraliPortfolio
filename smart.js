const in_level = document.getElementById("slide")
const levelSlider = document.querySelector("#level-slider")
const sen = document.getElementById("levelsen")
const hr1 = document.getElementById("hr-loading-dots1")
const hr2 = document.getElementById("hr-loading-dots2")
const vr1 = document.getElementById("vr-loading-dots1")
const work = document.getElementById("rules")
const note = document.getElementById("note")




const tr_time = 100
const n_tr = 3
const rule_time = 1000
const n_rule = 2
const level_threshold = 75
let load_c = 0
let ro
let degree = 0


window.onload = ()=>{
    in_level.value = 50
    levelSlider.style.top = `${100 - in_level.value}%`
    sen.innerHTML = `<span>Level : ${in_level.value}%</span>`
    notef(in_level.value)
}

in_level.addEventListener('mouseup',(e)=>{
    levelSlide(e.target.value)
})

in_level.addEventListener('input',(e)=>{
    levelSlider.style.top = `${100 - e.target.value}%`
    sen.innerHTML = `<span>Level : ${e.target.value}%</span>`
})


function levelSlide(level)
{
    if( (!load_c))
    {
        transmission(hr1)
        load_c = 1
        setTimeout(()=>{
            ro = setInterval(() => {
                frames()
            }, (rule_time/360))
        },10*tr_time*n_tr)
        setTimeout(()=>{
            clearInterval(ro)
        },(10*tr_time*n_tr) + (n_rule*rule_time))
        setTimeout(()=>{
            transmission(vr1)
        },((10*tr_time*n_tr) + (n_rule*rule_time)+500))
        setTimeout(()=>{
            notef(level)
        },((2*10*tr_time*n_tr) + (n_rule*rule_time)+100))
    }
}

function transmission(load)
{
    dots = load.querySelectorAll("div")
    let l= dots.length
    let i=0
    let int = setInterval(()=>{
        if(i===n_tr*l)
        {
            dots[(i-1)%l].style.background = "var(--border-color)"
            clear(int)
        }
        else if (i===0) {
            dots[i%l].style.background = "var(--primary-color)"
        } 
        else {
            dots[i%l].style.background = "var(--primary-color)"
            dots[(i-1)%l].style.background = "var(--border-color)"
        }
        i++
    },tr_time)
}

function clear(int)
{
    clearInterval(int)
    load_c = 0
}

function notef(level)
{
    note.innerText =`Level of Container is ${level}%`
    if(level>level_threshold)
    {
        note.style.color = "rgb(255, 30, 0)"
    }
    else
    {
        note.style.color = "var(--hightlight)"
    }
}


function frames()
{
    degree += 5
    work.style.transform = `rotateZ(${degree}deg)`
}


// text-shadow:1px 1px 3px var(--primary-color);
// box-shadow: 1px 1px 1px 1px var(--border-color);
