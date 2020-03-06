console.log(`Task 3`);

const images = [
  {
    url:
      "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat"
  },
  {
    url:
      "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish"
  },
  {
    url:
      "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running"
  }
];

const ulRef = document.querySelector("#gallery");

const galleryListTag = array =>
  array.forEach(element => {
    const listItem = document.createElement("li");
    const image = document.createElement("img");

    image.setAttribute("src", element.url);
    image.setAttribute("alt", element.alt);

    listItem.appendChild(image);

    ulRef.insertAdjacentHTML(`afterbegin`, `<li>${listItem.innerHTML}</li>`);
  });

console.log(galleryListTag(images));

//  =============================
// Не работает так как в теге 'img' атрибут 'url' не подтягивает изображения,
// код рабочий если 'url' переименовать в 'src'

// const galleryListTag = array =>
//   array.forEach(element => {
//     const listItem = document.createElement("li");
//     const image = document.createElement("img");

//     element = Object.entries(element).forEach(item => {
//       image.setAttribute(item[0], item[1]);
//     });
//     listItem.appendChild(image);

//     ulRef.insertAdjacentHTML(`afterbegin`, `<li>${listItem.innerHTML}</li>`);
//   });

// console.log(galleryListTag(images));

//  ==============================
