let isOriginalLogo = true;

document
  .getElementById("change-logo-button")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const logo = document.getElementById("logo");

    if (isOriginalLogo) {
      logo.src = "/ODD_BIG.a24e177b.svg"; 
    } else {
      logo.src = "/Google-Logo.wine.d5a2c166.svg"; 
    }

    isOriginalLogo = !isOriginalLogo; 

  });