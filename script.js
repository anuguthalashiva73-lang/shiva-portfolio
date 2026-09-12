/* =====================================================
   SHIVA PORTFOLIO
   Main JavaScript
   ===================================================== */


/* ================= MOBILE MENU ================= */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");


menuToggle.addEventListener("click", function () {

    navLinks.classList.toggle("open");

});


/* Close menu after clicking a link */

const navItems = document.querySelectorAll(".nav-link");


navItems.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("open");

    });

});


/* ================= HEADER ON SCROLL ================= */

const header = document.querySelector(".header");


function updateHeader() {

    if (window.scrollY > 30) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

}


window.addEventListener("scroll", updateHeader);


/* ================= ACTIVE NAVIGATION ================= */

const sections = document.querySelectorAll("section[id]");


function updateActiveNavigation() {

    const scrollPosition =
        window.scrollY + 150;


    sections.forEach(function (section) {

        const sectionTop =
            section.offsetTop;

        const sectionHeight =
            section.offsetHeight;

        const sectionId =
            section.getAttribute("id");


        if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
        ) {

            navItems.forEach(function (link) {

                link.classList.remove("active");

            });


            const activeLink =
                document.querySelector(
                    `.nav-link[href="#${sectionId}"]`
                );


            if (activeLink) {

                activeLink.classList.add("active");

            }

        }

    });

}


window.addEventListener(
    "scroll",
    updateActiveNavigation
);


/* ================= SCROLL REVEAL ================= */

const revealElements = document.querySelectorAll(
    ".section-heading, .about-text, .stat-card, .skill-category, .project-card, .timeline-item, .contact-card"
);


revealElements.forEach(function (element) {

    element.classList.add("reveal");

});


const observer = new IntersectionObserver(

    function (entries, observer) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.12
    }

);


revealElements.forEach(function (element) {

    observer.observe(element);

});


/* ================= CURRENT YEAR ================= */

const yearElement =
    document.getElementById("year");


yearElement.textContent =
    new Date().getFullYear();


/* ================= SMOOTH HASH HANDLING ================= */

document.querySelectorAll('a[href^="#"]').forEach(function (link) {

    link.addEventListener("click", function (event) {

        const targetId =
            this.getAttribute("href");


        if (targetId === "#") {
            return;
        }


        const target =
            document.querySelector(targetId);


        if (!target) {
            return;
        }


        event.preventDefault();


        const headerHeight =
            header.offsetHeight;


        const targetPosition =
            target.offsetTop - headerHeight;


        window.scrollTo({

            top: targetPosition,

            behavior: "smooth"

        });

    });

});


/* ================= PROFILE CARD PARALLAX ================= */

const profileCard =
    document.querySelector(".profile-card");


if (profileCard && window.innerWidth > 900) {

    document.addEventListener(
        "mousemove",
        function (event) {

            const x =
                (window.innerWidth / 2 - event.clientX) / 80;

            const y =
                (window.innerHeight / 2 - event.clientY) / 80;


            profileCard.style.transform =
                `rotate(${2 + x * 0.15}deg)
                 translate(${x * 0.3}px, ${y * 0.3}px)`;

        }
    );

}


/* ================= ESCAPE KEY ================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {

            navLinks.classList.remove("open");

        }

    }
);