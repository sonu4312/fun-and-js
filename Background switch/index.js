const allbuttons = document.querySelectorAll(".button");

const body = document.querySelector("body");

allbuttons.forEach((button) => {
  button.addEventListener("click", function (e) {
    body.style.backgroundColor = e.target.id;
  });
});
