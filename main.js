import Auto from "./auto.js";

let auto1 = new Auto("ford",2000,"rojo",100);
let auto2 = new Auto("Nissan",2010,"azul");
let auto3 = new Auto("Toyota",2014);
auto1.encender();
auto1.avanzar(50, 1.5)
auto1.apagar();
auto1.avanzar(50, 1.5)

console.log(`Kilometraje ${auto1.kilometraje}`);
auto1.kilometraje = 5;
console.log(`Kilometraje ${auto1.kilometraje}`);