let enterButton = document.getElementById("enter-btn");
let landingSection = document.getElementById("landing");
let mainSection = document.getElementById("main-page");

// button to control how to get to the comments section
enterButton.addEventListener("click", function () {
  landingSection.classList.add("hide");
  mainSection.classList.remove("hide");
  mainSection.classList.add("show");
});

// storing in variables everything needed in the comments section
let button = document.getElementById("button");
let input = document.getElementById("user");
let text = document.getElementById("text");
let commentsSection = document.getElementById("comments");

// control the click on the comment button
button.addEventListener("click", function () {
  let inputValue = input.value;
  let textValue = text.value;

  // create all html needed for a comment
  let commentContainer = document.createElement("div");
  let spaceBetweenLines = document.createElement("br");
  let userNameElement = document.createElement("h4");
  let userCommentElement = document.createElement("p");
  let separator = document.createElement("hr");

  // Mix the user name and comment with the created html elements
  userNameElement.innerHTML = `${inputValue} said:`;
  userCommentElement.innerHTML = textValue;

  // add all those elements to the div container
  commentContainer.appendChild(spaceBetweenLines);
  commentContainer.appendChild(userNameElement);
  commentContainer.appendChild(userCommentElement);
  commentContainer.appendChild(separator);

  // add the comment div (with all its childs) to the html
  commentsSection.appendChild(commentContainer);

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

for (let i = 0; i < listOfComments.length; i++) {
  let user = listOfComments[i].user;
  let comment = listOfComments[i].comment;

  // create all html needed for a comment
  let commentContainer = document.createElement("div");
  let spaceBetweenLines = document.createElement("br");
  let userNameElement = document.createElement("h4");
  let userCommentElement = document.createElement("p");
  let separator = document.createElement("hr");

  // Mix the user name and comment with the created html elements
  userNameElement.innerHTML = `${user} said:`;
  userCommentElement.innerHTML = comment;

  // add all those elements to the div container
  commentContainer.appendChild(spaceBetweenLines);
  commentContainer.appendChild(userNameElement);
  commentContainer.appendChild(userCommentElement);
  commentContainer.appendChild(separator);

  // add the comment div (with all its childs) to the html
  commentsSection.appendChild(commentContainer);
}
