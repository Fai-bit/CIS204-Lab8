function clear(){
    document.getElementById("result").value = " ";
}
function calc(){
    var x = document.getElementById("result").value;
    var y = eval(x);
    document.getElementById("result").value = y;
}
function display(value){
    document.getElementById("result").value += value;
}