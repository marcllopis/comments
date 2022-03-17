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

// function in charge of generating the needed html to append a comment with it's username and it's text

const generateHtmlComment = (nameOfTheUser, commentFromUser) => {
  // create all html needed for a comment
  let commentContainer = document.createElement("div");
  let spaceBetweenLines = document.createElement("br");
  let userNameElement = document.createElement("h4");
  let userCommentElement = document.createElement("p");
  let separator = document.createElement("hr");

  // Mix the user name and comment with the created html elements
  userNameElement.innerHTML = `${nameOfTheUser} said:`;
  userCommentElement.innerHTML = commentFromUser;

  // add all those elements to the div container
  commentContainer.appendChild(spaceBetweenLines);
  commentContainer.appendChild(userNameElement);
  commentContainer.appendChild(userCommentElement);
  commentContainer.appendChild(separator);

  // add the comment div (with all its childs) to the html
  commentsSection.appendChild(commentContainer);
};

// control the click on the comment button
button.addEventListener("click", () => {
  let inputValue = input.value;
  let textValue = text.value;
  // calls the fn in charge of creating the needed html with the needed arguments
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

// iterates over the initial array that contains the comments from different users we want to show when the page loads

listOfComments.forEach((element) =>
  generateHtmlComment(element.user, element.comment)
);
