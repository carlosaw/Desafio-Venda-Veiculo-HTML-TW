// SmoothScroll p/ um elemento específico
function smoothScrollTo(targetElement) {
  targetElement.scrollIntoView({ behavior: "smooth" });
}

// Função que altera as versões dos carros
function changeCarVersion(imgSrc) {
  const versionImg = document.querySelector(".versions-left-area img");
  versionImg.src = imgSrc;
}

// SmoothScroll para os elementos de galeria..
const galleryButtons = document.querySelectorAll(".gallery-button");
const gallery = document.querySelector(".gallery");
galleryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    hideMobileMenu();
    smoothScrollTo(gallery);
  });
});

// SmoothScroll para os elementos de versões..
const versionsButtons = document.querySelectorAll(".versions-button");
const versions = document.querySelector(".versions");
versionsButtons.forEach((button) => {
  button.addEventListener("click", () => {
    hideMobileMenu();
    smoothScrollTo(versions);
  });
});

// Smooth scroll for email area
const interestButtons = document.querySelectorAll(".interest-button");
const email = document.querySelector(".email-area");
interestButtons.forEach((button) => {
  button.addEventListener("click", () => {
    smoothScrollTo(email);
  });
});

// Change car versions
const b7Button = document.querySelector(".versions-buttons button:last-child");
const sButton = document.querySelector(".versions-buttons button:first-child");
b7Button.addEventListener("click", () => {
  sButton.classList.remove("active");
  b7Button.classList.add("active");
  changeCarVersion("assets/img-carro 2.png");
});
sButton.addEventListener("click", () => {
  b7Button.classList.remove("active");
  sButton.classList.add("active");
  changeCarVersion("assets/img-carro 1.png");
});

const menuMobile = document.querySelector(".menu-right img");
const closeMenu = document.getElementById("close-mobile");
menuMobile.addEventListener("click", toggleMobileMenu);
closeMenu.addEventListener("click", toggleMobileMenu);

// Função para exibir ou esconder o menu mobile, que pode ser chamada direto no onclick do html.
function toggleMobileMenu() {
  const menuMobile = document.querySelector(".menu-mobile-active");
  menuMobile.style.display =
    menuMobile.style.display === "flex" ? "hidden" : "flex";
}

// Envio de email
document.getElementById("emailForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const formData = new FormData();
  formData.append("email", email);

  if (email) {
    fetch("/sendemail", {
      method: "POST",
      body: formData,
    }).then((response) => {
      console.log(response);
    });
  } else {
    alert("Preencha seu e-mail.");
  }
});

function klikaj(i) {
  document.getElementById(i).style.visibility = 'visible';
}

document.getElementById('thumb0').addEventListener('click', function() {
  klikaj('rad1');
});
