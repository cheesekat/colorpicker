function convertValues() {

  // get values
  var red = document.getElementById("redtext").value;
  var green = document.getElementById("greentext").value;
  var blue = document.getElementById("bluetext").value;
  
  

// convert to int
  var redValue = parseInt(red);
  var greenValue = parseInt(green);
  var blueValue = parseInt(blue);
  
  var percentRed = 0.0;
  var percentGreen = 0.0;
  var percentBlue = 0.0;
  var luminanceRange = 0.0;

  // get percentages
  percentRed = (1/(redValue+greenValue+blueValue))*redValue;
  percentGreen = (1/(redValue+greenValue+blueValue))*greenValue;
  percentBlue = (1/(redValue+greenValue+blueValue))*blueValue;

  // create output message
  var outputMessage = "ρɣβL(" + percentRed + ", " + percentGreen 
  + ", " + percentBlue + ", " + luminanceRange + ")"; 


  document.getElementById("output").innerHTML = outputMessage;
  
  // make square to show color
  var c = document.getElementById("showcolor");
  var ctx = c.getContext("2d");
  ctx.beginPath();
  ctx.rect(40, 40, 150, 100);
  ctx.fillStyle = "rgb(" + redValue + "," + greenValue + "," + blueValue + ")";
  ctx.fill();





}