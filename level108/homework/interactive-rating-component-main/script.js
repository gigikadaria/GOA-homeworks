const myForm = document.getElementById("myForm");

myForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const ratingValue = e.target.rating.value;
    const ratingError = document.getElementById("ratingError");

    if (!ratingValue) {
        ratingError.textContent = "Please select a rating before submitting";
        return;
    } else {
        ratingError.textContent = "";
    }
    localStorage.setItem("userRating", ratingValue);
    myForm.style.display = "none";

    const thankYouState = document.getElementById("thankYouState");
    thankYouState.style.display = "grid";

    const savedRating = localStorage.getItem("userRating");
    const selectedrating = document.getElementById("selectedRating");
    selectedRating.textContent = savedRating;
});