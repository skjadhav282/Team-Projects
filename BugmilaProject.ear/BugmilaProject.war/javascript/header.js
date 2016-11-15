function renderTitle(){
	var w_titleDiv = document.getElementById("titleDiv");	
	var w_center = document.createElement('center');
	w_center.setAttribute('id', 'centertag');
	/*var w_title = document.createElement('img');
	w_title.setAttribute("src","Media/pic2.png");
	w_title.setAttribute("id","titleLogo");*/
	var w_h2 = document.createElement('h2');
	var w_title = document.createTextNode('DefectMila');	
	w_h2.appendChild(w_title);
	w_center.appendChild(w_h2);
	//w_center.appendChild(w_title);
	w_titleDiv.appendChild(w_center);		
}

