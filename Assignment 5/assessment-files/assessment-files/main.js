/* Author Name: Nirmal Patel
   Date: 7 august 2024
   Description: Assignment 5
   javascript file for Web Accessibility
*/



// functionality for showing/hiding the comments section

// it will select show-hide button for Document Object Model.
const showHideBtn = document.querySelector('.show-hide');
// it will select comment wrapper element 
const commentWrapper = document.querySelector('.comment-wrapper');

// initialise hide comment wrapper.
commentWrapper.style.display = 'none';

// it will add event listener.
showHideBtn.onclick = function() {
  // it will get the current text content of button
  let showHideText = showHideBtn.textContent;
  // checks the condition if the text is show comment
  if(showHideText === 'Show comments') {
    showHideBtn.textContent = 'Hide comments';
    commentWrapper.style.display = 'block';
  } else {
    showHideBtn.textContent = 'Show comments';
    commentWrapper.style.display = 'none';
  }
};

// functionality for adding a new comment via the comments form

// get the comments form element
const form = document.querySelector('.comment-form');
// select the name from DOM
const nameField = document.querySelector('#name');
const commentField = document.querySelector('#comment');
const list = document.querySelector('.comment-container');

// add event listener to submit the form 
form.onsubmit = function(e) {
  e.preventDefault();
  submitComment();
};

// function to submit new comments.
function submitComment() {
  const listItem = document.createElement('li');
  const namePara = document.createElement('p');
  const commentPara = document.createElement('p');
  const nameValue = nameField.value;
  const commentValue = commentField.value;

  namePara.textContent = nameValue;
  commentPara.textContent = commentValue;

  list.appendChild(listItem);
  listItem.appendChild(namePara);
  listItem.appendChild(commentPara);

  // it will clear name input field
  nameField.value = '';
  // clears comment input 
  commentField.value = '';
}
