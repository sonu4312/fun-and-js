// scripts.js
function togglebutton(index) {
  const answers = document.querySelectorAll(".answer");
  const arrows = document.querySelectorAll(".arrow");
  const answer = answers[index];
  const arrow = arrows[index];

  if (answer.style.display === "block") {
    answer.classList.remove("slideDown");
    answer.classList.add("slideUp");
    arrow.textContent = "⬇️";

    setTimeout(() => {
      answer.style.display = "none";
      answer.classList.remove("slideUp");
    }, 300); // match the duration of the animation
  } else {
    answers.forEach((ans, i) => {
      if (i !== index) {
        ans.style.display = "none";
        ans.classList.remove("slideDown");
        ans.classList.remove("slideUp");
        arrows[i].textContent = "⬇️";
      }
    });

    answer.style.display = "block";
    answer.classList.remove("slideUp");
    answer.classList.add("slideDown");
    arrow.textContent = "⬆️";
  }
}
