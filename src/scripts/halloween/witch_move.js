function myMove() {
	var elem = document.getElementById("floatingwitch"); 
	var elem1= document.getElementById("jumbotron");
	var height=elem1.clientHeight;
	var width=elem1.clientWidth;  
	var pos = 0;
	var posright=0;
	var id = setInterval(frame, 12);
	function frame() {
		pos++;
		posright=posright+width/height; 
		if (pos >= height||posright>=width) {
			clearInterval(id);
		} else {
			elem.style.top = pos + 'px'; 
			elem.style.left = posright + 'px'; 
		}
	}
}