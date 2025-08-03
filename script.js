
window.addEventListener("scroll", () => {
  document.getElementById("navbar").classList.toggle("scrolled", window.scrollY > 50);
});


const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
menuToggle.addEventListener("click", () => navLinks.classList.toggle("active"));


document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".buy-btn");
  const message = document.createElement("div");
  message.id = "cart-message";
  document.body.appendChild(message);

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      message.textContent = "✅ Book added to cart";
      message.classList.add("show");
      setTimeout(() => message.classList.remove("show"), 1500);
    });
  });
});


document.getElementById("searchBox").addEventListener("keyup", function () {
  const filter = this.value.toLowerCase();
  const books = document.querySelectorAll(".book");
  books.forEach(book => {
    const title = book.querySelector("h3").textContent.toLowerCase();
    book.style.display = title.includes(filter) ? "flex" : "none";
  });
});
document.getElementById("searchBox").size = "140"