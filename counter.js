// let counter = document.getelementById();

let counts = setInterval(updated);
let upto =2400;

function updated(){
	var counter = document.getElementById("counter");
	counter.innerHTML=++(upto);
	if(upto===2500){
		clearInterval(counts);
	}

}


function myfunction(){	
	var x = document.getElementById("mylink");

	if(x.style.display === "block"){
		x.style.display = "none";
		fo();	
	}else{
		x.style.display = "block";
		go();

	}
}


function go(){
	// if(document.getElementById("dos").onclick == true){
		document.getElementById("middle").className = "middlez";
	// }else{
	// 	document.getElementById("middle").className = "middles";

	// }
}
function fo(){
		document.getElementById("middle").className = "middles";


}

// function scroll(){
// 	if(document.documentElement.scrollTop > 80vh){

// 	}else{

// 	}
// }
