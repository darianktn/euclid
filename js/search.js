// const isEscapeKey = (evt) => evt.key === 'Escape';

document.addEventListener('DOMContentLoaded', (e) => {
	document
		.getElementById('open-search-form')
		.addEventListener('click', (e) => {
			document
				.getElementById('search-form')
				.classList.add('search__form-show');
		});

	document
		.getElementById('search-form-close')
		.addEventListener('click', (e) => {
			document
				.getElementById('search-form')
				.classList.remove('search__form-show');
		});

	document.getElementById('search-form').addEventListener('submit', (e) => {
		e.preventDefault();
	});
});

// const onDocumentKeydown = (evt) => {
//   if (isEscapeKey(evt) {
//     evt.preventDefault();
//     closePictureUpload();
//   }
// };
