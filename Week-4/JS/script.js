//Assignment 1: Callback Function
function delayedResult(n1, n2, delayTime, callback) {
  setTimeout(function(){ 
  	callback(n1+n2)
  }, delayTime);
}

delayedResult(4, 5, 3000, function(result){
    console.log(result);
}); // 9 (4+5) will be shown in the console after 3 seconds

delayedResult(-5, 10, 2000, function(result){
    window.alert(result);
}); // 5 (-5+10) will be shown in an alert dialog after 2 seconds



//Assignment 2: Callback Function and Advanced HTML DOM
function ajax(src, callback){
	var httpRequest;
    httpRequest = new XMLHttpRequest();
	if (!httpRequest) {
      alert('Giving up 🙁 Cannot create an XMLHTTP instance');
      return false;
    }
    httpRequest.onreadystatechange = alertContents;
    httpRequest.open('GET', src);
    httpRequest.send();
    function alertContents() {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) {
        callback(httpRequest.responseText)
      } else {
        alert('There was a problem with the request.');
      }
    }
	}
 }
function render(data){
	alert(data)
// your code here.
//  document.createElement()  and a  ppendChild()  are preferred. No  innerHTML  or // something alike
}
ajax("https://cwpeng.github.io/live-records-samples/data/products.json", 	function(response){
		render(response);
	}
);  // you should get product information in JSON format and render data in the page