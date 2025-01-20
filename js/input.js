document.addEventListener("DOMContentLoaded", () => {
    const emailInput = document.querySelector(".emailInput");

    document.querySelector(".email").addEventListener("click", activeInput);
    document.querySelector(".email").addEventListener("focusin", activeInput);

    function activeInput() {
        const email = document.querySelector(".email");
        const span = document.querySelector(".spanEmail");

        email.classList.add("emailMod");
        span.classList.add("spanMod");

        emailInput.focus();

        function handleClickOutside(event) {
            if (!email.contains(event.target)) {
                email.classList.remove("emailMod");
                span.classList.remove("spanMod");

                if (emailInput.value.length > 0) {
                    span.classList.add("spanMod2");
                } else {
                    span.classList.remove("spanMod2");
                }
                document.body.focus();
            }
        }

        document.addEventListener("click", handleClickOutside);
        document.addEventListener("focusin", handleClickOutside);
    }

    const submitBtn = document.querySelector(".submitBtn");

    submitBtn.addEventListener("click", (event) => {
        event.preventDefault();
        
        const inputValue = emailInput.value.trim().toLowerCase();

        if (inputValue === "credits" || inputValue === "credit") {
            credits();
            document.querySelectorAll("input").forEach(input => {
                input.value = "";
            });
        }
        else if (emailInput.value === "") {
            swal("Empty", "Please provide the email into the field.", "error");
        } else if (!emailInput.value.includes("@")) {
            swal("Invalid email", "Please include '@' in your email address.", "error");
        } else if (emailInput.value.split("@")[1] === undefined || emailInput.value.split("@")[1] === "") {
            swal("Invalid email", "Please provide a valid domain after '@'.", "error");
        } else if (emailInput.checkValidity()) {
            swal("Subscribed!", "You will now be notified about the latest updates and promotions. Stay tuned!", "success").then(() => {
                document.querySelectorAll("input").forEach(input => {
                    input.value = "";
                });
            });
        } else {
            swal("Error", "Please input a valid email.", "error");
        }
    });
});

function credits() {
    swal({
        title: "Credits",
        icon: "info",
        content: {
            element: "div",
            attributes: {
                innerHTML: `
                Made by: Kristijan Boben<br>
                Professor: Boštjan Vouk<br>
                Made with: Html, CSS, JavaScript<br>
                Github: <a href="https://github.com/krischnb" target="_blank" class="github-link">Click here!</a>
            `,
            },
        },
    });
}
