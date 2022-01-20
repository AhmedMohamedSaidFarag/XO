
var click = new Audio();
click.src = "نقرة الفأرة.wav";
var fo = new Audio();
fo.src = "نغمة الرقم.WAV";
		alert ('السلام عليكم');
		var com = true;     //هذا المتغير لأجل التحكم في لعب الكمبيوتر في الدور الجديد
		//var f = true; //هذا المتغير للتحكم متي يحدث التعادل
		var X = 0;   //متغير عدد فوز الاكس
		var O = 0; //متغير عدد فوز الاوه
		var taadol = 0;  //متغير عدد مرات التعادل
		function reset(A,B,C) {        //دالة الدور الجديد
			fo.play();
			document.getElementById("a" + A).style.color = "black";
			document.getElementById("a" + B).style.color = "black";
			document.getElementById("a" + C).style.color = "black";
			 setTimeout( function() {
				
               window.a1.innerHTML = "";
                    window.a2.innerHTML = "";
                         window.a3.innerHTML = "";
                              window.a4.innerHTML = "";
                                 window.a5.innerHTML = "";
                                   window.a6.innerHTML = "";
                                        window.a7.innerHTML = "";
                                            window.a8.innerHTML = "";
                                               window.a9.innerHTML = "";
                                               com = true;
                                  if( !turn) {
				                computer();
				                   }
;},1000   );
window.hhh.innerHTML = " number of computer won = " + O;
window.hhh.style.color = "lime";
window.bbb.innerHTML = "number of you won = " + X;
window.bbb.style.color = "orange";
window.aaa.innerHTML = "Number of times the round ends with a draw = " + taadol;
			//ty(id);
			if( !turn) {
				computer();
				}
		}
		
		var mor = [];                                   //المصفوفة التى تحتوى على احتمالات الفوز  
		function whww() {
		for( var i = 1; i<=9; i++ ) {          //هذا اللوب لوضع ما تحتويه المصفوفة
			mor [ i ] = document.getElementById('a' + i).innerHTML;
			}
			if(mor [1] == mor [2] && mor [2] == mor [3] && mor [1] != "") {
				//fo.play();
				com = false;
				
				if(mor [1]== "X") {
					alert("you won")
					X ++;
					}
					if(mor [1]== "O") {
						alert("computer won");
					O ++;
					}
				reset(1,2,3);
				}
				else if(mor [4] == mor [5] && mor [5] == mor [6] && mor [4] != "") {
					com = false;
				if(mor [4]== "X") {
					alert("you won")
					X ++;
					}
					if(mor [4]== "O") {
						alert("computer won");
					O ++;
					}
				reset(4,5,6);
				}
				else if(mor [7] == mor [8] && mor [8] == mor [9] && mor [7] != "") {
					com = false;
				if(mor [7]== "X") {
					alert("you won")
					X ++;
					}
					if(mor [7]== "O") {
						alert("computer won");
					O ++;
					}
				reset(7,8,9);
				}
				else if(mor [2] == mor [5] && mor [5] == mor [8] && mor [2] != "") {
					com = false;
				if(mor [2]== "X") {
					alert("you won")
					X ++;
					}
					if(mor [2]== "O") {
						alert("computer won");
					O ++;
					}
				reset(2,5,8);
				}
				else if(mor [3] == mor [6] && mor [6] == mor [9] && mor [3] != "") {
					com = false;
				if(mor [3]== "X") {
					alert("you won")
					X ++;
					}
					if(mor [3]== "O") {
						alert("computer won");
					O ++;
					}
				reset(3,6,9);
				}
				else if(mor [1] == mor [4] && mor [4] == mor [7] && mor [1] != "") {
					com = false;
				if(mor [1]== "X") {
					alert("you won")
					X ++;
					}
					if(mor [1]== "O") {
						alert("computer won");
					O ++;
					}
				reset(1,4,7);
				}
				else if(mor [1] == mor [5] && mor [5] == mor [9] && mor [1] != "") {
					com = false;
				if(mor [1]== "X") {
					alert("you won")
					X ++;
					}
					if(mor [1]== "O") {
						alert("computer won");
					O ++;
					}
				reset(1,5,9);
				}
				else if(mor [3] == mor [5] && mor [5] == mor [7] && mor [3] != "") {
					com = false;
				if(mor [3]== "X") {
					alert("you won")
					X ++;
					}
					if(mor [3]== "O") {
						alert("computer won");
					O ++;
					}
				reset(3,5,7);
				}
				else if(mor [1] != "" && mor [2] != "" && mor [3] != "" && mor [4] != "" && mor [5] != "" && mor [6] != "" && mor [7] != "" && mor [8] != "" && mor [9] != ""  ) {
					alert("draw");
					
               window.a1.innerHTML = "";
                    window.a2.innerHTML = "";
                         window.a3.innerHTML = "";
                              window.a4.innerHTML = "";
                                 window.a5.innerHTML = "";
                                   window.a6.innerHTML = "";
                                        window.a7.innerHTML = "";
                                            window.a8.innerHTML = "";
                                               window.a9.innerHTML = "";
                                               
                                               taadol++;
                                               window.aaa.innerHTML = " Number of times the round ends with a draw = " + taadol;
					}
				}
		var turn = true;
		function ty(id) {           //دالة لكتابة اكس او او
			var s = document.getElementById(id)
			if(turn && s.innerHTML=="") {
	s.innerHTML = "X";
	s.style.color = "orange";
	click.play();
	  f = true;
	whww();     
				turn = false;
				computer();
			}
			
			/*
             else if(turn == false &&s.innerHTML=="") {
	s.innerHTML = "O";
	s.style.color ="lime";
	click.play();
				turn = true;
			  }
	*/
			        //استدعاء الدالة التى تبحث عن احتمالات الفوز
			
           }
           function computer() {
           	var nr = Math.floor( Math.random()*9)+1;
          // 	alert(nr);
                    if(mor [1] == mor [2] && mor[3] == ""  && mor[1] == "O")
          {
          	nr = 3;
          	}
                    else if(mor [2] == mor [3] && mor[1] == ""  && mor[3] == "O")
          {
          	nr = 1;
          	}
                              else if(mor [1] == mor [3] && mor[2] == ""  && mor[3] == "O")
          {
          	nr = 2;
          	}
                              else if(mor [4] == mor [5] && mor[6] == ""  && mor[4] == "O")
          {
          	nr = 6;
          	}
                                     else if(mor [5] == mor [6] && mor[4] == ""  && mor[6] == "O")
          {
          	nr = 4;
          	}
                                     else if(mor [4] == mor [6] && mor[5] == ""  && mor[4] == "O")
          {
          	nr = 5;
          	}
                                  else if(mor [8] == mor [9] && mor[7] == ""  && mor[8] == "O")
          {
          	nr = 7;
          	}
                                     else if(mor [7] == mor [9] && mor[8] == ""  && mor[9] == "O")
          {
          	nr = 8;
          	}
                                     else if(mor [7] == mor [8] && mor[9] == ""  && mor[8] == "O")
          {
          	nr = 9;
          	}
                                       else if(mor [4] == mor [7] && mor[1] == ""  && mor[7] == "O")
          {
          	nr = 1;
          	}
                                     else if(mor [1] == mor [7] && mor[4] == ""  && mor[7] == "O")
          {
          	nr = 4;
          	}
                                     else if(mor [4] == mor [1] && mor[7] == ""  && mor[1] == "O")
          {
          	nr = 7;
          	}
                                  else if(mor [5] == mor [8] && mor[2] == ""  && mor[8] == "O")
          {
          	nr = 2;
          	}
                                     else if(mor [2] == mor [8] && mor[5] == ""  && mor[8] == "O")
          {
          	nr = 5;
          	}
                                     else if(mor [5] == mor [2] && mor[8] == ""  && mor[2] == "O")
          {
          	nr = 8;
          	}
                                    else if(mor [6] == mor [9] && mor[3] == ""  && mor[9] == "O")
          {
          	nr = 3;
          	}
                                     else if(mor [3] == mor [9] && mor[6] == ""  && mor[9] == "O")
          {
          	nr = 6;
          	}
                                     else if(mor [6] == mor [3] && mor[9] == ""  && mor[3] == "O")
          {
          	nr = 9;
          	}
                                    else if(mor [5] == mor [9] && mor[1] == ""  && mor[9] == "O")
          {
          	nr = 1;
          	}
                                     else if(mor [1] == mor [9] && mor[5] == ""  && mor[9] == "O")
          {
          	nr = 5;
          	}
                                     else if(mor [1] == mor [5] && mor[9] == ""  && mor[1] == "O")
          {
          	nr = 9;
          	}
                                              else if(mor [5] == mor [7] && mor[3] == ""  && mor[7] == "O")
          {
          	nr = 3;
          	}
                                     else if(mor [3] == mor [7] && mor[5] == ""  && mor[7] == "O")
          {
          	nr = 5;
          	}
                                     else if(mor [3] == mor [5] && mor[7] == ""  && mor[5] == "O")
          {
          	nr = 7;
          	}
          
          
          
          
          //التحكمات العامة 
               else if(mor [1] == mor [2] && mor[3] == ""  && mor[1] != "")
          {
          	nr = 3;
          	}
                    else if(mor [2] == mor [3] && mor[1] == ""  && mor[3] != "")
          {
          	nr = 1;
          	}
                              else if(mor [1] == mor [3] && mor[2] == ""  && mor[3] != "")
          {
          	nr = 2;
          	}
                              else if(mor [4] == mor [5] && mor[6] == ""  && mor[4] != "")
          {
          	nr = 6;
          	}
                                     else if(mor [5] == mor [6] && mor[4] == ""  && mor[6] != "")
          {
          	nr = 4;
          	}
                                     else if(mor [4] == mor [6] && mor[5] == ""  && mor[4] != "")
          {
          	nr = 5;
          	}
                                        else if(mor [8] == mor [9] && mor[7] == ""  && mor[8] != "")
          {
          	nr = 7;
          	}
                                     else if(mor [7] == mor [9] && mor[8] == ""  && mor[9] != "")
          {
          	nr = 8;
          	}
                                     else if(mor [7] == mor [8] && mor[9] == ""  && mor[8] != "")
          {
          	nr = 9;
          	}
                                                  else if(mor [4] == mor [7] && mor[1] == ""  && mor[7] != "")
          {
          	nr = 1;
          	}
                                     else if(mor [1] == mor [7] && mor[4] == ""  && mor[7] != "")
          {
          	nr = 4;
          	}
                                     else if(mor [4] == mor [1] && mor[7] == ""  && mor[1] != "")
          {
          	nr = 7;
          	}
                                                            else if(mor [5] == mor [8] && mor[2] == ""  && mor[8] != "")
          {
          	nr = 2;
          	}
                                     else if(mor [2] == mor [8] && mor[5] == ""  && mor[8] != "")
          {
          	nr = 5;
          	}
                                     else if(mor [5] == mor [2] && mor[8] == ""  && mor[2] != "")
          {
          	nr = 8;
          	}
                                                                      else if(mor [6] == mor [9] && mor[3] == ""  && mor[9] != "")
          {
          	nr = 3;
          	}
                                     else if(mor [3] == mor [9] && mor[6] == ""  && mor[9] != "")
          {
          	nr = 6;
          	}
                                     else if(mor [6] == mor [3] && mor[9] == ""  && mor[3] != "")
          {
          	nr = 9;
          	}
                                    else if(mor [5] == mor [9] && mor[1] == ""  && mor[9] != "")
          {
          	nr = 1;
          	}
                                     else if(mor [1] == mor [9] && mor[5] == ""  && mor[9] != "")
          {
          	nr = 5;
          	}
                                     else if(mor [1] == mor [5] && mor[9] == ""  && mor[1] != "")
          {
          	nr = 9;
          	}
                                              else if(mor [5] == mor [7] && mor[3] == ""  && mor[7] != "")
          {
          	nr = 3;
          	}
                                     else if(mor [3] == mor [7] && mor[5] == ""  && mor[7] != "")
          {
          	nr = 5;
          	}
                                     else if(mor [3] == mor [5] && mor[7] == ""  && mor[5] != "")
          {
          	nr = 7;
          	}
          
          
          
          
          
          
           if(turn == false && document.getElementById("a" + nr).innerHTML ==""&& com ) {
       document.getElementById("a" + nr).innerHTML = "O";
	document.getElementById("a" + nr).style.color ="lime";
	turn = true;
	whww(); 
           } else{ computer(); }
           }
var lamp = document.getElementById("lamp");
var isOn = 0;

function tur()
{
	if(isOn == 0)
	{
		lamp.src="on.jpg";
		isOn = 1;
	}else{
		lamp.src="off.jpg";
		isOn = 0;		
	}
}

var hh = 0;
 var myH = setInterval( function() {
window.h.style.fontSize = hh ++
if(hh > 80) {
	clearInterval(myH);
	}
}, 100);
/*
function ghg(event) {
	window.txt.value = "made by ahmed farag";
	
	}

*/

var text = " MADE BY AHMED FARAG";
var cindex = 0;
var myput = setInterval( function() {
window.txt.value += text[cindex++];
window.txt.style.fontSize = 70;
if(cindex >= text.length) {
	clearInterval(myput);
	// window.txt.event.onchange = "ghg(event);"
}
}, 490);

 
