window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    if (scroll > 10) {
      document.querySelector(".nav-bar").classList.add("shadow");
    } else {
      document.querySelector(".nav-bar").classList.remove("shadow");
    }
  });