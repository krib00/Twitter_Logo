document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".email").addEventListener("click", activeInput);
    document.querySelector(".email").addEventListener("focusin", activeInput);

    function activeInput() {
        const email = document.querySelector(".email");
        const emailInput = document.querySelector(".emailInput");
        const span = document.querySelector(".spanEmail");

        // obarva border v modro
        email.classList.add("emailMod");
        // obarva ime v modro
        span.classList.add("spanMod");

        // fokus na input kadar kliknes na DIV
        emailInput.focus();

        function handleClickOutside(event) { // preveri ce kliknes izven diva
            if (!email.contains(event.target)) {
                email.classList.remove("emailMod");
                span.classList.remove("spanMod");

                // doda spanMod2 samo takrat, ko input ni prazen in div je nefokusiran
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

    document.getElementById("emailForm").addEventListener("submit", function(event) {
        event.preventDefault();

        const emailInput = document.querySelector(".emailInput");

        if (emailInput.checkValidity()) {
            swal("Subscribed!", "You will now be notified about the latest updates and promotions. Stay tuned!", "success").then(() => {
                document.querySelectorAll("input").forEach(input => {
                    input.value = "";
                }); 
            });
        }
        else{
            if (inputValue === "credits" || inputValue === "credit") { 
                credit();
            } 
        }

        
        handleClickOutside("click");
    });
});