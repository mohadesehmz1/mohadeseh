
function toggleDarkMode() {
    var body = document.querySelector('body');
    body.classList.toggle('light-mode');
}

/*-----------------------------------------*/



document.addEventListener("DOMContentLoaded", function () {
    var sidebar = document.querySelector(".sidebar");
    var toggleButton = document.querySelector(".toggle-button");

    toggleButton.addEventListener("click", function () {
      sidebar.classList.toggle("open");
    });

    sidebar.addEventListener("click", function () {
      sidebar.classList.remove("open");
    });
  });


 