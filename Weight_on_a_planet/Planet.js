//creating a div and setting its background color to appear black
let black_background=document.createElement('div')
black_background.style.backgroundColor='black'
black_background.style.height='47rem'
black_background.style.width='95rem'
document.body.appendChild(black_background)

//creating the heading for the application
let h1AtTop=document.createElement("h1")
h1AtTop.style.color='white'
h1AtTop.textContent='Calcualte a weight of an object on planet'
h1AtTop.style.position='relative'
h1AtTop.style.left='30rem'
black_background.appendChild(h1AtTop)

//create the select , button and  input type inside of a div
const mydiv=document.createElement("div")
// mydiv.className(dataInput)
mydiv.style.height='5rem'
mydiv.className='dataInput'
mydiv.style.width='50rem'
mydiv.style.backgroundColor='white'
mydiv.style.position='relative'
mydiv.style.left='20rem'
mydiv.style.top='2rem'
black_background.appendChild(mydiv)
    //creating the input tag
    const inputTag=document.createElement('input')
    inputTag.style.width='40%'
    inputTag.style.height='40%'
    inputTag.style.backgroundColor='white'
    inputTag.style.position='relative'
    inputTag.style.top='20px'
    inputTag.style.left='40px'
    inputTag.textContent='Mass in Kg'
    inputTag.style.color='Grey'
    mydiv.appendChild(inputTag)

    //creating the select tag
    const selectTag=document.createElement('select')
    mydiv.appendChild(selectTag)
    selectTag.style.height='40%'
    selectTag.style.width='30%'
    selectTag.textContent='-- valu --'
    selectTag.style.position='relative'
    selectTag.style.top='20px'
    selectTag.style.left='50px'
        // g values of planets
        // mer : 3.7
        // ven : 8.9
        // ear : 9.8
        // mar : 3.7
        // jup : 24.8
        // sat : 10.4
        // ura : 8.7
        // nep : 11.15
        // plu : 0.06
        // moo : 1.6
        //adding options to the select tag
        const option0=document.createElement('option')
        option0.textContent='--select planet--'
        option0.id='not'
        option0.style.color='grey'
        option0.value=0
        selectTag.appendChild(option0)
        const option1=document.createElement('option')
        option1.textContent='Mercury'
        option1.id='mer'
        option1.value=3.7
        selectTag.appendChild(option1)
        const option2=document.createElement('option')
        option2.textContent='Venus'
        option2.id='ven'
        option2.value=8.9
        selectTag.appendChild(option2)
        const option3=document.createElement('option')
        option3.textContent='Earth'
        option3.id='ear'
        option3.value=9.8
        selectTag.appendChild(option3)
        const option4=document.createElement('option')
        option4.textContent='Mars'
        option4.id='mar'
        option4.value=3.7
        selectTag.appendChild(option4)
        const option5=document.createElement('option')
        option5.textContent='Jupiter'
        option5.id='jup'
        option5.value=24.8
        selectTag.appendChild(option5)
        const option6=document.createElement('option')
        option6.textContent='Saturn'
        option6.id='sat'
        option6.value=10.4
        selectTag.appendChild(option6)
        const option7=document.createElement('option')
        option7.textContent='Uranus'
        option7.id='ura'
        option7.value=8.7
        selectTag.appendChild(option7)
        const option8=document.createElement('option')
        option8.textContent='Neptune'
        option8.id='nep'
        option8.value=11.15
        selectTag.appendChild(option8)
        const option9=document.createElement('option')
        option9.textContent='Pluto'
        option9.id='plu'
        option9.value=0.06
        selectTag.appendChild(option9)
        const option10=document.createElement('option')
        option10.textContent='Moon'
        option10.id='moo'
        option10.value=1.6
        selectTag.appendChild(option10)
    
    //adding the button 
    const buttonSend=document.createElement('button')
    buttonSend.style.height='40%'
    buttonSend.style.width='20%'
    buttonSend.style.backgroundColor='grey'
    buttonSend.style.position='relative'
    buttonSend.textContent='Calculate'
    buttonSend.style.top='18px'
    buttonSend.style.left='60px'
    mydiv.appendChild(buttonSend)

