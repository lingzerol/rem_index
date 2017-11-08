
function GetQueryString()
{
	var x = document.forms["search"]["string"].value;
	var url="https://www.baidu.com/s?ie=unicode&wd="+x;
	url="http://www.baidu.com/baidu?wd="+x;
	setTimeout("top.location.href='" + url + "'", 0);
    	//location.href=url;
    }

    function BackgroundImages(){
    	var r=Math.ceil(Math.random()*497);
    	var str="F:/rem/"+r+".jpg";
    	var img_url = str;

//var img_url = 'http://www.qttc.net/static/upload/2013/13643608813441.jpg?'

// 创建对象
var img = new Image();

// 改变图片的src
img.src = img_url;

// 判断是否有缓存

img.onload = function(){
	
 	//alert(s);

           var t1=window.screen.availHeight; //获取屏幕高度
           var t2=window.screen.availWidth;  //获取屏幕宽度 
           var t3=img.height; 　   //获得当前img高度
           var t4=img.width;　　　　//获取当前img宽度
           var t5=0;
           var t6=0;
           if(t3>t1||t4>t1){
           		var temp1,temp2,rate;
           		var a,b;
           		rate=t3/t4; //高/宽
           		a=t1;
           		b=a/rate;
           		temp1=(a*(b-t2))/(a*b);
           		b=t2;
           		a=rate*b;
           		temp2=(b*(a-t1))/(a*b);
           		if(temp2>temp1+0.1){
           			if(rate>0.55){
           			t3=t1;
           			t4=t3/rate;}
           		}
           		else{
           			if(rate>0.55){
           			t4=t2;
           			
           			t3=t4*rate;}
           		}
           }

               if(t3<t1){　　　　　　　　　　　　　　//如果屏幕高度大于img高度，设置图片margin-top
               	t5=(t1-t3)/2;
               }
            if(t4<t2){ 　　　　　　　　　　　　　　//如果屏幕宽度大于img宽度，设置图片margin-left　　
            	t6=(t2-t4)/2;
            }
            var s=t4+"px "+t3+"px";
            var ss=t6+"px 0px";
            document.getElementById("rem").style.backgroundImage="url("+str+")";
            document.getElementById("rem").style.backgroundRepeat="no-repeat";
            document.getElementById("rem").style.backgroundSize=""+s+"";
            document.getElementById("rem").style.backgroundPosition =ss;



        };
//attr.setAttribute("style", "background-image='F:/rem/"+r+".jpg'");

return false;
}
