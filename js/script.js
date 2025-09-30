
  const btn = document.getElementById("menuBtn");
  const icon = document.getElementById("menuIcon");
  const mobileMenu = document.getElementById("mobileMenu");

  btn.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.contains("max-h-[500px]");

    if (!isOpen) {
      // ochish
      mobileMenu.classList.remove("max-h-0", "opacity-0");
      mobileMenu.classList.add("max-h-[500px]", "opacity-100");
      icon.classList.remove("fa-bars");
      icon.classList.add("fa-xmark");
    } else {
      // yopish
      mobileMenu.classList.add("max-h-0", "opacity-0");
      mobileMenu.classList.remove("max-h-[500px]", "opacity-100");
      icon.classList.remove("fa-xmark");
      icon.classList.add("fa-bars");
    }
  });