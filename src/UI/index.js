console.log('Hello world');

fetch('http://localhost:2021/prueba')
  .then(rawData => rawData.json())
  .then(data => console.log(data))