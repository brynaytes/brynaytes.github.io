var last="goals";
function main(){}
function placer(x){
	document.getElementById(last).style.display="none";
	var txt = document.getElementById(x);
	txt.style.display="block";
	last = x;
	if(x == "about"){
		txt.style.display="grid";
	}
}
