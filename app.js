const container = document.getElementById('container');
const button = document.getElementById('button');
let images = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];

for(let i=0; i<3; i++) {
  const rng = Math.floor(Math.random() * images.length + 1);
  container.innerHTML += `<img src=../images/${rng}.png>`;
  images.filter(image => images.indexOf(image) === rng);
}