//for getting inbox
function getJsonObj() {
//ajax call for inbox
	$.ajax({
		url : 'Controller',

		type : 'POST',

		dataType : 'json',

		data : {
			action : 'render',
		},

		success : function(a_resp) {
			renderUserInfoDiv(a_resp);
			renderList(a_resp);
		},

		error : function() {
			alert("Ajax Error: rendering Inbox");
		}

	});

}


//for Logged-in User Info div
function renderUserInfoDiv(w_obj){
	var w_titleDiv = document.getElementById("titleDiv"); 
	var w_header_div = document.getElementById("UserInfoDiv");
	var w_center = document.createElement('center');
	var w_menu1 = document.createElement('div');
	w_menu1.setAttribute('id', 'menu1');
	
	var w_button = document.createElement('input');
	w_button.setAttribute("type","Button");
	w_button.setAttribute("value","LOGOUT");
	w_button.setAttribute("onclick",'logout()');
	w_button.setAttribute("id","logout");
	
	var w_menu2 = document.createElement('div');
	w_menu2.setAttribute('id', 'menu2');
	var w_imgOnButton = document.createElement('img');
	w_imgOnButton.setAttribute("src","Media/logo3.png");	  
	w_imgOnButton.setAttribute("id","LogoButton");
	w_menu2.appendChild(w_imgOnButton);    
   
	var w_nameDiv =  document.createElement("div");
	var w_name =w_obj.config[0].Fname + ' ' +  w_obj.config[0].Lname ; 
	var w_Name = document.createTextNode( w_name);
	var w_date = document.createElement("div");
	w_date.setAttribute("id","date");
	w_date.setAttribute("onload",startTime());
	
	//for Timer
	function startTime() {
	    var today = new Date();
	    var h = today.getHours();
	    var m = today.getMinutes();
	    var s = today.getSeconds();
	    m = checkTime(m);
	    s = checkTime(s);
	    w_date.innerHTML = h + ":" + m + ":" + s;
	    var t = setTimeout(startTime, 500);
	}
	function checkTime(i) {
	    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
	    return i;
	}
	
	w_nameDiv.appendChild(w_Name);	
	w_menu1.appendChild(w_nameDiv);
	w_menu1.appendChild(w_date);
	w_menu1.appendChild(w_button);
	
	w_center.appendChild(w_menu1);
	w_header_div.appendChild(w_center);
	w_header_div.appendChild(w_menu2);
	w_titleDiv.appendChild(w_header_div);	
}

//flags for button display
var w_addBackButton = false;
var w_showDefectListButton = true;

