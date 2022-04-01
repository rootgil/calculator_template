function del() {
    const val = document.getElementById("screen").value;
    val = val.substring(0, val.length - 1);
}
let el = document.getElementById("screen");
el.addEventListener('keypress', function () {
    alert("cool");
});
