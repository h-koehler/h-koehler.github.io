// const { default: scrollIntoView } = await import(
//     'https://esm.sh/scroll-into-view-if-needed'
// )

// document.getElementById('about').scrollIntoView();

function scrollFunction(elementId) {
    document.getElementById(elementId).scrollIntoView();
}

// onscroll = (event) => {
//     let scroll = this.scrollY;
//     const section = document.getElementById('.about');
//     if (scroll > 10) {;
//         section.scrollIntoView({
//             behavior: "smooth",
//         })
//     }
// }