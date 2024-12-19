function myFunction() {
    document.getElementById("demo").innerHTML="Paragraph Changed.";
}
function myFunction2() {
    const element = document.getElementsByTagName("br");
 
    document.getElementById("demo").innerHTML = `The text in first <br> tag (index 0) is: ${element[0].innerHTML}`;
}