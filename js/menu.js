function hide_show(id)
{
	//alert("fsfasfsf");
	var x = document.getElementById(id);
	        if (x.className.indexOf("menu_show") == -1) {
	            x.className += "menu_show";
	        } else {
	            x.className = x.className.replace("menu_show", "");
	        }
}
