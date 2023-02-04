var headerBtn = document.querySelector('.header-btn');
var sidebar = document.querySelector('.sidebar')
headerBtn.addEventListener('click',(e)=>{
	sidebar.classList.toggle('close')
})