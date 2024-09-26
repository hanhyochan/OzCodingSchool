const apiRandomDogs = "https://dog.ceo/api/breeds/image/random/42";
const apiAllBreeds = "https://dog.ceo/api/breeds/list/all";
const request1 = new XMLHttpRequest();
const request2 = new XMLHttpRequest();

const header = document.getElementById("header");
const main = document.getElementById("main");
const input = document.getElementById("filter_text");
const button = document.getElementById("filter_button");
const select = document.getElementById("filter_select");
const more = document.getElementById("more");
const tothetop = document.getElementById("tothetop");
const reset_button = document.getElementById("reset_button");

const currentDogs = [];

function displayDogs(item) {
  const dogImgDiv = document.createElement("div");
  dogImgDiv.classList.add("flex_item");
  dogImgDiv.innerHTML = `<img src=${item} alt="Dog Image">`;
  main.appendChild(dogImgDiv);
}

window.addEventListener("load", function () {
  request1.open("get", apiRandomDogs);
  request1.addEventListener("load", function () {
    const response = JSON.parse(request1.response);
    response.message.forEach(function (item) {
      currentDogs.push(item);
      displayDogs(item);
    });
  });
  request1.send();

  request2.open("get", apiAllBreeds);
  request2.addEventListener("load", function () {
    const response = JSON.parse(request2.response);
    Object.keys(response.message).forEach(function (item) {
      const option = document.createElement("option");
      option.textContent = item;
      option.value = item;
      select.appendChild(option);
    });
  });
  request2.send();
});

button.addEventListener("click", function () {
  main.innerHTML = "";
  let filteredDogs = currentDogs.filter(function (item) {
    return item.indexOf(input.value) !== -1;
  });

  input.value = "";

  filteredDogs.forEach(function (item) {
    displayDogs(item);
  });
});

select.addEventListener("change", function () {
  main.innerHTML = "";
  let filteredDogs = currentDogs.filter(function (item) {
    return item.indexOf(select.value) !== -1;
  });

  filteredDogs.forEach(function (item) {
    displayDogs(item);
  });
});

more.addEventListener("click", function () {
  request1.open("get", apiRandomDogs);
  request1.addEventListener("load", function () {
    const response = JSON.parse(request1.response);
    response.message.forEach(function (item) {
      currentDogs.push(item);
      displayDogs(item);
    });
  });
  request1.send();
});

tothetop.addEventListener("click", function () {
  window.scrollTo({ top: 0 });
});

reset_button.addEventListener("click", function () {
  main.innerHTML = "";
  request1.open("get", apiRandomDogs);
  request1.addEventListener("load", function () {
    currentDogs = [];
    const response = JSON.parse(request1.response);
    response.message.forEach(function (item) {
      currentDogs.push(item);
      displayDogs(item);
    });
  });
  request1.send();
});
