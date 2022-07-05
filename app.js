window.onload = function () {

	let list, jobForm, addItemBtn;

	list = document.getElementById('jobList');          // set list, form and button element variables
	jobForm = document.getElementById('newJobForm');
	addItemBtn = document.getElementById('newJobButton');


	function init() {                             // initialize interface
		jobForm.style.display = 'none';
		addItemBtn.style.display = 'inline';
		// get the count of items
		document.getElementById('counter').innerText = list.children.length;
	}

	init();    // Call initialize function

	list.onclick = function (e) {   // this approach won't work for older IE browsers
		var target = e.target;             // get clicked LI, 
		if (target.className == 'todo')     // assign proper class
			target.className = 'done';
		else if (target.className == 'done') {
			target.parentNode.removeChild(target);
			document.getElementById('counter').innerText = list.children.length;
		}
	}

	addItemBtn.onclick = function () {        // display the form, hide add item button
		addItemBtn.style.display = 'none';
		jobForm.style.display = 'inline';
	};

	document.getElementById('addJob').onclick = function () {    // button adds job to list           
		var text = document.getElementById('itemDescription').value;    // get job description
		var newLI = document.createElement('LI');
		newLI.innerHTML = text;
		newLI.className = 'todo'
		list.appendChild(newLI);      // Add job to end of the list

		document.getElementById('itemDescription').value = "";     // clear text input
		document.getElementById('counter').innerText = list.children.length;
		init();
	};

};