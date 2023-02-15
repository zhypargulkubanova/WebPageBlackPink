const butt = document.getElementById("btn2");
    const col = document.querySelector(".colo"); 
    butt.addEventListener("click", () => {
      let hexCol = generateHx();
      document.body.style.backgroundColor = hexCol;
      col.textContent = hexCol;
    });
    
    function generateHx() {
      let hexCol = "#f5f5f5";
    
      return hexCol;
    }