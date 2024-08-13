const { default: scrollIntoView } = await import(
    'https://esm.sh/scroll-into-view-if-needed'
  )

window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    const sections = document.querySelectorAll('.anchor');
    if (scroll > 10) {
    const node = sections[step];
    node.scrollIntoView({
        behavior: "smooth",
    })
})