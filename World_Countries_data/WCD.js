//creating the top div that contains our heading and some info about countries
const topDiv=document.createElement('div')
topDiv.style.height='7rem'
topDiv.style.backgroundColor='white'
document.body.appendChild(topDiv)
    //creating the heading
    const topHeading=document.createElement('h1')
    topHeading.textContent='World Countries Data'
    topHeading.style.position='absolute'
    topHeading.style.top='1rem'
    topHeading.style.left='35rem'
    topHeading.style.color='orange'
    topDiv.appendChild(topHeading)
    
    //creating the info tag
    const someInfo=document.createElement('h4')
    someInfo.textContent='Currently, we have 250 countries'
    someInfo.style.position='absolute'
    someInfo.style.top='3rem'
    someInfo.style.left='37rem '
    someInfo.style.color='black'
    topDiv.appendChild(someInfo)

//creating the middle div part
const middleDiv=document.createElement("div")
middleDiv.style.height='7rem'
middleDiv.style.backgroundColor='aqua'
document.body.appendChild(middleDiv)
    //creating button-1 for the  population
    const buttonPop=document.createElement("button")
    buttonPop.textContent='POPULATION'
    buttonPop.style.position='relative'
    buttonPop.style.top='2.7rem'
    buttonPop.style.left='30rem'
    buttonPop.style.fontSize='24px'
    middleDiv.appendChild(buttonPop)
    //creating button-2 for the languages part
    const buttonlang=document.createElement("button")
    buttonlang.textContent='LANGUAGES'
    buttonlang.style.position='relative'
    buttonlang.style.fontSize='24px'
    buttonlang.style.top='2.7rem'
    buttonlang.style.left='40rem'
    middleDiv.appendChild(buttonlang)
//creating the result div