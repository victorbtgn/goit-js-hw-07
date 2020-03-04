console.log(`Task 1`);

const ulRef = document.querySelector("#categories");
// console.log(ulRef);

// const categoryRef = ulRef.querySelectorAll("li.item");
const categoryRef = [...ulRef.children];

console.log(`В списке ${categoryRef.length} категории`);

const categoriesItem = unit =>
  unit.forEach(item => {
    const title = item.querySelector("h2").textContent;
    const numberOfItem = item.querySelectorAll("li").length;

    console.log(`Категория: ${title}`);
    console.log(`Количество элементов: ${numberOfItem}`);
  });

categoriesItem(categoryRef);
