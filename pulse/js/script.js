let header=document.getElementById('header')
window.addEventListener('scroll', () => {
	if(pageYOffset>50){
		header.style.cssText="background: rgba(0, 0, 0, 0.6);"
	}else{
		header.style.cssText="background: none"
	}
})