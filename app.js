const amazonMoreFunction = () => {
    const dots = document.getElementById("dots");
    const moreText = document.getElementById("more");
    const btnText = document.getElementById("moreBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "More...";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  };

  
  const amazonMoreCenterFunction = () => {
    const dots = document.getElementById("dots-center");
    const moreText = document.getElementById("more-center");
    const btnText = document.getElementById("moreBtn-center");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "More...";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  };

  const amazonMoreLastFunction = () => {
    const dots = document.getElementById("dots-last");
    const moreText = document.getElementById("more-last");
    const btnText = document.getElementById("moreBtn-last");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "More...";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  };

  
  