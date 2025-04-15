"use strict";
import { PhotosAPI_auto } from "/js/api/_photos.js";
import { galleryRenderer } from "/js/renderers/gallery.js";
import { messageRenderer } from "/js/renderers/messages.js";
import { PhotosWithUsersAPI_auto } from "/js/api/_PhotosWithUsers.js";

let myDiv = document.getElementById("dom-test");
myDiv.textContent = "This was added using JavaScript";
myDiv.style.backgroundColor = "#EEEEEE";
myDiv.style.color = "black";
myDiv.style.fontFamily = "monospace";

let newP = document.createElement("p");
newP.textContent = "This is a new paragraph";
myDiv.appendChild(newP);

let newImage = document.createElement("img");
newImage.src =
  "https://loadedlandscapes.com/wp-content/uploads/2019/07/lighting.jpg";
newImage.title = "A beautiful landscape";
myDiv.appendChild(newImage);
("use strict");

async function main() {
  loadAllPhotos();
}

async function loadAllPhotos() {
  let galleryContainer = document.getElementById("gallery");
  try {
    let photos = await PhotosWithUsersAPI_auto.getAll();
    let cardGallery = galleryRenderer.asCardGallery(photos);
    galleryContainer.appendChild(cardGallery);
  } catch (err) {
    messageRenderer.showErrorMessage("Error while loading photos", err);
  }
}
document.addEventListener("DOMContentLoaded", main);
