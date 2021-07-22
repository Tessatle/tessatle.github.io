let mainpic=document.getElementById('main-picture')

let section2=document.getElementById('section2')
let section3=document.getElementById('section3')
let section4=document.getElementById('section4')
let footer=document.getElementById('footer')

window.addEventListener('load', changePhoto)

window.addEventListener('scroll', scroller)

let width=window.innerWidth
function changePhoto(){
	if (width<550){
		mainpic.src="img/main-on-adapt.png"
	}else{
		mainpic.src="img/BSPP2266.png"
	}
}
function scroller(){
	if (pageYOffset>getOffsetSum(section2).top-300) {
		section2.style.opacity="1"
	}else{
		section2.style.opacity="0"
	}
	if (pageYOffset>getOffsetSum(section3).top-300) {
		section3.style.opacity="1"
	}else{
		section3.style.opacity="0"
	}
	if (pageYOffset>getOffsetSum(section4).top-300) {
		section4.style.opacity="1"
	}else{
		section4.style.opacity="0"
	}
	if (pageYOffset>getOffsetSum(footer).top-500) {
		footer.style.opacity="1"
	}else{
		footer.style.opacity="0"
	}
}

function getOffsetSum(elem) {
	var top=0, left=0
	while(elem) {
		top = top + parseFloat(elem.offsetTop)
		left = left + parseFloat(elem.offsetLeft)
		elem = elem.offsetParent
	}
	 
	return {top: Math.round(top), left: Math.round(left)}
}