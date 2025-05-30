// class Car { /* inicializo una clase, van con Mayusculas la primera */
//     constructor(brand, speed) { /* Le asigno un constructor */
//         this.brand = brand /* Donde van a aterrizar los parametros definidos */
//         this.speed = speed
//     }

//     accelerate() { /* Defino una funcion */
//         this.speed += 10 /* Aterrizo esta operacion aritmetica y lo que ocaciona un cambio aritmetico */
//         console.log(`${this.brand} is going at ${this.speed} km/h`); /* Muestro en consola un mensaje */
//     }

//     brake() { /* Defino una funcion */
//         this.speed -= 5 /* Aterrizo esta operacion aritmetica y ocaciona un cambio aritmetico */
//         console.log(`${this.brand} is going at ${this.speed} km/h`); /* Muestro en consola un mensaje */
//     }

//     get speedUS() { /* Defino un una funcion */
//         return this.speed / 1.6 /* Retorno la propiedad interna con una operacion aritmetica */
//     }

//     set speedUSset({ speed }) { /* Metodo que redefine la funcion y recibe un argumento */
//         this.speed = speed * 1.6 /* Nuevo valor de Speed */
//     }
// }

// const bmw = new Car('BMW', 120) /* Creo un nuevo objeto llamado bmw que recibe parametros de la funcion */
// const mercedes = new Car('Mercedes', 95) /* Creo un nuevo objeto y le paso parametros al constructor de la clase */

// bmw.brake() /* Le paso la funcion a el objeto llamado bmw */
// bmw.accelerate()
// bmw.accelerate()

// mercedes.accelerate()
// mercedes.accelerate()
// mercedes.brake()
// mercedes.accelerate()

// const ford = new Car('Ford', 120) /* Inicializo una nueva variable con el costructor del carro y le paso argumentos */
// ford.accelerate() /* Invoco la funcion de acelerar */
// ford.accelerate()
// ford.accelerate()
// ford.brake() /* Invoco la funcion de frenado */
// console.log(ford.speedUS); /* Aqui tengo el resultado en consola de las millas por hora */

// ford.speedUSset = { speed: 500 } /* Reasigno el valor de speed */
// console.log(ford.speedUS); /* Muestro el nuevo valor de speed */

// // /*  *//*  *//*  *//*  *//*  *//*  *//*  *//*  *//*  *//*  *//*  *//*  *//*  *//*  *//*  *//*  *//*  *//*  *//*  *//*  *//*  *//*  */

// const getPosition = function () {
//     return new Promise(function (res, rej) {
//         navigator.geolocation.getCurrentPosition(res, rej)
//     })
// }

// const whereAmI = async function () {
//     const pos = await getPosition()
//     const { latitude: lat, longitude: lng } = pos.coords

//     const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
//     const dataGeo = await resGeo.json()
//     console.log(dataGeo);

//     const res = await fetch(`https://restcountries.eu/rest/v2/name/${dataGeo.Mexico}`)
//     const data = await res.json()
//     console.log(data);
// }
// whereAmI()


// const getJSON = function (url, errorMsg = 'Something went wrong') {
//     return fetch(url).then(response => {
//         if (!response.ok) throw new Error(`${errorMsg} (${response.status})`)

//         return response.json()
//     })
// }

// const get3Countries = async function (c1, c2, c3) {
//     try {
//         const [data1] = await getJSON(`https://restcountries.com/v3.1/name/${c1}`)
//         const [data2] = await getJSON(`https://restcountries.com/v3.1/name/${c2}`)
//         const [data3] = await getJSON(`https://restcountries.com/v3.1/name/${c3}`)

//         console.log([data1.capital, data2.capital, data3.capital,])
//     } catch (err) {
//         console.log(err);
//     }
// }
// get3Countries('portugal', 'canada', 'tanzania')


// const getJSON = function (url, errorMsg = 'Something went wrong') {
//     return fetch(url).then(response => {
//         if (!response.ok) throw new Error(`${errorMsg} (${response.status})`)

//         return response.json()
//     })
// }

// const get3Countries = async function (c1, c2, c3) {
//     try {
//         const data = await Promise.all([
//             getJSON(`https://restcountries.com/v3.1/name/${c1}`),
//             getJSON(`https://restcountries.com/v3.1/name/${c2}`),
//             getJSON(`https://restcountries.com/v3.1/name/${c3}`)
//         ])
//         console.log(data.map(d => d[0].capital));
//     } catch (err) {
//         console.log(err);
//     }
// }

// get3Countries('portugal', 'canada', 'tanzania')

// const getJSON = function (url, errorMsg = 'Something went wrong') {
//     return fetch(url).then(response => {
//         if (!response.ok) throw new Error(`${errorMsg} (${response.status})`)
//         return response.json()
//     })
// }

// const getJSON = function (url, errorMsg = 'Something went wrong') {
//     return fetch(url).then(response => {
//         if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);
//         return response.json();
//     })
// };

//     (async function () {
//         const res = await Promise.race([
//             getJSON(`https://restcountries.com/v3.1/name/italy`),
//             getJSON(`https://restcountries.com/v3.1/name/egypt`),
//             getJSON(`https://restcountries.com/v3.1/name/mexico`),
//         ])
//         console.log(res[0]);
//     })()

// const timeout = function (sec) {
//     return new Promise(function (_, reject) {
//         setTimeout(function () {
//             reject(new Error('Request took too long!'))
//         }, sec * 1000)
//     })
// }

// Promise.race([
//     getJSON(`https://restcountries.com/v3.1/name/tanzania`),
//     timeout(5),
// ])
//     .then(res => console.log(res[0]))
//     .catch(err => console.error(err))

// Promise.allSettled([
//     Promise.resolve('Success'),
//     Promise.reject('ERROR'),
//     Promise.resolve('Another Success')
// ]).then(res => console.log(res))

// Promise.all([
//     Promise.resolve('Success'),
//     Promise.reject('ERROR'),
//     Promise.resolve('Another Success')
// ])
//     .then(res => console.log(res))
//     .catch(err => console.error(err))

// Promise.any([
//     Promise.resolve('Success'),
//     Promise.reject('ERROR'),
//     Promise.resolve('Another Success')
// ])
//     .then(res => console.log(res))
//     .catch(err => console.error(err))

const wait = function (seconds) {
    return new Promise(function (resolve){
        setTimeout(resolve, seconds * 100)
    })
}

const imgContainer = document.querySelector('.images')

const createImage = function (imgPath) {
    return new Promise(function(resolve, reject){
        const img = document.createElement('img')
        img.src=imgPath
        
        img.addEventListener('load', function(){
            imgContainer.append(img)
            resolve(img)
        })
        
        img.addEventListener('error', function(){
            reject(new Error('image not found'))
        })
    })
}

let currentImg

const loadNPause = async function () {
    try{
        let img = await createImage('img/image-1.jpg')
        console.log('Image 1 loaded');
        await wait(2)
        img.style.display = 'none'

        img = await createImage('img/image-2.jpg')
        console.log('Image 2 loaded');
        await wait(2)
        img.style.display = 'none'
    } catch (err) {
        console.error(err);
        
    }
}
// loadNPause()

const loadAll = async function (imgArr) {
    try{
        const imgs = imgArr.map(async img => await createImage(img))
        const imgsEl = await Promise.all(imgs)
        console.log(imgsEl);
        imgsEl.forEach(img => img.classList.add('parallel'))
    } catch (err) {
        console.log(err);
    }
}
loadAll(['img/image-1.jpg', 'img/image-2.jpg', 'img/image-3.jpg'])