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