//create the div to show the results
const Resultdiv=document.createElement('div')
Resultdiv.style.height='300px'
Resultdiv.style.width='1000px'
Resultdiv.style.backgroundColor='rgba(128, 128, 128, 0.4)'
Resultdiv.style.position='relative'
Resultdiv.style.top='50px'
Resultdiv.style.left='250px'
black_background.appendChild(Resultdiv)

    //adding a div1 with default sun 
    const SubResult1=document.createElement("img")
    SubResult1.style.height='300px'
    SubResult1.style.width='300px'
    SubResult1.style.position='relative'
    SubResult1.style.left='200px'
    SubResult1.src='sun.png'
    Resultdiv.appendChild(SubResult1)
    //adding the heading part
    const headWithInfo=document.createElement('h2')
    headWithInfo.style.color='white'
    headWithInfo.textContent='Well I hope its not that hot'
    headWithInfo.style.position='relative'
    headWithInfo.style.left='600px'
    headWithInfo.style.bottom='200px'
    Resultdiv.appendChild(headWithInfo)

    //let do the function part of the project
    
    // console.log(Planet)
    function CalcualteMass(planetGValue,providedMass){
        const ans=planetGValue * providedMass
        return ans
    }

    buttonSend.addEventListener('click',()=>{
    const MassElement=document.querySelector('input')
    const Mass=MassElement.value;
   
    
    // console.log(Mass)

    const PlanetElement=document.querySelector('select')
    const Planet=PlanetElement.value
        // const PlanetId=PlanetElement.id
        // console.log(PlanetId)
        // console.log(Mass)
        // const type=typeof Mass
        // console.log(type)
        const selectedOption = PlanetElement.querySelector('option:checked');
        const planetId = selectedOption.id;
        console.log(planetId);

        const Massint=parseInt(Mass)
        console.log(Massint)

        const Planetflo=parseFloat(Planet)
        console.log(Planetflo)

        const print=CalcualteMass(Massint,Planetflo)
        const printApprox=Math.round(print)
        console.log(printApprox)
        // mer : 3.7
        // ven : 8.9
        // ear : 9.8
        // mar : 3.7
        // jup : 24.8
        // sat : 10.4
        // ura : 8.7
        // nep : 11.15
        // plu : 0.06
        // moo : 1.6
        const image=document.querySelector('img')
        switch(planetId){
            case 'mer':
                console.log(image)
                image.src='mercury.jpg'
                const merval=CalcualteMass(Massint,Planetflo)
                headWithInfo.textContent=`${merval} N `
                // SubResult1.src='sun.png'
                break
            case 'ven':
                image.src='Venus.png'
                const venval=CalcualteMass(Massint,Planetflo)
                headWithInfo.textContent=`${venval} N `
                break
            case 'ear':
                image.src='Earth.jpg'
                const earval=CalcualteMass(Massint,Planetflo)
                headWithInfo.textContent=`${earval} N `
                break
            case 'mar':
                image.src='Mars.jpg'
                const marval=CalcualteMass(Massint,Planetflo)
                headWithInfo.textContent=`${marval} N `
                break
            case 'jup':
                image.src='Jupyter.jpg'
                const jupval=CalcualteMass(Massint,Planetflo)
                headWithInfo.textContent=`${jupval} N `
                break
            case 'sat':
                image.src='Saturn.jpg'
                const satval=CalcualteMass(Massint,Planetflo)
                headWithInfo.textContent=`${satval} N `
                break
            case 'ura':
                image.src='Uranus.jpg'
                const uraval=CalcualteMass(Massint,Planetflo)
                headWithInfo.textContent=`${uraval} N `
                break
            case 'nep':
                image.src='Neptune.jpg'
                const nepval=CalcualteMass(Massint,Planetflo)
                headWithInfo.textContent=`${nepval} N `
                break
            case 'plu':
                image.src=''
                const pluval=CalcualteMass(Massint,Planetflo)
                headWithInfo.textContent=`${pluval} N `
                break
            case 'moo':
                image.src='moon.jpg'
                const mooval=CalcualteMass(Massint,Planetflo)
                headWithInfo.textContent=`${mooval} N `
                break
            default:

        }
    })