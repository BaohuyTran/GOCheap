function openSidebar() {
  document.getElementsByClassName("sidebar")[0].style.width = "300px";
};

function closeSidebar() {
  document.getElementsByClassName("sidebar")[0].style.width = 0;
}

window.addEventListener('scroll', function () {
  var header = document.getElementsByClassName('header');
  var headerButtons = document.getElementsByClassName('header-button');
  var menuButton = this.document.getElementsByClassName('header-menu-button');
  if (window.scrollY > 0) {
    header[0].style.backgroundColor = "rgb(220, 220, 220)";
    for (var i = 0; i < headerButtons.length; i++) {
      var button = headerButtons[i];
      button.className = "header-button header-button-scroll";
      menuButton[0].className = "header-menu-button header-button-scroll";
    }
  } else {
    header[0].style.backgroundColor = "rgb(0, 0, 0, 0.7)";
    for (var i = 0; i < headerButtons.length; i++) {
      var button = headerButtons[i];
      button.className = "header-button header-button-top";
      menuButton[0].className = "header-menu-button header-button-top";
    }
  }
});