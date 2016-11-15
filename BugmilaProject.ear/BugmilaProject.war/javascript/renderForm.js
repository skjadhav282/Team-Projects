var w_uniqueConstraintFlag = false;

//for rendering Form
function renderForm(a_obj) {
	var w_center = document.createElement("center");
	var w_mainDiv = document.getElementById('maindiv');
	w_mainDiv.innerHTML = "";
	var w_form = document.createElement("FORM");
	w_form.setAttribute("Action", "#");
	w_form.setAttribute("id", "Form");
	w_form.setAttribute("name", "Form");
	w_form.setAttribute("Method", "post");

	var w_br = document.createElement('BR');
	
	//Span for error message
	var w_errorspancenter = document.createElement("center");
	var w_errorspan = document.createElement("span");
	w_errorspan.setAttribute("id", "errorspan");
	w_errorspancenter.appendChild(w_errorspan);
	w_mainDiv.appendChild(w_errorspancenter);

	var w_table = document.createElement("TABLE");
	w_table.setAttribute("border", "1");
	w_table.setAttribute("id", "formtable");

	// for title of Form
	for ( var i = 0; i < a_obj.length; i++) {
		if (a_obj[i].ControlType == "FormName") {
			var w_myRow = document.createElement("TR");
			var w_myData = document.createElement("TD");
			w_myData.setAttribute("id", "FormLabel")
			w_myData.setAttribute("colspan", "2");
			var w_label = document.createElement('LABEL');
			var w_labeltext = document.createTextNode(a_obj[i].name);
			w_label.appendChild(w_labeltext);
			w_myData.appendChild(w_label);
			w_myRow.appendChild(w_myData);
			w_table.appendChild(w_myRow);
		}
	}

	// for form elements
	for ( var i = 0; i < a_obj.length; i++) {
		
		//for textbox
		if (a_obj[i].ControlType == "Text") {
			var w_myRow = document.createElement("TR");
			var w_myData = document.createElement("TD");
			var w_label = document.createElement('LABEL');
			var w_labeltext = document.createTextNode(a_obj[i].label);
			w_label.appendChild(w_labeltext);
			w_myData.appendChild(w_label);
			w_myRow.appendChild(w_myData);
			var w_myData = document.createElement("TD");
			var w_formElem = document.createElement('INPUT');
			w_formElem.setAttribute("type", "text");
			w_formElem.setAttribute("id", a_obj[i].id);
			w_formElem.setAttribute("name", a_obj[i].name);

			if (a_obj[i].readonly == true) {
				w_formElem.readOnly = true;
			}
			if (a_obj[i].innerValue != "") {
				w_formElem.setAttribute("value", a_obj[i].innerValue);
			}
			if (a_obj[i].name == "CreatedBy") {
				w_formElem.setAttribute("value", a_obj[i].innerValue);
			}
			
			w_myData.appendChild(w_formElem);
			w_myRow.appendChild(w_myData);
			w_table.appendChild(w_myRow);
		}

		//for loginId
		if (a_obj[i].ControlType == "Email") {
			var w_myRow = document.createElement("TR");
			var w_myData = document.createElement("TD");
			var w_label = document.createElement('LABEL');
			var w_labeltext = document.createTextNode(a_obj[i].label);
			w_label.appendChild(w_labeltext);
			w_myData.appendChild(w_label);
			w_myRow.appendChild(w_myData);
			var w_myData = document.createElement("TD");
			var w_formElem = document.createElement('INPUT');
			w_formElem.setAttribute("type", "Email");
			w_formElem.setAttribute("id", a_obj[i].id);
			w_formElem.setAttribute("name", a_obj[i].name);
			if (a_obj[i].readonly == true) {
				w_formElem.readOnly = true;
			}
			if (a_obj[i].innerValue != "") {
				w_formElem.setAttribute("value", a_obj[i].innerValue);
			}

			w_myData.appendChild(w_formElem);
			w_myRow.appendChild(w_myData);
			w_table.appendChild(w_myRow);

		}

		//for password
		if (a_obj[i].ControlType == "password") {
			var w_myRow = document.createElement("TR");
			var w_myData = document.createElement("TD");
			var w_label = document.createElement('LABEL');
			var w_labeltext = document.createTextNode(a_obj[i].label);
			w_label.appendChild(w_labeltext);
			w_myData.appendChild(w_label);
			w_myRow.appendChild(w_myData);
			var w_myData = document.createElement("TD");
			var w_formElem = document.createElement('INPUT');
			w_formElem.setAttribute("type", "password");
			w_formElem.setAttribute("id", "fPassword");
			w_formElem.setAttribute("name", a_obj[i].name);
			if (a_obj[i].readonly == true) {
				w_formElem.readOnly = true;
			}
			if (a_obj[i].innerValue != "") {
				w_formElem.setAttribute("value", a_obj[i].innerValue);
			}
			
			w_myData.appendChild(w_formElem);
			w_myRow.appendChild(w_myData);
			w_table.appendChild(w_myRow);
		}

		//for text area
		if (a_obj[i].ControlType == "TextArea") {
			var w_myRow = document.createElement("TR");
			w_myRow.setAttribute("class", "textareaRow")
			var w_myData = document.createElement("TD");
			var w_label = document.createElement('LABEL');
			var w_labeltext = document.createTextNode(a_obj[i].label);
			w_label.appendChild(w_labeltext);
			w_myData.appendChild(w_label);
			w_myRow.appendChild(w_myData);
			var w_myData = document.createElement("TD");
			var w_formElem = document.createElement('textarea');
			w_formElem.setAttribute("rows", "4");
			w_formElem.setAttribute("cols", "50");
			w_formElem.setAttribute("id", a_obj[i].id);
			w_formElem.setAttribute("name", a_obj[i].name);

			w_myData.appendChild(w_formElem);
			w_myRow.appendChild(w_myData);
			w_table.appendChild(w_myRow);

			if (a_obj[i].readonly == true) {
				w_formElem.readOnly = true;
			}
			if (a_obj[i].innerValue != "") {
				w_formElem.value = a_obj[i].innerValue;
			}

		}

		//for Date Field
		if (a_obj[i].ControlType == "Date") {
			var w_myRow = document.createElement("TR");
			var w_myData = document.createElement("TD");
			var w_label = document.createElement('LABEL');
			var w_labeltext = document.createTextNode(a_obj[i].label);
			w_label.appendChild(w_labeltext);
			w_myData.appendChild(w_label);
			w_myRow.appendChild(w_myData);
			var w_myData = document.createElement("TD");
			var w_formElem = document.createElement('INPUT');
			w_formElem.setAttribute("type", "Date");
			w_formElem.setAttribute("id", a_obj[i].id);
			w_formElem.setAttribute("name", a_obj[i].name);

			if (a_obj[i].readonly == true) {
				w_formElem.readOnly = true;
			}
			if (a_obj[i].innerValue != "") {
				w_formElem.setAttribute("value", a_obj[i].innerValue);
			}
			w_myData.appendChild(w_formElem);
			w_myRow.appendChild(w_myData);
			w_table.appendChild(w_myRow);

		}

		//for Drop down
		if (a_obj[i].ControlType == "Select") {
			var w_myRow = document.createElement("TR");
			var w_myData = document.createElement("TD");
			var w_label = document.createElement('LABEL');
			var w_labeltext = document.createTextNode(a_obj[i].label);
			w_label.appendChild(w_labeltext);
			w_myData.appendChild(w_label);
			w_myRow.appendChild(w_myData);
			var w_myData = document.createElement("TD");
			var w_formElem = document.createElement('Select');
			w_formElem.setAttribute("id", a_obj[i].id);
			w_formElem.setAttribute("name", a_obj[i].name);

			if (Array.isArray(a_obj[i].devList)) {
				var w_demoId = a_obj[i].devList[0]["UserId"];
				var w_list = a_obj[i].devList;
				var w_values1 ="";
				var w_names = "";
				for ( var j = 0; j < w_list.length; j++) {
					var w_userId = w_list[j]["UserId"];
					var w_values1 = w_values1.concat(w_userId+"|");
					var w_name = w_list[j]["FirstName"] + ' '+ w_list[j]["LastName"];
					if(j == 0)
						var w_names = w_names.concat(w_name);
					else
						var w_names = w_names.concat("|"+w_name);
				}

			}

			if (a_obj[i].myProperty == "developerList") {
				var w_nameList = w_names;
				var w_idList = w_values1;
				
				var w_optionArray = w_nameList.split("|");
				var w_idArr = w_idList.split("|");
				
				for ( var w_key in w_optionArray) {
					var w_option = document.createElement('OPTION');
					if (w_optionArray[w_key].indexOf(' ') >= 0)
						w_option.setAttribute("value", w_idArr[w_key]);
						var w_opText = document.createTextNode(w_optionArray[w_key]);
						if (a_obj[i].innerValue != "" && w_idArr[w_key] == a_obj[i].innerValue) {
							w_option.selected = true;
						}
					
					w_option.appendChild(w_opText);
					w_formElem.appendChild(w_option);
				}

			}

			else {
				var w_values = a_obj[i].values;
				var w_optionArray = w_values.split("|");
				for ( var w_key in w_optionArray) {
					var w_option = document.createElement('OPTION');
					var w_opText = document
							.createTextNode(w_optionArray[w_key]);
					if (a_obj[i].name == "CreatedBy"|| a_obj[i].name == "CurrentUser")
						w_option.setAttribute("value", a_obj[i].uid);
					else
						w_option.setAttribute("value", w_optionArray[w_key]);

					if (a_obj[i].innerValue != "" && w_optionArray[w_key] == a_obj[i].innerValue) {

						w_option.selected = true;
					}

					w_option.appendChild(w_opText);
					w_formElem.appendChild(w_option);

				}

			}

		
			if (a_obj[i].name == 'OverallStatus' && a_obj[i].innerValue != "") {
				$(w_formElem).change(function() {
					//alert("dateChangeFunction");
					if (this.value == 'Closed') {
						var w_dateElem = document.getElementById('DateClosed');
						w_dateElem.value = generateTodaysDate();
					    $(w_dateElem).attr('disabled',true);
						var w_element = document.getElementById('Resolved');
						w_element.cheked = true;
					}

					if (this.value == 'Open') {
						var w_dateElem = document.getElementById('DateClosed');
						$(w_dateElem).attr('disabled', false);
						var w_element = document.getElementById('Resolved');
						w_element.cheked = false;
					}
				});
			}
			
			w_myData.appendChild(w_formElem);
			w_myRow.appendChild(w_myData);
			w_table.appendChild(w_myRow);
		}

		//for radio buttons
		if (a_obj[i].ControlType == "Radio") {
			var w_myRow = document.createElement("TR");
			var w_myData = document.createElement("TD");
			var w_label = document.createElement('LABEL');
			var w_labeltext = document.createTextNode(a_obj[i].label);
			w_label.appendChild(w_labeltext);
			w_myData.appendChild(w_label);
			w_myRow.appendChild(w_myData);

			var w_myData = document.createElement("TD");
			var w_values = a_obj[i].values;
			var w_optionArray = w_values.split("|");

			for ( var w_key in w_optionArray) {
				var w_formElem = document.createElement('INPUT');
				w_formElem.setAttribute("type", "radio");
				w_formElem.setAttribute("id", a_obj[i].id + "_"+ w_optionArray[w_key]);
				w_formElem.setAttribute("name", a_obj[i].name);
				var w_radioValue = w_optionArray[w_key];
				w_formElem.setAttribute("value", w_radioValue);
				var w_text = document.createTextNode(w_radioValue);
				w_myData.appendChild(w_text);

				w_myData.appendChild(w_formElem);
				
				//on change of ShowStopper set priority Critical
				$(w_formElem).change(function() {
					if (this.value == 'Y') {
						var w_element = document.getElementById('Priority');
						w_element.value = "Critical";
						$(w_element).attr('disabled', true);
					}

					if (this.value == 'N') {
						var w_element = document.getElementById('Priority');
						$(w_element).attr('disabled', false);
					}

				});

			}
			
			w_myRow.appendChild(w_myData);
			w_table.appendChild(w_myRow);

			if (a_obj[i].readonly == true) {
				w_formElem.readOnly = true;
			}
			if (a_obj[i].innerValue != "") {
				var w_elem = document.getElementById("ShowStopper" + "_"+ a_obj[i].innerValue);
				w_elem.checked = true;
			}

		}

		//for checkbox
		if (a_obj[i].ControlType == "CheckBox") {
			var w_myRow = document.createElement("TR");
			var w_myData = document.createElement("TD");
			var w_label = document.createElement('LABEL');
			var w_labeltext = document.createTextNode(a_obj[i].label);
			w_label.appendChild(w_labeltext);
			w_myData.appendChild(w_label);
			w_myRow.appendChild(w_myData);

			var w_myData = document.createElement("TD");
			var w_values = a_obj[i].values;
			var w_optionArray = w_values.split("|");

			for ( var w_key in w_optionArray) {

				var w_formElem = document.createElement('INPUT');
				w_formElem.setAttribute("type", "checkbox");
				w_formElem.setAttribute("id", a_obj[i].id);
				w_formElem.setAttribute("name", a_obj[i].name);
				var w_checkValue = w_optionArray[w_key];
				w_formElem.setAttribute("value", w_checkValue);
				var w_text = document.createTextNode(w_checkValue);
				w_myData.appendChild(w_text);

				w_myData.appendChild(w_formElem);
				
				//on change of status to closed to get sysdate
				$(w_formElem).change(function(){
						if (this.checked == true) {
								var w_element = document.getElementById('OverallStatus');
								w_element.value = "Closed";
								$(w_element).attr('disabled', true);
								var w_dateElem = document.getElementById('DateClosed');
								w_dateElem.value = generateTodaysDate();
								$(w_dateElem).attr('disabled', true);								
						}
						if (this.checked == false) {
								var w_dateElem = document.getElementById('DateClosed');
								w_dateElem.value = "";
								$(w_dateElem).attr('disabled', false);
								w_dateElem.readOnly = true;
								var w_element = document.getElementById('OverallStatus');
								$(w_element).attr('disabled', false);
								
						}
				});
			}
			
			w_myRow.appendChild(w_myData);
			w_table.appendChild(w_myRow);

		}

		//for submit button
		if (a_obj[i].ControlType == "Submit") {
			var w_myRow = document.createElement("TR");
			var w_myData = document.createElement("TD");
			var w_formElem = document.createElement('INPUT');
			w_formElem.setAttribute("type", "button");
			w_formElem.setAttribute("value", a_obj[i].value);
			w_formElem.setAttribute("id", a_obj[i].id);
			w_formElem.setAttribute("name", a_obj[i].name);
			w_myData.appendChild(w_formElem);
			w_myRow.appendChild(w_myData);
			var w_idForUpdate = a_obj[i].IdForUpdate;

			if (a_obj[i].AddButton == "yes") {
				var w_myData = document.createElement("TD");
				var w_formElem = document.createElement('INPUT');
				w_formElem.setAttribute("type", "button");
				w_formElem.setAttribute("value", a_obj[i].AddButtonValue);
				w_formElem.setAttribute("id", "return");
				w_formElem.setAttribute("name", "return");
				w_myData.appendChild(w_formElem);
				w_myRow.appendChild(w_myData);

			}

			w_table.appendChild(w_myRow);

			
			// for inserting data into database on form save
			$("#" + a_obj[i].id).click(function() {
				var myFormDataJson = createJson();

				// value for next call after submit open in edit mode
				var w_idForEditModeOpen;
				if (myFormDataJson.hasOwnProperty("UserId"))
					w_idForEditModeOpen = myFormDataJson.UserId;
				if (myFormDataJson.hasOwnProperty("DefectId"))
					w_idForEditModeOpen = myFormDataJson.DefectId;

				//ajax for insert or update data in dB
				$.ajax({
					url : 'Controller',

					type : 'POST',

					data : {
						"idForUpdate" : w_idForUpdate,
						"jsonObject" : JSON.stringify(myFormDataJson),
						action : 'insert',
					},

					success : function(a_resp) {
						if(a_resp == "fail"){
							alert("Failure");
							w_uniqueConstraintFlag = true;
						}						
						openFormInEditModeOnSave(w_idForEditModeOpen);

					},

					error : function() {
						alert("Ajax error: insertion Failed");
					}

				});

			});

			//for returning from FORM to inbox
			$("#return").click(function() {
				$.ajax({
					url : 'Controller',

					type : 'POST',

					dataType : 'json',

					data : {
						action : 'render',
					},

					success : function(a_resp) {
						w_showDefectListButton = true;
						w_addBackButton = false;
						var w_mainDiv = document.getElementById('maindiv');
						w_mainDiv.innerHTML = "";
						renderList(a_resp);
					},

					error : function() {
						alert("Ajax Error: onclick of return");
					}

				});

			});

		}

		//for developer mode to keep only resolved ,resolution, current user editable
		if(a_obj[i].SpecialMode == "develop" && a_obj[i].StatusOfDefect != "Closed" ){			
			for ( var i = 0; i < a_obj.length; i++){
				 if(a_obj[i].id == "Resolution" || a_obj[i].id == "CurrentUser" || a_obj[i].id == "Resolved" || a_obj[i].id == "SubmitDefect" || a_obj[i].id == "return")
				continue;				  
				  $('#'+a_obj[i].id).attr('disabled',true);
				  $('#ShowStopper_Y').attr('disabled',true);
				  $('#ShowStopper_N').attr('disabled',true);
				}	
			
		}
		
		//for opening closed defects in noneditable form
		if (a_obj[i].StatusOfDefect == "Closed") {
			//alert(a_obj[i].StatusOfDefect);
			$('#Form').find('input[type="text"],input[type="radio"],input[type="checkbox"],input[type="Date"],textarea,select')
					.attr('disabled', true);
			$('#SubmitDefect').attr('disabled', true);
			var w_elem = document.getElementById('SubmitDefect');
			w_elem.setAttribute("style","cursor:not-allowed");

		}	

		w_form.appendChild(w_table);
		w_mainDiv.appendChild(w_form);
		
		if(w_uniqueConstraintFlag == true)
			var w_testUniqueConstraint = checkUniqueConstraint();
	}
}


