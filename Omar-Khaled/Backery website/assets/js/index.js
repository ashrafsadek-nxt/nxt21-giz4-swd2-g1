const header = document.getElementById("header");
const logo = document.querySelector("#logo");
const navLinks = document.querySelectorAll(".nav-link");
const btnNavbar = document.getElementById("btn-nav");

window.onscroll = () => {
  if (window.scrollY >= 100) {
    header.classList.add("header-scroll");
    logo.src = "assets/images/bakery-color.png";
  } else {
    header.classList.remove("header-scroll");
    logo.src = "assets/images/bakery-light-1.png";
  }
};

const loopRemoveActiveLink = (arr) => {
  arr.forEach((item) => {
    item.classList.remove("active");
  });
}

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    loopRemoveActiveLink(navLinks);
    link.classList.add("active");
  });
});

btnNavbar.addEventListener("click", () => {
  document.getElementById('navbar').classList.toggle('active');
});

