const cursos = [
 {nombre:"Desarrollo Web", carrera:"Computación e Informática", creditos:4, profesor:"Ana Torres"},
 {nombre:"Programación de Móviles", carrera:"Computación e Informática", creditos:4, profesor:"Jorge Ventura"},
 {nombre:"Bases de Datos", carrera:"Software", creditos:3, profesor:"Luis Pérez"},
 {nombre:"Git y GitHub", carrera:"Software", creditos:2, profesor:"María Rojas"},
 {nombre:"Programación Orientada a Objetos", carrera:"Computación", creditos:4, profesor:"Carlos Díaz"},
 {nombre:"Diseño de Interfaces", carrera:"Diseño Digital", creditos:3, profesor:"Lucía Vega"},
 {nombre:"Redes", carrera:"Computación", creditos:3, profesor:"Pedro León"},
 {nombre:"Sistemas Operativos", carrera:"Software", creditos:3, profesor:"Rosa Silva"}
];
const lista=document.getElementById("lista"), buscar=document.getElementById("buscar");
function render(filtro=""){ lista.innerHTML=cursos.filter(c=>c.nombre.toLowerCase().includes(filtro.toLowerCase())).map(c=>`<article class="curso"><div class="icon">⌘</div><h2>${c.nombre}</h2><p>${c.carrera}</p><div class="info"><span>${c.creditos} créditos</span><span>${c.profesor}</span></div></article>`).join("");}
buscar.addEventListener("input",e=>render(e.target.value)); render();