function items(){

var request = new XMLHttpRequest();
  request.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var data = JSON.parse(this.response);
		document.getElementById("des_1").innerHTML = data[0].name + "<br> Rs " + data[0].price;
		document.getElementById("des_2").innerHTML = data[1].name + "<br> Rs " + data[1].price;
		document.getElementById("des_3").innerHTML = data[2].name + "<br> Rs "  + data[2].price;
		document.getElementById("des_4").innerHTML = data[3].name + "<br> Rs " + data[3].price;
		document.getElementById("des_5").innerHTML = data[4].name + "<br> Rs " + data[4].price;
		document.getElementById("des_6").innerHTML = data[5].name + "<br> Rs " + data[5].price;
		document.getElementById("image1").src = data[0].img;
		document.getElementById("image2").src = data[1].img;
		document.getElementById("image3").src = data[2].img;
		document.getElementById("image4").src = data[3].img;
		document.getElementById("image5").src = data[4].img;
		document.getElementById("image6").src = data[5].img;
		
    }
  };
  request.open("GET", "https://raw.githubusercontent.com/apurvamathur16/zizurz/master/lamps/lamps.json", true);
  request.send();
}


function subtotal_func(){
	 
	 var one = parseInt(document.getElementById("one").value);
	 var two = parseInt(document.getElementById("two").value);
	 var three = parseInt(document.getElementById("three").value);
	 var four = parseInt(document.getElementById("four").value);
	 var five = parseInt(document.getElementById("five").value);
	 var six = parseInt(document.getElementById("six").value);
	 var subtotal = (one*3333 + two*2000 + three*4000 + four*5000 + five*4000 + six*7000);
	 alert("total payable amount is " + subtotal);
	 	 
	  
	 
 }	 	 
 
 var count =0;
  function fav(name) {
	
    if (count==0) {
     name.style.backgroundColor = "#FF0000";
        count=1;
    }
    else{
        name.style.backgroundColor = "#F0F0F0";
        count=0;
    }
}


function mapping(value){
	sessionStorage.item_no = value;
		
}

function details_of_items(){
	var request = new XMLHttpRequest();
	request.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var data = JSON.parse(this.response);
		var item = parseInt(sessionStorage.item_no);
		document.getElementById("thumb1").src=data[item].img_small[0];
		document.getElementById("thumb2").src=data[item].img_small[1];
		document.getElementById("image").src=data[item].img_large;
		document.getElementById("info").innerHTML= "<h3>" + data[item].name + "</h3>" + "<p>Rs " + data[item].price + "</p><br> <h3>Product Details</h3> Type:" + data[item].product_details.type + "<br> Base Material: "  + data[item].product_details.base_material + "<br> Base Colour: " + data[item].product_details.base_colour + "</br></br> <h3>Material & Care</h3>" + data[item].material_care[0] + "<br>" + data[item].material_care[1] + " ," + data[item].material_care[2];
		
}
  };
  request.open("GET", "https://raw.githubusercontent.com/apurvamathur16/zizurz/master/lamps/details.json", true);
  request.send();
}

function myfn1(){
	var request = new XMLHttpRequest();
	request.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var data = JSON.parse(this.response);
		var item = parseInt(sessionStorage.item_no);
		document.getElementById("image").src=data[item].img_small[1];
		
		
}
  };
  request.open("GET", "https://raw.githubusercontent.com/apurvamathur16/zizurz/master/lamps/details.json", true);
  request.send();
}


function myfn2(){
	var request = new XMLHttpRequest();
	request.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var data = JSON.parse(this.response);
		var item = parseInt(sessionStorage.item_no);
		document.getElementById("image").src=data[item].img_small[0];
}
	};
	
	request.open("GET", "https://raw.githubusercontent.com/apurvamathur16/zizurz/master/lamps/details.json", true);
  request.send();
};
