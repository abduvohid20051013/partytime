// Wait for the DOM to be ready
document.addEventListener("DOMContentLoaded", function () {
  // Select elements using querySelector
  let menu = document.querySelector(".party_menu_btn");
  let navbar = document.querySelector(".party_main_menu_wrapper");
  let counter = 0;

  // Toggle menu and navbar on menu button click
  menu.onclick = function () {
    if (counter === 0) {
      navbar.classList.add("party_main_menu_hide");
      menu.children[0].className = "fa fa-close";
      counter++;
    } else {
      navbar.classList.remove("party_main_menu_hide");
      menu.children[0].className = "fa fa-bars";
      counter--;
    }
  };

  // Close menu and navbar when scrolling
  window.onscroll = function () {
    navbar.classList.remove("party_main_menu_hide");
    menu.children[0].className = "fa fa-bars";
    counter = 0;
  };

  // Close menu and navbar on window resize
  window.onresize = function () {
    navbar.classList.remove("party_main_menu_hide");
    menu.children[0].className = "fa fa-bars";
    counter = 0;
  };
});
