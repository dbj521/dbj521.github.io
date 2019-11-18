//检测微信浏览器
function isWeiXin() {
    var ua = window.navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == 'micromessenger') {
        return 1;
    } else {
        return 0;
    }
}

//检测Android，iOS，其他
function isphone(){
	var u = navigator.userAgent;
    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
    var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    if(isAndroid){
    	return '0'
	} else if(isiOS){
		return '1'
	}else{
		return '-1'
	}
}

//遮罩
function zhezhao(a,b){
	if(!!b){
		var bb =document.getElementById(b);
		bb.style.display ='none';
	}
	var zhezhao =document.getElementById('zhezhao');
	if (a==1) {
		zhezhao.style.display = 'block';
	} else{
		zhezhao.style.display = 'none';
	}
}


//通用----灰色遮罩开关		
function Mask(a) {
	var Mask = document.getElementById('Mask');
	if(a == 0) {
		Mask.style.display = 'none';
	} else {
		Mask.style.display = 'block';
	}
}

//分组码
function open_Grouping(a){
		    var  Grouping_src =document.getElementById('Grouping_src');
            Grouping_src.src =a.value;
			Mask(1);
		}