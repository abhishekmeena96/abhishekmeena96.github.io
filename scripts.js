// toggle icon navbar

let menuIcon = document.querySelector("#menu-icon");
let navbar=document.querySelector('.navbar');

menuIcon.onclick =() =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};




// scroll section active link

let sections=document.querySelectorAll('section');
let navLinks=document.querySelectorAll('header nav a');

window.onscroll = () =>{
    sections.forEach(sec => {
        let top=window.scrollY;
        let offset=sec.offsetTop-150;
        let height =sec.offsetHeight;
        let id=sec.getAttribute('id');

        if(top >=offset && top<offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*="'+ id +'"]').classList.add('active');
            });
        };
    });
    // sticky navbar
    let header =document.querySelector('header');

    header.classList.toggle('sticky',window.scrollY>100);

    // remove toggle icon navbar when click navbar link(scroll)

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// scroll reveal
ScrollReveal({
    reset:true,
    distance:'80px',
    duration:2000,
    delay:200
});

ScrollReveal().reveal(".home-content,.heading, .heading1",{origin:'top'});
ScrollReveal().reveal(".home-img, .services-container, .portfolio-box, .contact form",{origin:'bottom'});
ScrollReveal().reveal(".home-content h1, .about-img",{origin:'left'});
ScrollReveal().reveal(".home-content p, .about-content",{origin:'left'});



function adjustLayout() {
    let windowWidth = window.innerWidth;

    if (windowWidth <= 768) {
        // Adjust for smaller screens (phones/tablets)
        document.querySelectorAll('.timeline-content').forEach(item => {
            item.style.padding = "20px";
        });
    } else {
        // Adjust for larger screens (laptops/desktops)
        document.querySelectorAll('.timeline-content').forEach(item => {
            item.style.padding = "50px";
        });
    }
}

// Call the function when the page loads
window.onload = adjustLayout;

// Call the function when the window is resized
window.onresize = adjustLayout;
