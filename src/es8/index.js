//Object.entries
const data = {
  frontend: "Luis",
  backend: "Jonnathan",
  design: "Jesus",
};

const entries = Object.entries(data);

console.log(entries);
console.log(entries.length);

//Objetc.values
const values = Object.values(data);
console.log(values);
console.log(values.length);

//Padding
const string = "hello";
//.padStart(num_elementos, caracter)
console.log(string.padStart(7, "hi")); //hihello
console.log(string.padEnd(12, "-------")); //hihello

//(Es util para el frontend). Por ejemplo
console.log("food".padEnd(12, "   ------"));

//La coma dentro de los objetos, puede indicar que puede haber un elemento mas como no puede haber ninguno
const dato = {
  frontend: "Luis",
  backend: "Jonnathan",
  design: "Jesus",
};
console.log(dato);

const helloWorld = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve("Hello World"), 3000)
      : reject(new Error("Test error"));
  });
};

const helloAsync = async () => {
  const hello = await helloWorld();
  console.log(hello);
};

helloAsync();

//Trabajar con async-await correctamente
const anotherFunction = async () => {
  try {
    const hello = await helloWorld();
    console.log(hello);
  } catch (error) {
    console.log(error);
  }
};

anotherFunction();
