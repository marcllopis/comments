let enterButton = document.getElementById("enter-btn");
let landingSection = document.getElementById("landing");
let mainSection = document.getElementById("main-page");

// button to control how to get to the comments section
enterButton.addEventListener("click", () => {
  landingSection.classList.add("hide");
  mainSection.classList.remove("hide");
  mainSection.classList.add("show");
});

// storing in variables everything needed in the comments section
let button = document.getElementById("button");
let input = document.getElementById("user");
let text = document.getElementById("text");
let commentsSection = document.getElementById("comments");

function generateHtmlComment(userNameFromHtml, userCommentFromHtml) {
  // create all html needed for a comment
  let commentContainer = document.createElement("div");
  let spaceBetweenLines = document.createElement("br");
  let userNameElement = document.createElement("h4");
  let userCommentElement = document.createElement("p");
  let separator = document.createElement("hr");

  // Mix the user name and comment with the created html elements
  userNameElement.innerHTML = `${userNameFromHtml} said:`;
  userCommentElement.innerHTML = userCommentFromHtml;

  // add all those elements to the div container
  commentContainer.appendChild(spaceBetweenLines);
  commentContainer.appendChild(userNameElement);
  commentContainer.appendChild(userCommentElement);
  commentContainer.appendChild(separator);

  // add the comment div (with all its childs) to the html
  commentsSection.appendChild(commentContainer);
}

// control the click on the comment button
button.addEventListener("click", () => {
  let inputValue = input.value;
  let textValue = text.value;
  // calls the generate html fn with the needed params
  generateHtmlComment(inputValue, textValue);
  // clear input and textarea fields
  input.value = "";
  text.value = "";
});

let listOfComments = [
  {
    user: "Marc",
    comment: "super long and useful comment",
  },
  {
    user: "Luke",
    comment: "just a dog",
  },
  {
    user: "Ludmila",
    comment: "get a job, listen to my meetings!",
  },
];

// iterates over the array of comments and calls the generatehtml fn on each element
listOfComments.forEach((element) =>
  generateHtmlComment(element.user, element.comment)
);
