var elevadorA= prompt("Ingrese el piso del elevador A");
alert(elevadorA);
var elevadorB= prompt("Ingrese el piso del elevador B");
alert(elevadorB);
var gama= prompt("Ingrese el piso donde se encuentra Gama");
alert(gama);
var a= parseInt(elevadorA);
var b= parseInt(elevadorB);
var c= parseInt(gama);
var d=a-c;
var e=b-c;
if (d>=0 && e>=0) {
  if (d>e) {
    console.log("Gama, el elevador B es el mas cercano");
  }else if (d<e) {
    console.log("Gama, el elevador A es el mas cercano");
  }else {
    console.log("Estan a la misma distancia");
  }
}
if (d<0 && e<0) {
  if (d>e) {
    console.log("Gama, el elevador A es el mas cercano");
  }else if (d<e) {
    console.log("Gama, el elevador B es el mas cercano");
  }else {
    console.log("Estan a la misma distancia");
  }
}
if (d<0 && e>=0) {
  d*= -1
  if (d>e) {
    console.log("Gama, el elevador B es el mas cercano");
  }else if (d<e) {
    console.log("Gama, el elevador A es el mas cercano");
  }else {
    console.log("Estan a la misma distancia");
  }
}
if (d>=0 && e<0) {
  e*= -1
  if (d>e) {
    console.log("Gama, el elevador B es el mas cercano");
  }else if (d<e) {
    console.log("Gama, el elevador A es el mas cercano");
  }else {
    console.log("Estan a la misma distancia");
  }
}
