var start = new Date().getTime();
            var count=0;
            function randomcolor(){
                var letter = "01234567ABCDEF".split('');
                var col = "#";
                for(var i=0;i<6;i++){
                    col+=letter[Math.floor(Math.random()*16)];
                }
                return col;
            }
            function appear(){
                if(Math.random()>0.5){
                    document.getElementById("shape").style.borderRadius="50%";
                }else{
                    document.getElementById("shape").style.borderRadius="0";
                }
                var top = Math.random()*400;
                var left = Math.random()*400;
                var height = Math.random()*400;
                if(height>30){
                    document.getElementById("shape").style.display="block";
                    document.getElementById("shape").style.backgroundColor=randomcolor();
                    document.getElementById("shape").style.top=top+"px";
                    document.getElementById("shape").style.left=left+"px";
                    document.getElementById("shape").style.width=height+"px";
                    document.getElementById("shape").style.height=height+"px";
                    start = new Date().getTime();
                }else{
                    appear();
                }
            }
            function appeardelay(){
                setTimeout(appear,Math.random()*1000);
            }
            appeardelay();
            document.getElementById("shape").onclick=function(){
                document.getElementById("shape").style.display="none";
                var end = new Date().getTime();
                var timetake=(end-start)/1000;
                if(timetake<1){
                    document.getElementById("tt").style.fontSize=200;
                    document.getElementById("tt").style.backgroundColor="yellow";
                    count = count + 1;
                    document.getElementById("score").innerHTML=count;
                    if(count>=10){
                        alert("You won!");
                        alert("If you want to play again reload the page.");
                        count=0;
                    }
                }else{
                    count=0;
                    document.getElementById("score").innerHTML="Foul!";
                    document.getElementById("tt").style.backgroundColor="red";
                    document.getElementById("tt").style.fontSize=200;
                }
                document.getElementById("tt").innerHTML=timetake+"s";
                appeardelay();
            }