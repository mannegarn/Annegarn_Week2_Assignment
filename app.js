// Array of image paths
const Image_paths = [];
const Small_Image_paths = [];
for (let i = 1; i <= 4; i++) {
  Image_paths.push(`Images/Big_Images/cat${i}.jpg`);
  Small_Image_paths.push(`Images/Small_Images/small_cat${i}.jpg`);
}

// Object containing image paths
const Image_names = {
  Images: Image_paths,
  Small_images: Small_Image_paths,
};

// Get references to buttons and the image element
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const button4 = document.getElementById("button4");
const mainImage = document.getElementById("main_image");

// Event listeners for each button
button1.addEventListener("click", function () {
  mainImage.src = Image_names.Images[0];
  mainImage.srcset = Image_names.Small_images[0];
  mainImage.alt = "cat 1";
});

button2.addEventListener("click", function () {
  mainImage.src = Image_names.Images[1];
  mainImage.srcset = Image_names.Small_images[1];
  mainImage.alt = "cat 2";
});

button3.addEventListener("click", function () {
  mainImage.src = Image_names.Images[2];
  mainImage.srcset = Image_names.Small_images[2];
  mainImage.alt = "cat 3";
});

button4.addEventListener("click", function () {
  mainImage.src = Image_names.Images[3];
  mainImage.srcset = Image_names.Small_images[3];
  mainImage.alt = "cat 4";
});

///// Adding left and right click functionality

let currentIndex = 0;

document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowRight") {
    if (currentIndex === Image_names.Images.length - 1) {
      currentIndex = -1;
    }
    mainImage.src = Image_names.Images[currentIndex + 1];
    mainImage.srcset = Image_names.Small_images[currentIndex + 1];
    mainImage.alt = "cat ${currentIndex+1}";

    currentIndex++;
    console.log(currentIndex);
  }
});

document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowLeft") {
    if (currentIndex === 0) {
      currentIndex = Image_names.Images.length;
    }
    mainImage.src = Image_names.Images[currentIndex - 1];
    mainImage.srcset = Image_names.Small_images[currentIndex - 1];
    mainImage.alt = "cat ${currentIndex+1}";

    currentIndex--;
    console.log(currentIndex);
  }
});
