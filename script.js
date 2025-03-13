function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon"); 
    // Toggle the "open" class on the menu and hamburger icon
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}
