document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modalImage');
    const modalCaption = document.getElementById('modalCaption');
    const closeBtn = document.querySelector('.close');
    const galleryItems = document.querySelectorAll('.gallery-item');
    const linkedinButton = document.getElementById('linkedinButton');
    const parcoursButton = document.getElementById('parcoursButton');

    galleryItems.forEach(item => {
        const img = item.querySelector('.gallery-image');
        const caption = item.querySelector('.image-caption').textContent;
        const role = item.querySelector('.image-role').textContent;

        img.addEventListener('click', () => {
            modal.style.display = "flex";
            modalImage.src = img.src;
            modalCaption.innerHTML = `<strong>${caption}</strong><br>${role}`;
            linkedinButton.href = `https://www.linkedin.com/in/${caption.toLowerCase().replace(' ', '-')}`; 
            parcoursButton.onclick = () => {
                alert(`Le parcours de ${caption}`);
            };
        });
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = "none";
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const countersSection = document.querySelector('.stats');

    function checkCountersVisibility() {
        const countersPosition = countersSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (countersPosition < windowHeight * 0.5) {
            incrementCounter1();
            incrementCounter2();
            incrementCounter3();
            window.removeEventListener('scroll', checkCountersVisibility);
        }
    }

    window.addEventListener('scroll', checkCountersVisibility);

    const countElement1 = document.getElementById('count1');
    const countElement2 = document.getElementById('count2');
    const countElement3 = document.getElementById('count3');

    const maxCount1 = 2009; 
    const maxCount2 = 10; 
    const maxCount3 = 100;

    let currentCount1 = 1;
    let currentCount2 = 0;
    let currentCount3 = 0;

    function incrementCounter1() {
        if (currentCount1 <= maxCount1) {
            countElement1.textContent = currentCount1;
            currentCount1 +=4;
            setTimeout(incrementCounter1,0.00001);
        }
    }

    function incrementCounter2() {
        if (currentCount2 <= maxCount2) {
            countElement2.textContent = currentCount2;
            currentCount2++;
            setTimeout(incrementCounter2,140);
        }
    }

    function incrementCounter3() {
        if (currentCount3 <= maxCount3) {
            countElement3.textContent = currentCount3;
            currentCount3++;
            setTimeout(incrementCounter3,20);
        }
    
    }
});


document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('navbar').innerHTML = `
        <header>    
            <div class="container">
                <nav>
                    <a href="#" class="logo">
                        <img src="/NewSynergy360/images/Logo.png" alt="New Synergy 360° Logo">
                    </a>                    
                    
                    <ul class="nav-links">
                        <li><a href="/NewSynergy360/index.html">Accueil</a></li>
                        
                        <li>
                            <a href="/NewSynergy360/html/nos-services.html" class="dropdown-btn">
                                Expertises/Nos services <span class="arrow-icon"><i class="fas fa-chevron-down"></i></span>
                            </a>
                            <ul class="submenu">
                                <li><a href="#">Innovation sociale</a></li>
                                <li><a href="#">Pilotage stratégique</a></li>
                                <li><a href="#">Audit et diagnostic stratégique</a></li>
                                <li><a href="#">Conseil en organisation et management</a></li>
                                <li><a href="#">Déploiement stratégique et business plan</a></li>
                                <li><a href="#">Accompagnement dans la mise en place du plan</a></li>
                            </ul>
                        </li>                        
                        
                        <li><a href="/NewSynergy360/html/contact.html">Contact</a></li>
                        <li><a href="/NewSynergy360/html/blog.html">Blog/Actualités</a></li>
                        <li><a href="/NewSynergy360/html/notre-equipe.html">Notre équipe</a></li>
                        <li><a href="/NewSynergy360/html/notre-histoire.html">Notre histoire</a></li>
                        <li><a href="/NewSynergy360/html/recrutement.html">Recrutement</a></li>
                    </ul>
                    
                    <div class="hamburger">
                        <div class="line"></div>
                        <div class="line"></div>
                        <div class="line"></div>
                    </div>
                </nav>
            </div>
            </header>
        `;

        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');

        hamburger.addEventListener('click', () => {

            navLinks.classList.toggle('active');

        });
    

    document.getElementById('footer').innerHTML = `
        <footer>
            <div class="container">
            <h3>Nos coordonnées</h3>
            <p><i class="fas fa-map-marker-alt"></i> 30 RUE DU DOCTEUR BRINDEAU, 44000 Nantes</p>
            <p><i class="fas fa-phone"></i> <a href="tel:+00 00 00 00 00">00 00 00 00 00</a></p>
            <p><i class="fas fa-envelope"></i> <a href="mailto:contact@newsynetrgy360.fr">contact@newsynetgy360.fr</a></p>
            </div>

            <div class="container">
            <h3>Restons connectés</h3>
            <div class="social-media">
                <a href="#"><i class="fab fa-twitter"></i></a>
                <a href="#"><i class="fab fa-linkedin"></i></a>
                <a href="#"><i class="fab fa-facebook"></i></a>
            </div>
            </div>

            <div class="container">
            <h3>Expertises</h3>
            <ul>
                <li><a href="#">Finances publiques</a></li>
                <li><a href="#">Fiscalité</a></li>
                <li><a href="#">Aménagement Numérique</a></li>
                <li><a href="#">Environnement</a></li>
            </ul>
            </div>


            <!-- Droit d'auteur -->
            <div class="copyright">
                <p>&copy; 2024 New Synergy 360°.</p>
            </div>
        </footer>`;
});

document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('.nav-links a');
    const currentPage = window.location.pathname.split("/").pop();

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const timelineItems = document.querySelectorAll(".timeline-card");

    function showTimelineItems(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target);
            }
        });
    }

    const observer = new IntersectionObserver(showTimelineItems, {
        root: null,
        rootMargin: "0px",
        threshold: 0.9
    });

    timelineItems.forEach(item => {
        observer.observe(item);
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const recruitmentSection = document.querySelector(".container-recruitment");
    const noOffersSection = document.querySelector(".no-offers");

    function showSections(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target);
            }
        });
    }

    const observer = new IntersectionObserver(showSections, {
        root: null,
        rootMargin: "0px",
        threshold: 0.3
    });

    observer.observe(recruitmentSection);
    observer.observe(noOffersSection);
});

 
function toggleInfo(button) {
    var info = button.nextElementSibling;
    var arrow = button.querySelector('.arrow');
    if (info.style.display === "block") {
        info.style.display = "none";
        arrow.classList.remove("down");
        arrow.classList.add("right");
    } else {
        info.style.display = "block";
        arrow.classList.remove("right");
        arrow.classList.add("down");
    }
}
