  red = document.getElementsByClassName("red");
  yellow = document.getElementsByClassName("yellow");
  green = document.getElementsByClassName("green");

  document.getElementsByClassName("red")[0].style.backgroundColor = "red";

  function func () {
    document.getElementsByClassName("green")[0].style.backgroundColor = "#fff";

    document.getElementsByClassName("red")[0].style.backgroundColor = "red";

    setTimeout(function () {
      document.getElementsByClassName("red")[0].style.backgroundColor = "#fff";
      document.getElementsByClassName("yellow")[0].style.backgroundColor =
        "yellow";
   

    setTimeout(function () {
      document.getElementsByClassName("yellow")[0].style.backgroundColor =
        "#fff";
      document.getElementsByClassName("green")[0].style.backgroundColor =
        "green";
      }, 2000);  
    }, 2000);
    }
    func()
  setInterval(func, 6000);

