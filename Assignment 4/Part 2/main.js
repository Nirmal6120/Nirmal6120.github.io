/* Author Name: Nirmal Patel
     Date:29 July 2024
     Discription: fourth HTML assignment part 2
     it is the actual java script code */


const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');
const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imageFiles = ['pic1.jpg' , 'pic2.jpg', 'pic3.jpg' ,'pic4.jpg', 'pic5.jpg'];

/* Declaring the alternative text for each image file */
const altText = ['picture of eye', 'painting of the desert', 'painting of the flowers'
    , 'painting of the ancient peoples' , 'butterfly on leaf']

/* Looping through images */
for(let i=0; i<imageFiles.length; i++){
    const Images = document.createElement('img');
    Images.setAttribute('src',`images/${imageFiles[i]}`);
    Images.setAttribute('alt', altText[i]);
    thumbBar.appendChild(newImage);
}

const newImage = document.createElement('img');
newImage.setAttribute('src', xxx);
newImage.setAttribute('alt', xxx);
thumbBar.appendChild(newImage);

/* Wiring up the Darken/Lighten button */
