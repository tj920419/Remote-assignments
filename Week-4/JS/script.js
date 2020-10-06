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
  var array = JSON.parse(data);  
  var el=document.querySelector('.smartphone'); // 選取 ul 的這個 class
  var ul=document.querySelector('.smartphone2'); // 選取 ul 的這個 class
  var dataLen=array.length; //資料長度
  for(var i=0; i<dataLen;i++){
    var str=document.createElement('li'); // 新增元素 li
    str.textContent="產品名稱：" + array[i].name + 
    "；價格：" + array[i].price+ "；備註：" +array[i].description;// li 內的字串要顯示老師的名字
    el.appendChild(str); // 增加子節點為 str 的內容
    
    /*
    var str3=document.createElement('li'); // 新增元素 li
    str3.textContent=array[i].name+ " -- " + array[i].price+ " --  " +array[i].description;// li 內的字串要顯示老師的名字
    el.appendChild(str3); // 增加子節點為 str 的內容

    var str2=document.createElement('li'); // 新增元素 li
    str2.textContent=array[i].name+ " " + array[i].price+ " " +array[i].description;// li 內的字串要顯示老師的名字
    ul.appendChild(str2); // 增加子節點為 str 的內容
    */
  }


  console.log(array.length);
// your code here.
//  document.createElement()  and a  ppendChild()  are preferred. No  innerHTML  or // something alike
}
ajax("https://cwpeng.github.io/live-records-samples/data/products.json", 	function(response){
		render(response);
	}
);  // you should get product information in JSON format and render data in the page


var longString = 'This is a very long string which needs \
to wrap across multiple lines because \
otherwise my code is unreadable.';

console.log(longString)