$(document).ready(function(){

    var width=$('.imgagent').width();
    
    var slider1=$('.slidernow1');
    var temp1=1;

    $('#next1').click(function(){
        if(temp1===3){
            temp1=1;
            slider1.animate({'margin-left':0}, 800)
        } else{
            slider1.animate({'margin-left':-(temp1*width)}, 800);
            temp1++;
        }
    });

    $('#prev1').click(function(){
        if(temp1===1){
            temp1=3;
            slider1.animate({'margin-left':-(width*2)}, 800)
        } else{
            temp1--;
            slider1.animate({'margin-left':width-(temp1*width)}, 800);
        }
    });


    var slider2=$('.slidernow2');
    var temp2=1;

    $('#next2').click(function(){
        if(temp2===3){
            temp2=1;
            slider2.animate({'margin-left':width-(temp2*width)}, 800)
        } else{
            slider2.animate({'margin-left':-(temp2*width)}, 800);
            temp2++;
        }
    });

    $('#prev2').click(function(){
        if(temp2===1){
            temp2=3;
            slider2.animate({'margin-left':-(width*2)}, 800)
        } else{
            temp2--;
            slider2.animate({'margin-left':width-(temp2*width)}, 800);
        }
    });


    var slider3=$('.slidernow3');
    var temp3=1;

    $('#next3').click(function(){
        if(temp3===3){
            temp3=1;
            slider3.animate({'margin-left':width-(temp3*width)}, 800)
        } else{
            slider3.animate({'margin-left':-(temp3*width)}, 800);
            temp3++;
        }
    });

    $('#prev3').click(function(){
        if(temp3===1){
            temp3=3;
            slider3.animate({'margin-left':-(width*2)}, 800)
        } else{
            temp3--;
            slider3.animate({'margin-left':width-(temp3*width)}, 800);
        }
    });


    var slider4=$('.slidernow4');
    var temp4=1;

    $('#next4').click(function(){
        if(temp4===3){
            temp4=1;
            slider4.animate({'margin-left':width-(temp4*width)}, 800)
        } else{
            slider4.animate({'margin-left':-(temp4*width)}, 800);
            temp4++;
        }
    });

    $('#prev4').click(function(){
        if(temp4===1){
            temp4=3;
            slider4.animate({'margin-left':-(width*2)}, 800)
        } else{
            temp4--;
            slider4.animate({'margin-left':width-(temp4*width)}, 800);
        }
    });


    var slider5=$('.slidernow5');
    var temp5=1;

    $('#next5').click(function(){
        if(temp5===3){
            temp5=1;
            slider5.animate({'margin-left':width-(temp5*width)}, 800)
        } else{
            slider5.animate({'margin-left':-(temp5*width)}, 800);
            temp5++;
        }
    });

    $('#prev5').click(function(){
        if(temp5===1){
            temp5=3;
            slider5.animate({'margin-left':-(width*2)}, 800)
        } else{
            temp5--;
            slider5.animate({'margin-left':width-(temp5*width)}, 800);
        }
    });
})