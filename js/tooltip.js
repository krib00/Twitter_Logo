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
    tooltip2.className = "downTitle2";
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

    // page 3

    const picCont3 = document.querySelector(".picCont3");
    const tooltip3 = document.createElement("div");
    tooltip3.className = "downTitle3";
    document.body.appendChild(tooltip3);

    picCont3.addEventListener("mouseenter", () => {
        tooltip3.textContent = picCont3.getAttribute("title");
        tooltip3.style.display = "block"; // prikaz napisa
        picCont3.removeAttribute("title"); // odstranitev default title attributa, da se ne še enkrat pojavi - lep okras
    });

    picCont3.addEventListener("mousemove", (event) => { // ko premikas misko, bo napis sledil kurzori
        tooltip3.style.left = `${event.pageX + 10}px`;
        tooltip3.style.top = `${event.pageY + 10}px`;
    });

    picCont3.addEventListener("mouseleave", () => {
        tooltip3.style.display = "none";
        picCont3.setAttribute("title", tooltip3.textContent);
    });
});
