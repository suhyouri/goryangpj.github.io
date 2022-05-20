'use strict'

const modal = document.getElementById("modal");
const btnModal = document.getElementById("btn-modal");
const closeBtn = modal.querySelector(".close-area");

const container = document.getElementById("container");
const newCard = document.getElementById("#form");
const form = document.querySelector("form");
const section = document.querySelector("section")

form.addEventListener("submit", handleFormSubmit);

let newCont = {};

function makeCont(cont) {
  // console.log(`new Cont : ${newCont.name}`);
  const newDiv = document.createElement("div");
  const img = document.createElement("img");
  img.src = cont.url;
  img.alt = cont.name;
  const span = document.createElement("span");
  span.innerHTML = cont.intro;
  newDiv.append(img);
  newDiv.append(span);

  console.log(cont.name);
  console.log(cont.url);
  console.log(cont.intro);

  newDiv.appendChild(img);
  newDiv.appendChild(span);
  newDiv.classList.add("card");
  section.append(newDiv);
  modal.style.display = "none";
}

function saveCont(newContObj) {
  localStorage.setItem(`name`, JSON.stringify(newCont.name));
  localStorage.setItem(`url`, JSON.stringify(newCont.url));
  localStorage.setItem(`intro`, JSON.stringify(newCont.intro));
}

function handleFormSubmit(e) {
  e.preventDefault();
  const name = String(e.target[0].value);
  const url = String(e.target[1].value);
  const intro = String(e.target[2].value);
  const newContObj = {
    name: name,
    url: url,
    intro: intro,
  };
  newCont =newContObj;
  makeCont(newContObj);
  saveCont(newContObj);
}

btnModal.addEventListener("click", (e) => {
  e.preventDefault();
  modal.style.display = "flex";
});

closeBtn.addEventListener("click", (e) => {
  e.preventDefault();
  modal.style.display = "none";
});
