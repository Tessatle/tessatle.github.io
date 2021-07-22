let mainpic=document.getElementById('main-picture')

window.addEventListener('DOMContentLoaded', changePhoto)

let width=window.innerWidth
function changePhoto(){
	if (width<550){
		mainpic.src="img/main-on-adapt.png"
	}else{
		mainpic.src="img/BSPP2266.png"
	}
}