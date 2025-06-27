document.addEventListener("DOMContentLoaded", ()=>{
    const btn = document.getElementById("btn");
    const fn = document.getElementById("fn");
    const na = document.getElementById("na");

    const body = document.getElementsByTagName("body");


    const imagenes = [
        ".../assets/img3.jpg",
        ".../assets/img3.jpg",
        ".../assets/img3.jpg",
        ".../assets/img3.jpg",
    ]

    const frases =[
        "El único modo de hacer un gran trabajo es amar lo que haces.",
        "El éxito no es la clave de la felicidad. La felicidad es la clave del éxito.",
        "No cuentes los días, haz que los días cuenten.",
        "El único lugar donde el éxito viene antes que el trabajo es en el diccionario."
]

const autores =[
    "Steve Jobs",
    "Albert Schweitzer",
    "Muhammad Ali",
    "Vidal Sassoon"
]

fn.textContent = frases [0];
na.textContent = autores [0];

    btn.addEventListener("click", ()=>{
        num = Math.floor(Math.random() * 4);
        fn.textContent = frases[num];
        na.textContent = autores[num];
        body[0].setAttribute("style","background-image: url("+imagenes[0]+")");
    })
})