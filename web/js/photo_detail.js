"use strict";
import { photoRenderer } from "/js/renderers/photos.js";
import { PhotosAPI_auto } from "/js/api/_photos.js";
import { messageRenderer } from "/js/renderers/messages.js";
// Get the ID of the photo to load from the URL params
let urlParams = new URLSearchParams(window.location.search);
let photoId = urlParams.get("photoId");
async function main() {
  // Check that we have an ID before doing anything else
  console.log(photoId);
  if (photoId === null) {
    messageRenderer.showErrorMessage("Please, provide a photoId");
    return;
  }
  loadPhotoDetails();
}
async function loadPhotoDetails() {
  let photoContainer = document.querySelector("#photo-details-column");
  try {
    let photo = await PhotosAPI_auto.getById(photoId);
    let photoDetails = photoRenderer.asDetails(photo);
    photoContainer.appendChild(photoDetails);
  } catch (err) {
    messageRenderer.showErrorMessage("Error loading photo", err);
  }
}
document.addEventListener("DOMContentLoaded", main);