// for creating Json for taking data from Form
function createJson() {

	var w_form = document.getElementsByTagName('form');
	var w_formelem = w_form[0];
	var w_temp;
	var w_element = {};
	var w_flag = false;

	var w_tag = w_formelem.getElementsByTagName('input');

	for ( var int = 0; int < w_tag.length; int++) {
		w_temp = w_tag[int];
		if (w_temp.value != "" || w_temp.type == 'Date' ) {
			
			//validation for html tags
		   var w_checkForHtml = validationForHtmlTags(w_temp.id);
		   if(w_checkForHtml == false)
			   break;

			// validation for login Id
			if (w_temp.id == 'LoginId'){
				var w_check = validateUserLoginId();
			}			
			if (w_check == false)
				break;
			
			// validation for Password
			if (w_temp.id == 'fPassword')
				var w_check = validatePasswordPolicy();
			if (w_check == false)
				break;

			if (w_temp.type == 'checkbox' && w_temp.checked == false)
				w_element[w_temp.name] = 'N';
			else if (w_temp.type == 'radio' && w_temp.checked == false)
				continue;
			else
				w_element[w_temp.name] = w_temp.value;
			
			if (w_temp.type == 'radio' && w_temp.value == 'Y'
					&& w_temp.checked == true) {
				w_flag = true;
			}

		} else {
			if(w_temp.id == 'DateClosed'){
				w_element[w_temp.name] = 'not Present';
				
			}
			else{
				
				var w_element = document.getElementById(w_temp.id);
				var w_errorspan = document.getElementById("errorspan");
				w_errorspan.innerHTML = "Please Enter The Value";
				w_element.setAttribute("placeholder", "Please Enter The Value");
				w_element.focus();
				break;
				
			}
			

		}

	}

	var w_tag = w_formelem.getElementsByTagName('select');
	for ( var int = 0; int < w_tag.length; int++) {
		w_temp = w_tag[int];
		if (w_temp.value != "") {

			w_element[w_temp.name] = w_temp.value;
			if (w_temp.name == 'Priority' && w_flag == true)
				w_element[w_temp.name] = 'Critical';

		}

		else {
			
			var w_element = document.getElementById(w_temp.id);
			var w_errorspan = document.getElementById("errorspan");
			w_errorspan.innerHTML = "Please Enter The Value";
			w_element.focus();

		}

	}

	var w_tag = w_formelem.getElementsByTagName('textArea');
	for ( var int = 0; int < w_tag.length; int++) {
		w_temp = w_tag[int];
		if (w_temp.value != "") {
			w_element[w_temp.name] = w_temp.value;
		} else {
			var w_element = document.getElementById(w_temp.id);
			var w_errorspan = document.getElementById("errorspan");
			w_errorspan.innerHTML = "Please Enter The Value";
			w_element.focus();

		}
	}

	return w_element;
}

// to open form in Edit MOde
function openFormInEditModeOnSave(w_idForEditModeOpen) {

	$.ajax({
		url : 'Controller',

		type : 'POST',

		dataType : 'json',

		data : {
			"w_myId" : w_idForEditModeOpen,
			action : 'renderForm',
		},

		success : function(a_resp) {

			renderForm(a_resp);
		},

		error : function() {
			alert("Ajax Error: while opening in Edit Mode");
		}

	});

}

//for todays date for after changing status to closed
function generateTodaysDate() {
	var w_today = new Date();
	var w_dd = w_today.getDate();
	var w_mm = w_today.getMonth() + 1; // January is 0!

	var w_yyyy = w_today.getFullYear();
	if (w_dd < 10) {
		w_dd = '0' + w_dd
	}
	if (w_mm < 10) {
		w_mm = '0' + w_mm
	}
	var w_today = w_yyyy + '-' + w_mm + '-' + w_dd;
	//alert(w_today);
	return w_today;

}

