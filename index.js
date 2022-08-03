document.querySelectorAll(".carousel").forEach(carousel => {
    const items = carousel.querySelectorAll(".carousel__item");
    // const butttonsHtml = Array.from(items, () => {
    //     return `<span class="carousel__btn"></span>`;
    // });
    
    // carousel.insertAdjacentHTML("beforeend", `
    //     <div class="carousel__nav">
    //         ${ butttonsHtml.join("") }
    //     </div>
    // `);

    const buttons = carousel.querySelectorAll(".carousel__btn");
    buttons.forEach((button, i) => {
        button.addEventListener("click", () => {
            // un-select all items
            items.forEach (item => item.classList.remove("carousel__item--selected"));
            buttons.forEach (button => button.classList.remove("carousel__btn--selected"));

            items[i].classList.add("carousel__item--selected");
            button.classList.add("carousel__btn--selected");
        });
    });

    // select the first item on page load
    items[0].classList.add("carousel__item--selected");
    buttons[0].classList.add("carousel__btn--selected");
});

