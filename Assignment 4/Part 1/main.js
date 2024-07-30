/* Author Name: Nirmal Patel
     Date:29 July 2024
     Discription: fourth HTML assignment part 1
     it is the actual java script code */

// COMPLETE VARIABLE AND FUNCTION DEFINITIONS

//get the input box for inserting customer name
const customName = document.getElementById('customname');
// creates the button for random story.
const randomize = document.querySelector('.randomize');
// it will create the area where the story will be shown.
const story = document.querySelector('.story');

// function to randomize the value from the array
function randomValueFromArray(array){
  // it will generate a random story using the length of array
  const random = Math.floor(Math.random()*array.length);
  // return array with randomize values 
  return array[random];
}

// RAW TEXT STRINGS

const storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — weighs 300 pounds, and it was a hot day.";

// arrays to randomize the text in the actual paragraph.
const insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
const insertY = ["the soup kitchen", "Disneyland", "the White House"];
const insertZ = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];


// EVENT LISTENER AND PARTIAL FUNCTION DEFINITION

// it is used to show randomize text when the button is clicked.
randomize.addEventListener('click', result);

// function to generate the randomize story
function result() {
    //creates new story using arrays  
    let newStory = storyText;

    // it will select random word for the array and change that as per the name of array like insertX.
    const xItem = randomValueFromArray(insertX);
    // it will select random word for the array and change that as per the name of array like insertY.
    const yItem = randomValueFromArray(insertY);
    // it will select random word for the array and change that as per the name of array like insertZ.
    const zItem = randomValueFromArray(insertZ);

    // replace the text which is in insertx from the values insertX.
    newStory = newStory.replace(":insertx:",xItem);
    // replace the text which is in insertx from the values insertY.
    newStory = newStory.replace(":inserty:",yItem);
    // replace the text which is in insertx from the values insertZ.
    newStory = newStory.replace(":insertz:",zItem);



  // check that the input box is empty or not.
  if(customName.value !== '') {
    // add the custome name.
    const name = customName.value;
    // it will replace box with the custome name.
    newStory = newStory.replace('Bob',name);
  }

  // it will check that is the radio button for UK is checked or not.
  if(document.getElementById("uk").checked) {
    // converts pound to stones by dividing it by 14 because 1 stone = 14 pounds.
    const weight = Math.round(300/14) + ' stone';
    // convert fahrenheit to celsius and rounds it
    const temperature =  Math.round((94 - 32) * 5 /9) + ' centigrade';
    // replace pounds to weight.
    newStory = newStory.replace('300 pounds', weight);
    // replace 94 fahrenheit to temperature.
    newStory = newStory.replace('94 fahrenheit', temperature);

  }

  // it will upadtes text with newStory.
  story.textContent = newStory;
  // it will make story element visible.
  story.style.visibility = 'visible';
}