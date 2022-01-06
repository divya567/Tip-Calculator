function calculate() {
    var amount = document.getElementById("amount").value;
    var people = document.getElementById("people").value;
    var service = document.getElementById("service").value;
    var totaltip = (service / 100) * amount;
    var result = document.getElementById("result");
    result.innerHTML = " " + (totaltip / people).toFixed(2);
    document.getElementById("result-container").style.display = "flex";
  }
  function reset() {
    document.getElementById("amount").value = "";
    document.getElementById("people").value = "";
    document.getElementById("service").value = "";
    document.getElementById("result-container").style.display = "none";
  }