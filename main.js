var box;
var box1;
var holder = [];
var t =0;
var l=0;
var winWid;
var winHei;
var z = 3;
var rad = 50;
function ball(obj, x, y, bx, by, size,inc,oColor, cColor, rad) {
    this.obj = obj;
    this.x = x;
    this.y = y;
    this.bx = bx;
    this.by = by;
    this.size = size;
    this.stoped = false;
    this.inc = inc;
    this.oColor = oColor;
    this.cColor = cColor;
	this.rad = rad
}

function main() {
    winWid = document.body.clientWidth  - 3;
    winHei = window.innerHeight - 3;
    setter();
    var id = setInterval(frame, 12);
}

function setter(){
    box = document.getElementById("about");
    box1 = new ball(box,199,10,"+","+",200,2,"#44037A","blue","30%"); 
    holder.push(box1);
    
    box = document.getElementById("projects");
    box1 = new ball(box, 300, 100, "+", "-", 125,2,"#9E3354","red","30%");
    holder.push(box1);
    
    box = document.getElementById("contact");
    box1 = new ball(box, 200, 200, "-" , "+", 75,3,"#26755D", "green","0%");
    holder.push(box1);
}
    
function frame() {
    for(var i =0; i < holder.length;i++){
    box1 = holder[i];
    if(box1.stoped == false){
    if(box1.x + box1.size == winWid || box1.x == 0){
        //window.alert("touch");
        if(box1.bx == "+"){
            box1.bx = "-";
        }else if(box1.bx == "-"){
            box1.bx = "+";
        }
    }

    if(box1.y + box1.size == winHei || box1.y == 0){
        if(box1.by == "+"){
            box1.by = "-";
        }else{
            box1.by = "+";
        }
    }
    
    
    if(box1.bx == "+"){
        box1.x++;
    }else if(box1.bx == "-"){
        box1.x--;
    }else{
        window.alert("not sure what just happened");
    }
    
    if(box1.by == "+"){
    box1.y++;
       }else if(box1.by == "-"){
        box1.y--;
    }else{
        
    }
    
    box1.obj.style.left= box1.x + "px";
    box1.obj.style.top = box1.y + "px";
    }else{
        if(box1.size * box1.inc + box1.x > winWid - 3){
            box1.x -= 3;
            box1.obj.style.left= box1.x + "px";
        }
        if(box1.size * box1.inc + box1.y > winHei - 3){
            box1.y -= 3;
             box1.obj.style.top = box1.y + "px";
        }
    }
    }
}

function clicked(title, num){
    if(holder[num].stoped == false){
    holder[num].stoped = true;
    }else{
    holder[num].stoped = false;
    }
    enlarge(title, num);
}





function enlarge(title, num){
    if(holder[num].stoped == true){
    var obj =  document.getElementById(title).getElementsByClassName("name")[0];
    obj.style.display = "none";
    
    var obj = holder[num];
    obj.obj.style.zIndex=z;
    z++;
	obj.obj.style.transition="border-Radius 1s,height 1s,width 1s,background-color 1s";
	obj.obj.style.borderRadius = "30%";	
	//obj.obj.style.transition="";
		obj.obj.style.height= holder[num].size *  holder[num].inc + "px";
	//obj.obj.style.transition="";
	    obj.obj.style.width= holder[num].size * holder[num].inc + "px";

	//obj.obj.style.transition="";

    
    obj.obj.style.backgroundColor= obj.cColor;
	
    var obj1 =  document.getElementById(title).getElementsByClassName("hidden")[0]; 

    setTimeout(function(){    obj1.style.display = "block";},450);

        
    }else{
          var obj =  document.getElementById(title).getElementsByClassName("name")[0];
    obj.style.display = "block";
    
    var obj = holder[num];
		obj.obj.style.transition="border-Radius 1s,height 1s,width 1s,background-color 1s";

    obj.obj.style.height= holder[num].size + "px";
    obj.obj.style.width= holder[num].size + "px";
    obj.obj.style.backgroundColor = obj.oColor;
	//obj.obj.style.transition="border-Radius 2s";
	obj.obj.style.borderRadius = "50%";	
	
    var obj1 = document.getElementById(title).getElementsByClassName("hidden")[0];
    obj1.style.display = "none";
    }
}
