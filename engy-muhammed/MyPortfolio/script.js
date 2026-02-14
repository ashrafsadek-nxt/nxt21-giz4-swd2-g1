// --- Mobile Menu Logic ---
        function toggleMenu() {
            const navLinks = document.getElementById('navLinks');
            // Toggle the .active class
            if (navLinks.style.display === 'flex') {
                navLinks.style.display = 'none';
            } else {
                // If on mobile (check width or just toggle based on class in real app)
                // simpler approach for pure JS without complex resizing logic:
                navLinks.classList.toggle('active');
                if (navLinks.classList.contains('active')) {
                     navLinks.style.display = 'flex';
                } else {
                     navLinks.style.display = ''; // reset to css rule
                }
            }
        }
        function toggleMenu(){
        const btn = document.querySelector(".mobile-toggle");
        const nav = document.querySelector("#navLinks");

        nav.classList.toggle("open");

        const isOpen = nav.classList.contains("open");
        btn.setAttribute("aria-expanded", isOpen);
        btn.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
}


        // --- Form Handling ---
        const form = document.getElementById('contactForm');
        const modal = document.getElementById('successModal');

        form.addEventListener('submit', function(e) {
            e.preventDefault();
            // Simulate sending data
            modal.classList.add('active');
            form.reset();
        });

        function closeModal() {
            modal.classList.remove('active');
        }

        // Close modal on outside click
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeModal();
            }
        });

        // --- Active Link Highlighting on Scroll ---
        const sections = document.querySelectorAll('section');
        const navItems = document.querySelectorAll('.nav-links a');

        window.addEventListener('scroll', () => {
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (pageYOffset >= (sectionTop - 150)) {
                    current = section.getAttribute('id');
                }
            });

            navItems.forEach(a => {
                a.classList.remove('active');
                if (a.getAttribute('href').includes(current)) {
                    a.classList.add('active');
                }
            });
        });
        const socialIcons = document.querySelectorAll(".social-icon");

socialIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    icon.classList.add("clicked");

    setTimeout(() => {
      icon.classList.remove("clicked");
    }, 200);
  });
});
