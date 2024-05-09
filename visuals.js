
const userCardTemplate = document.querySelector("[data-user-template]")
const userCardContainer = document.querySelector("[data-user-cards-container]")
const searchInput = document.querySelector("[data-search]")




let users = []

searchInput.addEventListener("input", (e) => {
    const value = e.target.value.toLowerCase()
    users.forEach(user => {
        const isVisible = 
            user.name.toLowerCase().includes(value) || 
            user.date.toLowerCase().includes(value)
        
        user.element.classList.toggle("hide", !isVisible)
    })
    
})

const community = document.getElementById("community");
community.addEventListener('change', function() {
    if(community.checked){
        users.forEach(user => {
            var isVisible = user.themes.includes("community")
    
            user.element.classList.toggle("hide", !isVisible)
            //make it so search bar goes away
        })
}
    else{
        users.forEach(user => {
            user.element.classList.toggle("hide", false)
        })
    }
})

const religion = document.getElementById("religion");
religion.addEventListener('change', function() {
    if(religion.checked){
        users.forEach(user => {
            var isVisible = user.themes.includes("religion")
    
            user.element.classList.toggle("hide", !isVisible)
            //make it so search bar goes away
        })
}
    else{
        users.forEach(user => {
            user.element.classList.toggle("hide", false)
        })
    }
})

const support = document.getElementById("support");
support.addEventListener('change', function() {
    if(support.checked){
        users.forEach(user => {
            var isVisible = user.themes.includes("support")
    
            user.element.classList.toggle("hide", !isVisible)
            //make it so search bar goes away
        })
}
    else{
        users.forEach(user => {
            user.element.classList.toggle("hide", false)
        })
    }
})



const diversity = document.getElementById("diversity");
diversity.addEventListener('change', function() {
    if(diversity.checked){
        users.forEach(user => {
            var isVisible = user.themes.includes("diversity")
    
            user.element.classList.toggle("hide", !isVisible)
            //make it so search bar goes away
        })
}
    else{
        users.forEach(user => {
            user.element.classList.toggle("hide", false)
        })
    }
})

const connection = document.getElementById("connection");
connection.addEventListener('change', function() {
    if(connection.checked){
        users.forEach(user => {
            var isVisible = user.themes.includes("connection")
    
            user.element.classList.toggle("hide", !isVisible)
            //make it so search bar goes away
        })
}
    else{
        users.forEach(user => {
            user.element.classList.toggle("hide", false)
        })
    }
})


const family = document.getElementById("family");
family.addEventListener('change', function() {
    if(family.checked){
        users.forEach(user => {
            var isVisible = user.themes.includes("family")
    
            user.element.classList.toggle("hide", !isVisible)
            //make it so search bar goes away
        })
}
    else{
        users.forEach(user => {
            user.element.classList.toggle("hide", false)
        })
    }
})


const access = document.getElementById("access");
access.addEventListener('change', function() {
    if(access.checked){
        users.forEach(user => {
            var isVisible = user.themes.includes("access")
    
            user.element.classList.toggle("hide", !isVisible)
            //make it so search bar goes away
        })
}
    else{
        users.forEach(user => {
            user.element.classList.toggle("hide", false)
        })
    }
})


const work = document.getElementById("work");
work.addEventListener('change', function() {
    if(work.checked){
        users.forEach(user => {
            var isVisible = user.themes.includes("work")
    
            user.element.classList.toggle("hide", !isVisible)
            //make it so search bar goes away
        })
}
    else{
        users.forEach(user => {
            user.element.classList.toggle("hide", false)
        })
    }
})



fetch('./data.json')
    .then(res => res.json())
    .then(data => {
        
        users = data.map(user => {
            const card = userCardTemplate.content.cloneNode(true).children[0]
            const header = card.querySelector("[data-header]")
            const body = card.querySelector("[data-body]")
            const video = card.querySelector("[data-video]")
            const summary = card.querySelector("[data-summary]")
           
            
            header.textContent = user.name
            body.textContent = user.date
        
            
            video.setAttribute("src",user.src)
            video.setAttribute("poster", "Images/logo.png")
            
            
            summary.textContent = user.summary


            userCardContainer.append(card)
            return { name: user.name, date: user.date, themes: user.themes, element: card}
        })
    })

//document.getElementById('thing').setAttribute(poster, "Images/logo.png")