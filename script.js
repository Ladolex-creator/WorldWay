 const worldwayForm = document.getElementById("worldwayForm");
const formMessage = document.getElementById("formMessage");

worldwayForm.addEventListener("submit", async function(event) {

    event.preventDefault();

    const submitButton =
        worldwayForm.querySelector(".form-submit");

    submitButton.disabled = true;
    submitButton.textContent = "Sending...";

    formMessage.textContent = "";

    const formData = new FormData(worldwayForm);

    try {

        const response = await fetch(
            "https://formspree.io/f/mwlpgawn",
            {
                method: "POST",
                body: formData,
                headers: {
                    "Accept": "application/json"
                }
            }
        );

        if (response.ok) {

            formMessage.textContent =
                "Application received successfully!";

            worldwayForm.reset();

        } else {

            const result = await response.json();

            formMessage.textContent =
                result.errors
                    ? result.errors.map(error => error.message).join(", ")
                    : "Something went wrong. Please try again.";

        }

    } catch (error) {

        console.error(error);

        formMessage.textContent =
            "Unable to send application. Please try again.";

    }

    submitButton.disabled = false;
    submitButton.textContent =
        "Submit Application →";

});