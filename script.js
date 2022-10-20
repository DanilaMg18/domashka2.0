// let input = document.querySelector('.input')
// let btn = document.querySelector('.button')

// input.addEventListener('keypress', (event)=> {
//     console.log(event)
//     console.log(event.target)
//     console.log(event.altKey)
// })

// btn.addEventListener('click', ()=> {
//     alert('hello')
// })


// btn.addEventListener('contextmenu', ()=> {
//     alert('Stop It')
// })


// input.addEventListener('mouseover', ()=> {
//     console.log('Piwi tut')
// })

// input.addEventListener('mouseout', ()=> {
//     console.log('pochemu ne napisal')
// })

// btn.addEventListener('mousedown', ()=> {
//     console.log('otpusti!!!!!')
// })

// btn.addEventListener('mouseup', ()=> {
//     console.log('Spasibo!!!!!')
// })

// input.addEventListener('mousemove', ()=> {
//     console.log('aaaaaa')
// })

// input.onfocus = function() {
//     console.log('FOCUS')
// }

// input.onblur = function() {
//     console.log('Out of input')
// }

// input.onkeydown = function() {
//     console.log('HHH')
// }

// input.onkeyup = function() {
//     console.log('kkk')
// }

// input.onkeypress = function() {
//     console.log('sss')
// }

// input.onkeypress = function(e) { -------------------- запрещает вписывать какие-то данные,например букву и тд
//     if (e.keyCode === 104)
//         e.preventDefault()
// }

// input.oninput = function(e) {
//     if(e.target.value.length > 10) { --------------------------- говорит что можно написать не больше 10 символов
//         e.preventDefault();
//         e.target.value.length = 10;
//         alert('Please 10 numbers only')
//     }
// }

// document.addEventListener('click', (e)=> {
//     console.log(e.target)
//     console.log(e.target.dataset.property)
//     console.log(e.target.attributes)
// })

// let obj = {
//     firstName:'Danila',
//     lastName:'Palcech'
// }

// // console.log(Object.keys(obj))
// console.log(Object.values(obj))

// let arr = ['DANILA', 'PALCECH']

// let firstName = arr[0]
// let lastName = arr[1]

// console.log(firstName, lastName)

// let [firstName, , middlename] = ['goga', 'gega', 'guga']

// console.log(firstName,middlename)

// let [firstName, ...rest] = ['Chief', 'Keef', 'Chicago', 'Rapper']

// console.log(...rest)

// let [firstName ='giga', lastName = 'goga'] = []
// console.log(firstName, lastName)


let person = {
    firstName:'Volfas',
    lastName:'Engelman'
}

let extra = {
    age:'21',
    gender:'male'
}

let combine = {...person, ...extra}

console.log(combine)