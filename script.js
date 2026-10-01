 const worldwayForm = document.getElementById("worldwayForm");
const formMessage = document.getElementById("formMessage");

worldwayForm.addEventListener("submit", async function(event) {

    event.preventDefault();

    const submitButton =
        worldwayForm.querySelector(".form-submit");

    submitButton.disabled = true;
    submitButton.textContent = "Sending...";

    formMessage.textContent = "";

    const formData = {

        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        country: document.getElementById("country").value,
        interest: document.getElementById("interest").value,
        message: document.getElementById("message").value

    };

    try {

        const response = await fetch("/api/apply", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(formData)

        });

        const result = await response.json();

        if (result.success) {

            formMessage.textContent =
                "Application received successfully!";

            worldwayForm.reset();

        } else {

            formMessage.textContent =
                result.message || "Something went wrong.";

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