const ratingDiv = document.querySelectorAll(".rating");
const sendReviewBtn = document.getElementById("send-review-btn");

let selectedRating = "";

ratingDiv.forEach((element) => {
  element.addEventListener("click", (event) => {
    removeActive();
    selectedRating = event.target.innerText;
    event.target.classList.add("active");
  });
});

sendReviewBtn.addEventListener("click", function () {
  const container = document.getElementById("feedback-container");
  if (selectedRating !== "") {
    container.innerHTML = `<strong>Thank you!</strong>
        <br>
        <strong>Feedback: ${selectedRating}</strong>
        <br>
        <p>We'll use your feedback to improve our customer support.</p>`;
  }
});

function removeActive() {
  ratingDiv.forEach((element) => {
    element.classList.remove("active");
  });
}
