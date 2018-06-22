var textContainer = document.createElement("p");
var nativeText = document.createTextNode("Android Text");
textContainer.appendChild(nativeText);

var inputContainer = document.createElement("p");

var input = document.createElement("INPUT");

input.setAttribute("type", "text");

inputContainer.appendChild(input);

var buttonContainer = document.createElement("p");

var button = document.createElement("button");
button.innerHTML = "Set title";
button.style.width = "150px";
button.style.height = "30px";
button.addEventListener ("click", function() {
  JSI.setToolbarTitle(input.value);
});
buttonContainer.appendChild(button);
document.body.appendChild(textContainer);
document.body.appendChild(inputContainer);
document.body.appendChild(buttonContainer);
var textContainer2 = document.createElement("p");
var nativeText2 = document.createTextNode("Android menu");
textContainer2.appendChild(nativeText2);

var inputContainer2 = document.createElement("p");

var input2 = document.createElement("INPUT");

input2.setAttribute("type", "text");

inputContainer2.appendChild(input2);

var buttonContainer2 = document.createElement("p");

var button2 = document.createElement("button");
button2.innerHTML = "Add menu";
button2.style.width = "150px";
button2.style.height = "30px";
button2.addEventListener ("click", function() {
  JSI.addToolbarMenu(input2.value, "", "updateFromAndroid2");
});
buttonContainer2.appendChild(button2);
document.body.appendChild(textContainer2);
document.body.appendChild(inputContainer2);
document.body.appendChild(buttonContainer2);

var inputContainer3 = document.createElement("p");

var buttonContainer3 = document.createElement("p");

var button3 = document.createElement("button");
button3.innerHTML = "Analyze photo";
button3.style.width = "150px";
button3.style.height = "30px";
button3.addEventListener ("click", function() {
  JSI.analyzePhoto("file:/"+"/"+"/storage/0000-0000/www/IMG_3766.jpg");
});
buttonContainer3.appendChild(button3);
document.body.appendChild(buttonContainer3);

function updateFromAndroid(message){
    nativeText.nodeValue = message;
}
function updateFromAndroid2(message){
    nativeText.nodeValue = message;
}

