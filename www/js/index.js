document.addEventListener('deviceready', onDeviceReady, false); //creates an eventlistener for deviceready which comes from concorde code called from html 
 
//var frog = 2; assumes the type as it doesn't define strings, ints etc separately.


function onDeviceReady()  {
       alert("Device Ready"); //Alert = printf on javascript
    frog = device.platform; //creates a variable on it's own assuming you need one, but exists outside function
    var cat = device.model; //creates a variable within the function
    alert(frog + 3); //prints everything in string as it assumes, one being a string, then both have to be
    alert (cat);
    
    
}
