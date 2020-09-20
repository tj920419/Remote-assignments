function changeColor(newColor) {
    var elem = document.getElementById('welcome');
    elem.style.color = newColor;
    document.getElementById('welcome').innerHTML = 'Have a Good Time!';
  }


/* Set the width of the side navigation to 200px */
function openNav() {
    document.getElementById("mySidenav").style.width = "200px";
}
  
/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

function displayWindowSize(){
    // Get width and height of the window excluding scrollbars
    var w = document.documentElement.clientWidth;
    var h = document.documentElement.clientHeight;
    
    console.log(w, h)
    if (w<501) {
        document.getElementsByClassName("content-box-group-hide")[0].style.display = "block";
        document.getElementsByClassName("content-box-group-hide")[1].style.display = "block";
    }
}

function opencontentbox() {
    //document.getElementById("call-to-action-hide")[0].style.display = "flex";
    //document.getElementById("call-to-action-hide")[1].style.display = "flex";
    document.getElementsByClassName("content-box-group-hide")[0].style.display = "flex";
    document.getElementsByClassName("content-box-group-hide")[1].style.display = "flex";
    document.getElementsByClassName("content-box-2")[0].style.display = "flex";
    document.getElementsByClassName("content-box-2")[1].style.display = "flex";
    document.getElementsByClassName("content-box-2")[2].style.display = "flex";
    document.getElementsByClassName("content-box-2")[3].style.display = "flex";
    displayWindowSize();
}

window.addEventListener("resize", displayWindowSize);









// Assignment 1: Function and Array
function max(numbers){
    var MaxNumber = numbers[0]
    for (var i=1; i<numbers.length; i+=1) {
        if (numbers[i] > MaxNumber) {
            MaxNumber = numbers[i]
        }
    }

    return MaxNumber;

}
    max([1, 2, 4, 5]); // result to 5
    max([5, 2, 7, 1, 6]); // result to 7



// Assignment 2: Object--------------------------------------------------------------------------------
function calculate(args){
    let result;
    if(args.op==="+"){
        result=args.n1+args.n2;
    }else if(args.op==="-"){
        result=args.n1-args.n2;
    }else{
        result="Not supported";
    }
    return result;
}
//Anwser-1
calculate({op:"+", n1:3, n2:4});

//Anwser-2
class args{
    constructor (op, n1, n2){
        this.op = op;
        this.n1 = n1;
        this.n2 = n2;
    }
  }
  
  var args1 = new args("+",3,4);

  calculate (args1);





// Assignment 3: Function, Array, and Object------------------------------------------------------------
function avg(data){

    let priceavg = 0;

    for (var i = 0; i < data.size; i += 1){
        priceavg += data.products[i].price;
    }
    return priceavg/data.size;
}



avg({
    size:3,
    products:[
        {
            name:"Product 1",
            price:100
        },
        
        {
            name:"Product 2",
            price:700
        },
        
        {
            name:"Product 3",
            price:250
        }
    ]
}); // show the average price of all products