console.log(`Task 2`);

const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы"
];

const ulRef = document.querySelector("#ingredients");

const productListTag = array =>
  array.forEach(item => {
    const product = document.createElement("li");
    product.textContent = item;
    ulRef.appendChild(product);
  });

// const productListTag = array =>
//   array.map(item => {
//     const product = document.createElement("li");
//     product.textContent = item;
//     return ulRef.appendChild(product);
//   });

console.log(ulRef);
console.log(productListTag(ingredients));
