
	function key1_touchend(){
		if (document.card.key1.value.length==1) {
			document.card.key2.focus();
		}
		
	}
	function key2_touchend(){
		if (document.card.key2.value.length==1) {
			document.card.key3.focus();
		}
		
	}
	function key3_touchend(){
		if (document.card.key3.value.length==1) {
			document.card.key4.focus();
		}
	}
	var lockNum=document.querySelector('.lock-num-ul');
	var li=lockNum.querySelectorAll('li');
	var formPsd=document.getElementById('form-psd')
	var input=formPsd.getElementsByTagName('input');
	var tips=document.querySelector('.lock-tips')
	for (var i = 0; i < li.length; i++) {
		li[i].index=i;
		var psd=new Array();
		li[i].onclick=function(){

			psd.push(li[this.index].innerHTML);
			psd=psd.splice(0,4)
				input[0].value=psd[0];
				if (psd[1]) {
					input[1].value=psd[1];
				}
				if (psd[2]) {
					input[2].value=psd[2];
				}
				if (psd[3]) {
					input[3].value=psd[3];
				}	
				
			if (psd.length==4&&psd[0]==1&&psd[1]==3&&psd[2]==0&&psd[3]==2) {
				console.log('解锁');
				tips.innerHTML='密码正确';
				setTimeout(function(){
					var home=document.querySelector('.main-home');
					var lock=document.querySelector('.lock');
					lock.style.display='none';
					home.style.transform='scale(1)';
				},500)
			}
			else if(psd.length==4){
				if (psd!=[1,3,0,2]) {
					tips.innerHTML='密码错误';
					tips.className+=' lock-tips-move'
					setTimeout(function(){
						tips.className='lock-tips';
					},500)
				}
			}
		}
		var del=document.querySelector('.del');
			del.onclick=function(){
				if (psd.length) {
					psd.splice(psd.length-1,1)	
					if (psd[0]) {
						input[0].value=psd[0];
					}
					else{
						input[0].value='';
					}

					if (psd[1]) {
						input[1].value=psd[1];
					}
					else{
						input[1].value='';
					}
					if (psd[2]) {
						input[2].value=psd[2];
					}
					else{
						input[2].value='';
					}
					if (psd[3]) {
						input[3].value=psd[3];
					}
					else{
						input[3].value='';
					}	
				}
			}
	}

//返回角度  
          function GetSlideAngle(dx, dy) {  
              return Math.atan2(dy, dx) * 180 / Math.PI;  
          }  
   
          //根据起点和终点返回方向 1：向上，2：向下，3：向左，4：向右,0：未滑动  
          function GetSlideDirection(startX, startY, endX, endY) {  
              var dy = startY - endY;  
              var dx = endX - startX;  
              var result = 0;  
   
              //如果滑动距离太短  
              if(Math.abs(dx) < 2 && Math.abs(dy) < 2) {  
                  return result;  
              }  
   
              var angle = GetSlideAngle(dx, dy);  
              if(angle >= -45 && angle < 45) {  
                  result = 4;  
              }else if (angle >= 45 && angle < 135) {  
                  result = 1;  
              }else if (angle >= -135 && angle < -45) {  
                  result = 2;  
              }  
              else if ((angle >= 135 && angle <= 180) || (angle >= -180 && angle < -135)) {  
                  result = 3;  
              }  
   
              return result;  
          }  
   
          //滑动处理  
          var startX, startY;  
          document.addEventListener('touchstart',function (ev) {  
              startX = ev.touches[0].pageX;  
              startY = ev.touches[0].pageY;    
          }, false);  
          document.addEventListener('touchend',function (ev) {  
              var endX, endY;  
              endX = ev.changedTouches[0].pageX;  
              endY = ev.changedTouches[0].pageY;  
              var direction = GetSlideDirection(startX, startY, endX, endY);  
              switch(direction) {  
                  case 0:  
                      //alert("没滑动");  
                      break;  
                  case 1:  
                     // alert("向上");  
                      break;  
                  case 2:  
                      //alert("向下");  
                      break;  
                  case 3:  
                        
                        var lock=document.querySelector('.lock');
                     	lock.style.transform="translateX(-100%)"
                      break;  
                  case 4:  
                     var lock=document.querySelector('.lock');
                     	lock.style.transform="translateX(0)";
                      break;  
                  default:             
              }  
          }, false);  