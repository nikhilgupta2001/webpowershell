var a = 1;

  function operate() {

    if (a % 2 == 0) {
      close();
    } else {
      open();
    }
  }

  function open() {
    document.getElementById("sidenav").style.width = "250px";
    document.getElementById("btn").style.left = "255px";
    a++
  }

  function close() {
    document.getElementById("sidenav").style.width = "0px";
    document.getElementById("btn").style.left = "5px";
    document.getElementById("sidenav").style.border = "none";
    a++
  }
