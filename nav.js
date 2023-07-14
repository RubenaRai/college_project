let dropbox= document.querySelectorAll(".second-nav-dropdown");
    dropbox.forEach(secondnavdropdown=> {
            secondnavdropdown.addEventListener("click", () => {
                secondnavdropdown.classList.toggle("active");
            })
        })