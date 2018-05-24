const button = document.querySelector('i.fa-copy')

const input = document.querySelector('.clipboard')

const message = document.querySelector('#message')

button.addEventListener('click', function(){
	input.focus();
	document.execCommand('selectAll')
	document.execCommand('copy')

	message.innerHTML = "Copied to clipboard"

	setTimeout(()=> message.innerHTML = "", 4000)
})
