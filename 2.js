var request = new XMLHttpRequest();
 request.onreadystatechange = function() {
   if (this.readyState == 4 && this.status == 200) {
       var data = JSON.parse(this.response);
		document.getElementById("thumb1").src=data.img_small[0];
		document.getElementById("thumb2").src=data.img_small[1];
		document.getElementById("image").src=data.img_large;
		document.getElementById("thumb1").src=data.img_small[0];
		document.getElementById("info").innerHTML="<h3>" + data.name + "<h3>" + "<p>" + data.price + "</p>";
		document.getElementById("product_details").innerHTML = "Type: " + data.prt_details.pe + "<br> Base-material" + data.Product_details.
   }
 };
 request.open("GET", "https://raw.githubusercontent.com/apurvamathur16/zizurz/master/lamps/2.json", true);
 request.send();
