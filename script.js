function checkLogin() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (email === "admin@root.cmd" && password === "1234" && email != "" && password != "") {
      window.open("home.html");
    } else {  
      alert("Incorrect login credentials or empty fields. Please try again.");
    }
  }
  document.getElementById("publish").addEventListener("click", function() {
    var firstDiv = document.querySelector(".first");
    var newDiv = document.createElement("div");
    newDiv.classList.add("firstpost");
    newDiv.style.marginTop = "40px";
    newDiv.style.width = "100%";
    newDiv.style.height = "25%";
    newDiv.style.boxShadow = "3px 3px 10px 3px #dddddd";
    newDiv.style.borderRadius = "20px";
    newDiv.style.padding = "20px";
  
    var infoDiv = document.createElement("div");
    infoDiv.classList.add("info", "d-flex");
  
    var img = document.createElement("img");
    img.src = "gamer.png";
    img.alt = "";
  
    var span = document.createElement("span");
    span.classList.add("ps-3");
    span.innerText = "hamza ghazal";
  
    infoDiv.appendChild(img);
    infoDiv.appendChild(span);
    newDiv.appendChild(infoDiv);
  
    var inputText = document.querySelector(".getq input").value;
    var qDiv = document.createElement("div");
    qDiv.classList.add("q", "pt-3");
    qDiv.innerText = inputText;
    newDiv.appendChild(qDiv);
  
    firstDiv.appendChild(newDiv);
  
    // Save the post to localStorage
    var posts = JSON.parse(localStorage.getItem("p")) || [];
    posts.push({
      text: inputText,
      author: "hamza ghazal"
    });
    localStorage.setItem("p", JSON.stringify(posts));
  });
  window.addEventListener("load", function() {
    var firstDiv = document.querySelector(".first");
  
    // Retrieve the saved posts from localStorage
    var posts = JSON.parse(localStorage.getItem("p")) || [];
  
    for (var i = 0; i < posts.length; i++) {
      var post = posts[i];
      var newDiv = document.createElement("div");
      newDiv.classList.add("firstpost");
      newDiv.style.marginTop = "40px";
      newDiv.style.width = "100%";
      newDiv.style.height = "25%";
      newDiv.style.boxShadow = "3px 3px 10px 3px #dddddd";
      newDiv.style.borderRadius = "20px";
      newDiv.style.padding = "20px";
  
      var infoDiv = document.createElement("div");
      infoDiv.classList.add("info", "d-flex");
  
      var img = document.createElement("img");
      img.src = "gamer.png";
      img.alt = "";
  
      var span = document.createElement("span");
      span.classList.add("ps-3");
      span.innerText = post.author;
  
      infoDiv.appendChild(img);
      infoDiv.appendChild(span);
      newDiv.appendChild(infoDiv);
  
      var qDiv = document.createElement("div");
      qDiv.classList.add("q", "pt-3");
      qDiv.innerText = post.text;
      newDiv.appendChild(qDiv);
  
      firstDiv.appendChild(newDiv);
    }
  });
    
