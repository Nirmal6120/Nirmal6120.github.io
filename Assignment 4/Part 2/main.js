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
    const newImage = document.createElement('img');
    newImage.setAttribute('src',`images/${imageFiles[i]}`);
    newImage.setAttribute('alt', altText[i]);
    thumbBar.appendChild(newImage);
}


 newImage.addEventListner('click',(e) => {
    displayedImage.src = e.target.src;
    displayedImage.alt = e.target.alt;
 })

/* Wiring up the Darken/Lighten button */

btn.addEventListner('click',()=> {
    const btnClass = btn.getAttribute('class');
    if(btnClass === 'dark'){
       btn.setAttribute('class','Light'); 
       btn.textContent = 'Lighten';
       overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    }else{
       btn.setAttribute('class','dark');
       btn.textContent = 'Darken';
       overlay.style.backgroundColor = 'rgba(0,0,0,0)'; 
    }
})
