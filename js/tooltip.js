document.addEventListener("DOMContentLoaded", () => {
    const picCont = document.querySelector(".picCont");
    const tooltip = document.createElement("div");
    tooltip.className = "downTitle";
    document.body.appendChild(tooltip);

    picCont.addEventListener("mouseenter", () => {
        tooltip.textContent = picCont.getAttribute("title");
        tooltip.style.display = "block"; // prikaz napisa
        picCont.removeAttribute("title"); // odstranitev default title attributa, da se ne še enkrat pojavi - lep okras
    });

    picCont.addEventListener("mousemove", (event) => { // ko premikas misko, bo napis sledil kurzori
        tooltip.style.left = `${event.pageX + 10}px`;
        tooltip.style.top = `${event.pageY + 10}px`;
    });

    picCont.addEventListener("mouseleave", () => {
        tooltip.style.display = "none";
        picCont.setAttribute("title", tooltip.textContent);
    });

    // page 2

    const picCont2 = document.querySelector(".picCont2");
    const tooltip2 = document.createElement("div");
    tooltip2.className = "downTitle";
    document.body.appendChild(tooltip2);

    picCont2.addEventListener("mouseenter", () => {
        tooltip2.textContent = picCont2.getAttribute("title");
        tooltip2.style.display = "block"; // prikaz napisa
        picCont2.removeAttribute("title"); // odstranitev default title attributa, da se ne še enkrat pojavi - lep okras
    });

    picCont2.addEventListener("mousemove", (event) => { // ko premikas misko, bo napis sledil kurzori
        tooltip2.style.left = `${event.pageX + 10}px`;
        tooltip2.style.top = `${event.pageY + 10}px`;
    });

    picCont2.addEventListener("mouseleave", () => {
        tooltip2.style.display = "none";
        picCont2.setAttribute("title", tooltip2.textContent);
    });
    

});
