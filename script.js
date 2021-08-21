/*theme switcher */

const themeStyle = document.getElementById("theme-style")
const dots = document.querySelectorAll(".theme-dot")

dots.forEach(dot => {
    dot.addEventListener('click', function(e){
        themeSelect(e.target.dataset.text)
    })
})


function themeSelect(dotSelected) {
    // let dotSelected = e.target.getAttribute('data-text')
    // let dotSelected = e.target.dataset.text


    if(dotSelected === 'white')
    {
        themeStyle.setAttribute("href", "style.css")
    }
    if(dotSelected === 'blue')
    {
        themeStyle.setAttribute("href", "blue.css")
    }
    if(dotSelected === 'brown')
    {
        themeStyle.setAttribute("href", "brown.css")
    }
    if(dotSelected === 'purple')
    {
        themeStyle.setAttribute("href", "purple.css")
    }
}

/******************* */