//for rendering list
function renderList(w_obj) {	
	var w_mainDiv = document.getElementById('maindiv');
	w_mainDiv.innerHTML="";
	
	//for adding back button
	if(w_addBackButton == true){
		var w_myBackButton = document.createElement('img');
		w_myBackButton.setAttribute("src","Media/back1.png");	
		w_myBackButton.setAttribute("align","middle");
		w_myBackButton.setAttribute("id","back");
		w_mainDiv.appendChild(w_myBackButton);
	}
	
	//ajax call on click of  back button
	$("#back").click(function(){
		w_showDefectListButton = true;
		w_addBackButton = false;
		var w_header_div = document.getElementById("UserInfoDiv");
		w_header_div.innerHTML = "";
		w_mainDiv.innerHTML = "";		
		getJsonObj();
	});
	
	//buttons according to role
	if(w_obj.config[0].button != null) {
	var w_myButton = document.createElement('input');    
    w_myButton.setAttribute('id',w_obj.config[0].button);  
	w_myButton.setAttribute('type', "button");
	w_myButton.setAttribute('value', w_obj.config[0].button);
	w_mainDiv.appendChild(w_myButton);
	}	
	
	if(w_obj.config[0].AddButtonValue != null && w_showDefectListButton == true ){
		var w_myButtons = document.createElement('input');
		w_myButtons.setAttribute('id', w_obj.config[0].AddButtonValue);
		w_myButtons.setAttribute('type', "button");
		w_myButtons.setAttribute('name', "button");
		w_myButtons.setAttribute('value', w_obj.config[0].AddButtonValue);
		w_mainDiv.appendChild(w_myButtons);
	}	
	
	//filter functionality	
	var w_filterDiv = document.createElement('div');
	w_filterDiv.setAttribute("id","filterDiv");
	var w_filterOption=document.createElement('select');
	w_filterOption.setAttribute("id","filterOption");
	var w_filterSelectvalue = document.createElement('option');
	var w_optionText=document.createTextNode("--Select--");
	w_filterSelectvalue.appendChild(w_optionText);
	w_filterSelectvalue.setAttribute("value","NoValue");
	w_filterOption.appendChild(w_filterSelectvalue);
	
	var w_filterSubOption = document.createElement('select');
	w_filterSubOption.setAttribute("id","filterSubOption");
	//for subOption menu
	var w_filterSelectvalue = document.createElement('option');
	var w_optionText=document.createTextNode("--Select--");
	w_filterSelectvalue.appendChild(w_optionText);
	w_filterSelectvalue.setAttribute("value","NoValue");
	w_filterSubOption.appendChild(w_filterSelectvalue);
	w_filterDiv.appendChild(w_filterSubOption);
	w_filterDiv.appendChild(w_filterOption);
	
	var w_filter = document.createElement("img");
	w_filter.setAttribute("src","Media/filter2.png");
	w_filter.setAttribute("id","filterImage");	
	w_filter.setAttribute("align","middle");
	
	w_mainDiv.appendChild(w_filter);
	w_mainDiv.appendChild(w_filterDiv);
	
	$('#filterOption').change(function(){
		var w_choice = $('#filterOption').val();
		alert(w_choice);
		//switch for suboptions
		switch(w_choice){		
		case "filterSelectPriority"		 : 	var w_priorityBox = ["Low","Medium","High","Critical"];
									    	for(var i=0; i<w_priorityBox.length ; i++){
									    	var w_filterSelectvalue = document.createElement('option');
											var w_optionText=document.createTextNode(w_priorityBox[i]);
											w_filterSelectvalue.appendChild(w_optionText);
											w_filterSelectvalue.setAttribute("value",w_priorityBox[i]);	
											w_filterSubOption.appendChild(w_filterSelectvalue);
									    	}
									    	break;
		case "filterSelectOverallStatus" : 	var w_statusBox = ["Open","Closed"];
	    									for(var i=0; i<w_priorityBox.length ; i++){
	    									var w_filterSelectvalue = document.createElement('option');
	    									var w_optionText=document.createTextNode(w_priorityBox[i]);
	    									w_filterSelectvalue.appendChild(w_optionText);
	    									w_filterSelectvalue.setAttribute("value",w_priorityBox[i]);	
	    									w_filterSubOption.appendChild(w_filterSelectvalue);
	    									}
	    									break;
										
		}
	});
		
	//Expandable filter div	
	$("#filterImage").mouseover(function(){
		$('#filterDiv').animate({width : 'toggle'});
	});
	
	
	//search bar
	var w_searchBar = document.createElement("div");
	w_searchBar.setAttribute("id","searchBar");
	var w_search = document.createElement("input");
	w_search.setAttribute("type","search");
	w_search.setAttribute("id","searchBox");
	w_search.setAttribute("placeholder","Search...");
	w_searchBar.appendChild(w_search);
	
	var w_searchLogoDiv = document.createElement("div");
	w_searchLogoDiv.setAttribute("id","searchLogoDiv")
	var w_searchLogo = document.createElement("img");
	w_searchLogo.setAttribute("src","Media/search2.png");
	w_searchLogo.setAttribute("id","searchImage");
	w_searchLogo.setAttribute("align","middle");
	w_searchLogoDiv.appendChild(w_searchLogo);
	
	w_mainDiv.appendChild(w_searchLogoDiv);
	w_mainDiv.appendChild(w_searchBar);
	
	//Expandable search bar	
	$("#searchImage").mouseover(function(){
		$('#searchBar').animate({width : 'toggle'});
	});
	
	
	//On Typing inside the search bar
	$("#searchBox").keyup(function(){	
		// Retrieve the input field 
	    var w_searchKeyword = $('#searchBox').val().toLowerCase(); 	    
	    rowId=0;
	    if(w_searchKeyword.length > 0){
	    	 $('.ListRow>td').each(function(){	    	
	 	    	var w_text = $(this).text().toLowerCase();	    	
	 	    	if(w_text == w_searchKeyword){
	 	    		rowId= $(this).parent().attr('id');	
	 	    		$(this).css("color","red");
	 	 	    }
	 	    	if(rowId == $(this).parent().attr('id')){
	 	    		$(this).parent().show();
	 	    		$(this).parent().css("background-color","Lavender");
	 	    		
	 	    	}
	 	    	else{
	 	    		$(this).parent().hide();
	 	    	}
	 	    });	    	
	    }
	    else 
	    	renderList(w_obj);
	});
	

    //ajax call from Forms on click of Add user or Add Defect
	var w_buttonId = document.getElementById(w_obj.config[0].button);
 	$(w_buttonId).click(function() {

		$.ajax({
			url : 'Controller',

			type : 'POST',

			dataType : 'json',

			data : {
				"w_myId" : '0',
				action : 'renderForm',
			},

			success : function(a_resp) {

				renderForm(a_resp);
			},

			error : function() {
				alert("Ajax Error: rendering Form");
			}

		});

	});
 	
 	
 	//ajax call for entire defectlist
 	$('#DefectList').click(function() {

		$.ajax({
			url : 'Controller',

			type : 'POST',

			dataType : 'json',

			data : {
				action : 'renderDefecList',
			},

			success : function(a_resp) {
				w_showDefectListButton = false;
				w_addBackButton = true;
				var w_mainDiv = document.getElementById('maindiv');
				w_mainDiv.innerHTML = "";
				renderList(a_resp);
				alert("rendering DefectList..");
			},

			error : function() {
				alert("ajax error");
			}

		});

	});
 	
 	//sorting bar
 	var w_mySortingBar = document.createElement('div');
 	w_mySortingBar.setAttribute("id","sortingBar");
 	
 	var w_SortImageDiv = document.createElement('div');
 	w_SortImageDiv.setAttribute("id","sortingImageDiv");
 	w_mySortingImage = document.createElement('img');
 	w_mySortingImage.setAttribute("src","Media/t3.png");
 	w_mySortingImage.setAttribute("id","sortingImage");
 	w_mySortingImage.setAttribute("title","SORT");
 	w_mySortingImage.setAttribute("align","middle");
 	
 	w_SortImageDiv.appendChild(w_mySortingImage);
 	w_mySortingBar.appendChild(w_SortImageDiv);	
 	

 	var w_mySortingOption = document.createElement('div');
 	w_mySortingOption.setAttribute("id","sortingOption"); 	
 	w_mySortingBar.appendChild(w_mySortingOption);
 	w_mainDiv.appendChild(w_mySortingBar);
 	
	// table creation
	var w_myTable = document.createElement('table');
	w_myTable.setAttribute('id', 'a_obj_list_table');
	w_myTable.setAttribute('border', 'solid');
	w_myTable.setAttribute('cellspacing', '10');

	 if(w_obj.data[0] == null){
		 var w_msgDiv = document.createElement('div');
		 w_msgDiv.setAttribute("id","messageDiv");
		 var w_msg = document.createTextNode("Oops!You have no Defects in your inbox.");
		 w_msgDiv.appendChild(w_msg);
		 w_mainDiv.appendChild(w_msgDiv);
	 }
	
	// for headers in table
	var w_myheaderRow = document.createElement('tr');
	for ( var i = 0; i < w_obj.listConfig.length; i++) {
		var w_key = w_obj.listConfig[i].key;
		for ( var w_index in w_obj.data[0]) {
			if (w_key == w_index) {
				var w_myHeader = document.createElement('th');
				var w_Data = w_key;
				var w_headerText = document.createTextNode(w_Data);
				w_myHeader.appendChild(w_headerText);
				w_myheaderRow.appendChild(w_myHeader);
				w_myTable.appendChild(w_myheaderRow);
				
				//options for filter				
				if(w_key == "Priority" || w_key == "OverallStatus"){
					var w_filterSelectvalue = document.createElement('option');
					var w_optionText=document.createTextNode(w_key);	
					w_filterSelectvalue.setAttribute("value","filterSelect"+w_key);
					w_filterSelectvalue.appendChild(w_optionText);
					w_filterOption.appendChild(w_filterSelectvalue);
				}
				
				//switch for filter options
				switch(w_key){
				case "Priority":
				}
				var w_selectionOption = document.getElementById("sortingOption");
				if(w_key != "Description" && w_key != "LoginId" && w_key != "Name"){
					var w_sortkey = document.createElement('div');
					w_sortkey.setAttribute("class","OptionsForSort");
					w_sortkey.setAttribute("id","OptionKey:"+w_key);
					w_sortkey.setAttribute("style","border:1px solid");					
					var w_optionText = document.createTextNode(w_key);
					w_sortkey.appendChild(w_optionText);
					w_selectionOption.appendChild(w_sortkey);			
				}				
			}
		}
	}

	//for sorting according to options
	$(".OptionsForSort").click(function(e){
		var w_keyForSort = e.currentTarget.innerText;
		switch(w_keyForSort){
		
		case "DefectId" : w_obj.data.sort(function(x,y){ return x.DefectId - y.DefectId;});
						  renderList(w_obj);
						  break;
		case "Priority" : w_obj.data.sort(function(x,y){								
						  	if(x.Priority < y.Priority)return -1;								
						  	else if(x.Priority > y.Priority)return 1;
						  	return 0;
						  	});
					      renderList(w_obj);
					      break;
		case "CurrentUser" :w_obj.data.sort(function(x,y){								
								if(x.CurrentUser < y.CurrentUser)return -1;								
								else if(x.CurrentUser > y.CurrentUser)return 1;
								return 0;
								});
							renderList(w_obj);
							break;
		case "OverallStatus" :w_obj.data.sort(function(x,y){								
							   	if(x.OverallStatus < y.OverallStatus)return -1;								
							   	else if(x.OverallStatus > y.OverallStatus)return 1;
							   	return 0;
								});
							renderList(w_obj);
							break;
		case "CreatedBy" :w_obj.data.sort(function(x,y){								
								if(x.CreatedBy < y.CreatedBy)return -1;								
								else if(x.CreatedBy > y.CreatedBy)return 1;
								return 0;
								});
							renderList(w_obj);
							break;
		case "UserId" : w_obj.data.sort(function(x,y){ return x.UserId - y.UserId;});
        				renderList(w_obj);
        				break;
		case "FirstName" : w_obj.data.sort(function(x,y){								
							if(x.FirstName < y.FirstName)return -1;								
							else if(x.FirstName > y.FirstName)return 1;
							return 0;
							});
						  renderList(w_obj);
						  break;
		
		case "LastName" : w_obj.data.sort(function(x,y){								
							if(x.LastName < y.LastName)return -1;								
							else if(x.LastName > y.LastName)return 1;
							return 0;
							});
						  renderList(w_obj);
						  break;
		case "Role" : w_obj.data.sort(function(x,y){								
							if(x.Role < y.Role)return -1;								
							else if(x.Role > y.Role)return 1;
							return 0;
							});
						 renderList(w_obj);
						 break;
		
		case "CreationDate" : w_obj.data.sort(function(x,y){								
								if(x.CreationDate < y.CreationDate)return -1;								
								else if(x.CreationDate > y.CreationDate)return 1;
								return 0;
								});
							renderList(w_obj);
							break;
		case "DateIdentified" : w_obj.data.sort(function(x,y){								
									if(x.DateIdentified < y.DateIdentified)return -1;								
									else if(x.DateIdentified > y.DateIdentified)return 1;
									return 0;
									});
							renderList(w_obj);
							break;
		case "DateClosed" : w_obj.data.sort(function(x,y){								
								if(x.DateClosed < y.DateClosed)return -1;								
								else if(x.DateClosed > y.DateClosed)return 1;
								return 0;
								});
							renderList(w_obj);
							break;
		}
	});
	
	// to display data in table
	var w_count = 0;
	var w_trcount = 0;
	for ( var i = 0; i < w_obj.data.length; i++) {
		var w_myRow = document.createElement('tr');
		w_myRow.setAttribute("class","ListRow")
		w_myRow.setAttribute("id", "tr" + w_trcount);
		var w_myObj = w_obj.data[i];
		for ( var j = 0; j < w_obj.listConfig.length; j++) {
			var w_keyCheck = w_obj.listConfig[j].key;             
			for ( var w_key in w_myObj) {
                  if(w_keyCheck == w_key){
                	var w_myData = document.createElement('td');
      				w_myData.setAttribute("id", "row" + w_count);
      				var w_myVar = w_myObj[w_key];
      				var w_printData = document.createTextNode(w_myVar);

      				w_myData.appendChild(w_printData);
      				w_myRow.appendChild(w_myData);
      				w_myTable.appendChild(w_myRow);
      				w_mainDiv.appendChild(w_myTable);
                  }
			}
			w_count++;
		}
		w_trcount++;
	}

	
	// to open from defect List
	$('.ListRow').click(function(e) {
		if (e.target.nodeName == 'TH') {
			return;
		} else {		
			var w_myId = e.currentTarget.cells[0].innerText;		
		    //alert(w_myId);
			$.ajax({
				url : 'Controller',

				type : 'POST',
				
				dataType : 'json',

				data : {
					"w_myId" : w_myId,
					action : 'renderForm',
				},

				success : function(a_resp) {					
					renderForm(a_resp);
				},

				error : function() {
					alert("Ajax Error: while rendering defect list");
				}

			});
		
		}
	});

}


