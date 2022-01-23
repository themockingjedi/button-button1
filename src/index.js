function button1() {
  alert("click the other button");
}

function button2() {
  var txt;
  var r = confirm("are you proud of yourself for listening to a button?");
  if (r == true) {
    alert((txt = "buttons order you around hahahaha"));
  } else {
    alert((txt = "fine, just cancel"));
  }
}

function changecolor() {
  var ddr1 = document.getElementById("div1");
  var ddr2 = document.getElementById("div2");
  ddr1.className = "duhpink";
  ddr2.className = "purpole";
}

function changetext() {
  var dd1 = document.getElementById("div1");
  var dd2 = document.getElementById("div2");
  dd1.innerHTML = "clicken";
  dd2.innerHTML = "clacken";
}
