const container = document.querySelector(".horizontal-section");

container.addEventListener('wheel', (e) => {
    e.preventDefault();
    
    // Calculate the maximum scroll width
    const maxScrollLeft = container.scrollWidth - container.clientWidth;
    
    // Check if the user is on the last section (Page 3) and has scrolled to the end
    if (container.scrollLeft === maxScrollLeft && e.deltaY > 0) {
        // If on the last page and scrolling down, allow vertical scrolling
        window.scrollBy(0, e.deltaY);
    } else {
        // Otherwise, continue horizontal scrolling
        container.scrollLeft += e.deltaY;
    }
});
