const estudiantes=[
["E001","Andrea Salazar","Computación e Informática","III","Activo"],
["E002","Bruno Castro","Software","IV","Activo"],
["E003","Carla Medina","Computación e Informática","II","Activo"],
["E004","Diego Flores","Software","V","Activo"],
["E005","Elena Ramos","Diseño Digital","III","Inactivo"],
["E006","Fernando Ruiz","Computación","IV","Activo"]
];
document.getElementById("tabla").innerHTML=estudiantes.map(e=>`<tr><td>${e[0]}</td><td>${e[1]}</td><td>${e[2]}</td><td>${e[3]}</td><td><span class="estado">${e[4]}</span></td></tr>`).join("");