const button = document.getElementById("btn");
    const color = document.querySelector(".color"); 
    button.addEventListener("click", () => {
      let hexColor = generateHex();
      document.body.style.backgroundColor = hexColor;
      color.textContent = hexColor;
    });
    
    function generateHex() {
      let hexColor = "#909090";
    
      return hexColor;
    }
    