function remove(a_delete) {
	var w_mainDiv = document.getElementById('maindiv');
	w_mainDiv.removeChild(a_delete);

}


function display(a_valstore, a_obj) {
	var w_mainDiv = document.getElementById('maindiv');
	w_mainDiv.innerHTML = "";
	var w_myMseeage = document.createTextNode('You have selected :');
	w_mainDiv.appendChild(w_myMseeage);
	w_mainDiv.appendChild(a_valstore);
	var w_myButton = document.createElement("input");
	w_myButton.setAttribute('type', 'button');
	w_myButton.setAttribute('id', 'mybutton');
	w_myButton.setAttribute('value', 'Back');

	var w_br1 = document.createElement('br');
	var w_br2 = document.createElement('br');
	w_mainDiv.appendChild(w_br1);
	w_mainDiv.appendChild(w_br2);
	w_mainDiv.appendChild(w_myButton);

	$(w_myButton).click(function() {
		remove(w_myMseeage);
		remove(w_myButton);
		remove(a_valstore);
		renderList(a_obj);
	});

}

//ajax call for logout
function logout(){
	$.ajax({
		url: 'Controller',
		
		type : 'POST',
		
		data : {
			action:'logoutUser'
		},
		
		success : function(a_resp) {
			
			location.replace("login.html");
		},
		
		error : function() {
			alert("ajax logout error");
		}

		
	});
	
}

