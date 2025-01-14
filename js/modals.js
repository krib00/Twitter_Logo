let modal;
document.addEventListener('DOMContentLoaded', function () {

    modal = document.querySelector(".speedModal");
    const range = document.querySelector('.speedInp');
    const output = document.querySelector('.output');
    output.textContent = 'Medium'; // default, se izve samo enkrat, na začetku
    window.speed = 2.5; // default
    range.addEventListener('input', function () {
        const value = range.value;

        switch (value) {
            case '1':
                output.textContent = 'Very slow';
                window.speed = 0.5; // hitrost animacije
                break;
            case '2':
                output.textContent = 'Slow';
                window.speed = 1;
                break;
            case '3':
                output.textContent = 'Medium';
                window.speed = 2.5;
                break;
            case '4':
                output.textContent = 'Fast';
                window.speed = 6;
                break;
            case '5':
                output.textContent = 'Very fast';
                window.speed = 15;
                break;
            default:
                output.textContent = 'Medium';
                window.speed = 2.5;
                break;
        }

    });

});

function openSpeed() {
    modal.classList.add("modalShown");
}
function closeSpeed() {
    modal.classList.remove("modalShown");
}

