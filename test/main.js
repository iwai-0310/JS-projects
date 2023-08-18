
let theContainer=document.createElement('div')
theContainer.className='container'
// theContainer.style.height='1000px'
// theContainer.style.width='1000px'
theContainer.style.backgroundColor='white'
document.body.appendChild(theContainer)
console.log(theContainer)
theContainer.style.width='85%'
theContainer.style.display='flex'
theContainer.style.alignItems='center'
theContainer.style.justifyContent='space-evenly'
theContainer.style.flexWrap='wrap'
theContainer.style.position='relative'
theContainer.style.top='250px'
theContainer.style.left='50px'

let h1AtTop=document.createElement('h1')
document.body.appendChild(h1AtTop)
h1AtTop.textContent='Number Generator'
h1AtTop.style.height='50px'
h1AtTop.style.width='50%'
h1AtTop.style.color='black'
h1AtTop.style.position='absolute'
h1AtTop.style.top='10px'
h1AtTop.style.left='200px'
h1AtTop.style.backgroundColor='grey'

let h2AtTop=document.createElement('h2')
document.body.appendChild(h2AtTop)
h2AtTop.textContent='30 DaysOfJavaScript:DOM Day-2'
h2AtTop.style.position='absolute'
h2AtTop.style.top='80px'
h2AtTop.style.left='200px'
h2AtTop.style.textDecoration='underline'

let h3AtTop=document.createElement('h3')
h3AtTop.textContent='Author= Chandresh singh'
h3AtTop.style.position='absolute'
h3AtTop.style.top='120px'
h3AtTop.style.left='250px'
h3AtTop.style.textDecoration='underline'
document.body.appendChild(h3AtTop)

let input=document.createElement('input')
input.id='number'
input.placeholder='Enter the number of squares'
input.style.backgroundColor='white'
input.style.borderColor='black'
input.style.height='40px'
input.style.width='400px'
input.style.left='100px'
input.style.position='absolute'
input.style.top='180px'
document.body.appendChild(input)
const inputval=document.querySelector('#number')


let Thebutton=document.createElement('button')
Thebutton.className='mybutton'
Thebutton.style.height='40px'
Thebutton.style.width='150px'
Thebutton.style.backgroundColor='blue'
Thebutton.style.position='absolute'
Thebutton.style.top='180px'
Thebutton.style.left='520px'
document.body.appendChild(Thebutton)

Thebutton.addEventListener('click',()=>{
    let valForNums=inputval.value
    console.log(inputval.value)
    for(let i=0;i<valForNums;i++){
    let child=document.createElement('div')
    child.className='mini'
    child.style.height='100px'
    child.style.width='100px'
     child.textContent=`${i}`
    child.style.margin='5px'
    let prime=isPrime(i+1)
    if(prime===true){
        child.style.backgroundColor='red'
    }
    else{
    if(i%2===0){
        child.style.background='yellow'
    } 
    else{
        child.style.background='green'
    }
}
   theContainer.appendChild(child)
}
})

let h1InsideButton=document.createElement('h1')
h1InsideButton.textContent='Calculate'
h1InsideButton.style.display='flex'
h1InsideButton.style.bottom='20px'
Thebutton.appendChild(h1InsideButton)

// for(let i=0;i<100;i++){
//     let child=document.createElement('div')
//     child.className='mini'
//     child.style.height='100px'
//     child.style.width='100px'
//     // child.textContent=`${i}`
//     child.style.margin='5px'
//     let prime=isPrime(i+1)
//     if(prime===true){
//         child.style.backgroundColor='red'
//     }
//     else{
//     if(i%2===0){
//         child.style.background='yellow'
//     } 
//     else{
//         child.style.background='green'
//     }
// }
//    theContainer.appendChild(child)
// }
const children=document.querySelectorAll('.mini')
console.log(children)
children.forEach((box,i)=>{
    let h1AsChild=document.createElement('h1')
    h1AsChild.style.position='relative'
    h1AsChild.style.left='40px'
    h1AsChild.style.top='10px'
    h1AsChild.textContent=`${i+1}`
    h1AsChild.style.color='white'
    box.appendChild(h1AsChild)
})

function isPrime(num){
    if(num<=1){
        return false
    }
    for(let i=2;i<num;i++){
        if(num%i==0){
            return false
        }
    }
    return true;
}
const minival=document.getElementsByClassName('mini')
minival.style.display='flex'
minival.style.alignItems='center'
