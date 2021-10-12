let products = [
  {
    name: 'ferrari 458 italia',
    price: '$80,000',
    image: 'ferrari',
  },
  {
    name: 'chevrolet coupe',
    price: '$55,999',
    image: 'chevrolet',
  },
  {
    name: 'audi coupe',
    price: '$60,000',
    image: 'audi',
  },
  {
    name: 'ford mustang gt',
    price: '$58,999',
    image: 'mustang',
  },
  {
    name: 'porsche 911',
    price: '$90,999',
    image: 'porsche',
  },
  {
    name: 'lamborghini',
    price: '$550,000',
    image: 'lambo',
  },
  {
    name: 'rollsroyce',
    price: '$690,000',
    image: 'rolls',
  },
  {
    name: 'mercedes benz',
    price: '$250,000',
    image: 'mercedes',
  },
  {
    name: 'bmw m3 coupe',
    price: '$300,000',
    image: 'bmw',
  },
];

console.log('products are', products.length);

let gallerySection = document.getElementById('gallery-wrapper');
let html = '';
products.forEach((e) => {
  html += `
         <div class="gallery-card">
          <div class="gallery-image">
            <img src="./images/${e.image}.jpeg" alt="" srcset="" />
          </div>
          <div class="gallery-info">
            <h1>${e.name}</h1>
            <h3 class="price">${e.price}</h3>
          </div>
        </div>
    
    `;
  console.log(e);

  gallerySection.innerHTML = html;
});
