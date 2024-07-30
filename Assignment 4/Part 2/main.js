/* Author Name: Nirmal Patel
     Date:29 July 2024
     Discription: fourth HTML assignment part 2
     it is the actual java script code */

// it is used to display the main image element.
const displayedImage = document.querySelector('.displayed-img');
// it is used to select container for thumb nail.
const thumbBar = document.querySelector('.thumb-bar');
// used for the button
const btn = document.querySelector('button');
// use to overlay the images
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imageFiles = ['pic1.jpg' , 'pic2.jpg', 'pic3.jpg' ,'pic4.jpg', 'pic5.jpg'];

/* Declaring the alternative text for each image file */
const altText = [
  'Closeup of a human eye', 
  'painting of the desert',
  'painting of the flowers',
  'painting of the ancient peoples' ,
  'butterfly on leaf'
];

/* Looping through images */
// uses for loop for looping the images.
for(let i = 0; i < imageFiles.length; i++) {
  // creates new image element every time the loop occurs. 
  const newImage = document.createElement('img');
  // link for the source of the images.  
  newImage.setAttribute('src',`images/${imageFiles[i]}`);
  // uses link of array for alttext   
  newImage.setAttribute('alt', altText[i]);
  // adding new image ti thumbBar.   
  thumbBar.appendChild(newImage);

  // eventlistener for clicking on the image
  // e stands for event objects.  
  newImage.addEventListener('click',(e) => {
    // set source of display image to target source.
    displayedImage.src = e.target.src;
    // set source of display image alt to target source alt.
    displayedImage.alt = e.target.alt;
  });
}


/* Wiring up the Darken/Lighten button */

// eventlistner for the light effect
btn.addEventListener('click', ()=> {
  // helps to get the current class of button.
  const btnClass = btn.getAttribute('class');
  // if button is dark it will change to light.
  if(btnClass === 'dark'){
    btn.setAttribute('class','light'); 
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
  } else {
       // if button is light it will change to dark. 
       btn.setAttribute('class','dark');
       btn.textContent = 'Darken';
       overlay.style.backgroundColor = 'rgba(0,0,0,0)'; 
  }
});
