let submitButton = document.querySelector(".create-account");
let form = document.querySelector(".form");

submitButton.addEventListener("click", function(e) {
    e.preventDefault();

    form.reset();

})