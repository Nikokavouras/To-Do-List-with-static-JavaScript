const dataInput = document.getElementById('data-input');
const dataButton = document.getElementById('data-button');

const noteList = document.getElementById('note-list');

const poPup = document.getElementById('poPup');

dataButton.addEventListener('click', addNote);

function addNote() {
	if (dataInput.value.length == 0) {
		poPup.style.display = 'block';

		setTimeout(function () {
			poPup.style.display = "none";
		}, 4000);
	} else {
		poPup.style.display = 'none';

		// Add a note
		const listItem = document.createElement('li');
		const listItemInput = document.createElement('input');
		const listItemSpan = document.createElement('span');
		const listItemIcon = document.createElement('i');

		const insideOfListItem = [listItemInput, listItemSpan, listItemIcon];

		listItemInput.type = 'checkbox';
		listItemSpan.textContent = dataInput.value;
		listItemIcon.classList.add('fa-solid', 'fa-xmark');

		insideOfListItem.forEach(function (item) {
			listItem.appendChild(item);
		});

		noteList.append(listItem);

		// Delete the note when the i is clicked
		listItemIcon.addEventListener("click", function () {
			noteList.removeChild(listItem);
		});

		// Clear the input
		dataInput.value = '';

		// Line-through when the checkbox is checked
		listItemInput.addEventListener('click', function () {
			if (listItemInput.checked) {
				listItemSpan.classList.toggle('deleted');
			} else {
				listItemSpan.classList.remove('deleted');
			}
		});
	}
};