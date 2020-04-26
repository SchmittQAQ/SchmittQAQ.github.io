// MP3播放器及歌曲库js
var myPlaylist = new jPlayerPlaylist({
		jPlayer: "#jquery_jplayer_N",
		cssSelectorAncestor: "#jp_container_N"
	},
     [	 { title: "嘉 禾 天 橙 国 际 大 影 院", artist: "ギャラクシー・騎士", mp3:"https://public.ch.files.1drv.com/y4mH2RbWHHPhv8UlmxhaeZuinBLmGaJ0SuBvw0zdqeL4QkhkbwFfcdfldLQ1FaiFtcdchDWZxq56GyuM6qV6EtGWWatumWCety6JC8hoiGn5_beSbaZHLoIQWs5HDu0p5BIaMrMQsCARoL-Am-alyGXg7g0j8jRhYL6Lavp5Uc0QdAivy-WSv_wnXnhy6dimFjDNcfNB5et2zMgPn32jPDBkaKBLREIgb_zBBxyfo_Tg1U?access_token=EwAQA61DBAAUzl/nWKUlBg14ZGcybuC4/OHFdfEAAbYnfQpm%2b9w7FbkgiOpvaPzNPqG5F%2bBdqtPmW3vq7nBY2PsMFn5V88C68NUm%2bskj0jnrUzl8tyO9gj2TYINxoUoKwqjPvMq%2b7TZ4F2SM3hIzxXSed9zM4gtXlOEAAaUoGUb3mjb6WO2WECAjLZZzLyADGxZGPvrbRCqae2MHjxlqfFyA6vG68sNSDaKSWQKzsj5p15TBXSyOAu3O0UT9AFuNbKRNwdVDW%2bGeomPk92ooWKgNz06PfHShdiqzV41v7CLk1rA5T7PTLNahhu9ciOKAyJ2QKUlIIuSLiuuksBpU0wgI3kQEPB/rkd6yBEBTJ6JO8r7Y2Ol4Z64dxIB2foEDZgAACDGJjq952bE04AFTTG/Qh2lYmBKTCwQjjhuhAToK2b4cen9bjF6MTWe1bxGN1OFi8UWWq1zJLKRhQpSD9ZRHY3fhhtygFE0NSP4SRJ29B07mJT9Np46xPpmncBbnFDOTu/uS/rwG4Pief6sKyv0MaCNG4l1eUdcl6Cgwoq29%2bPn48hIk9QXXd1D4q/M55dpe/fJ5BeXL4SbDga4soSbTCqzNloBy%2biJjyknuENbyrTzaQUjq5Qo1rCk7w9by90WPz6r%2bu7%2b7uR9y1V4HJYg5IqIon29f38Nw%2btW2g0pxpffxVWvYuSy0QgZJlMeeM25%2bLJ6I1jK1RFBpis5/dd81Db%2b%2bNQILueahR94VJFAEqO9RQd9iT90wZKDdpgWnSD2kGfHATAp0OhnVWqJfA7WWWsnZA7JIV1Nt1URPy75ucyR9Cle7ywQL/897Gpw9QEkrEQWLdYPVdBZhxpuPiC5TS5L5BtgADzcyjc2WAEuPYJp262sZcY8l6cwsRipfzvekFyTcxLWGCJfvQWFv/w7ezf974PgmQ4Hbmh67DX90ywO/TUpo/EWZWKeD15HffYog%2buYzqsYWTE4m/mcJ6YkXBfAB3RD7DjTu60TCXR7pS3eTSN6Bo2ggOjOgAIjrECtjdHQvSHLT37bXx1MCAg%3d%3d", poster: "http://p1.music.126.net/M3ieCBkTn-bYYXvZLzcj-Q==/109951162809695511.jpg?param=130y130%22%20class=%22j-img%22%20data-src=%22http://p1.music.126.net/M3ieCBkTn-bYYXvZLzcj-Q==/109951162809695511.jpg"},
	 	 { title: "温柔", artist: "五月天", mp3:"https://public.ch.files.1drv.com/y4mSekyNGjN8gDgYID0Syw1SdX8fvT4J7qGKcdLH-Yt9WmPlcg7W3ERtN-V89ZDnSk60t7tgvni_kZm46KceNtZJYKuEtnzmznE-RpZp5vQZ1vkeGuD-AnbpeyCK-TW1nzvA9nGIP4qZ_hHUC4fJAOSY0Il9d7TbImA3JUdzdWnv-Z1BfJgOc6FLkiFo7C807WqDMVaj3HVJXVO3vGp7zg4hR5Ud8C_niFwFx-zI_da0rE?access_token=EwAQA61DBAAUzl/nWKUlBg14ZGcybuC4/OHFdfEAAY9MeR158qmslZxG3OLeGeYufpHTRe6nuDFfeYjiLP8SPekalD1mvXO89GdDE3bcfujPVQJTBJNMsNr702NPRoBSLtEEjRRWQVD5uxUqsktN/K5sbhBlS06pGNtpWL0oe6CvgrmC6OMPB3Q/JIJD6pNclU0DmRBBdER32W%2bMYlC3qdNW%2bilqlKkgcaIleAExkez9/KGMgOpLXG1TKzsmDh5rrOrr3Rbk34cTqWPaZ7U5YHEVlZRKTItOIo2C3nOWZ/1ibz%2bWwltoxxOl3wUsEoaKRnuFqVpLBPZAffLVomD7iv57g6uGF6zL5/HhbgRggc3TVgc9CS/jx/zVGsM17RIDZgAACCmuKaTOD/cG4AGZAJ78Tl5rc8ecb1Vne5MehrtGBtDoo%2b3sMM1wR0jK3DLEmVgT8CrZpjmMymc73zkcdv77h0SkLTXjlBJA4B1sakEHAZ/5Fr2pHzOlhDADBlkFmFrvFGxIk%2bnHXBIfX6tu6ChC/c1/1DiYOHG6t4HP7ti2aSoF/1pJgbfGqtg0CQdANZL9w0ySBL7/UCHXKQCBn8K3/jUuaunzB4NISkrfBT/JqkmJQQ/TXibhWb81hH/RzmcRJ1eTCapnYDJ%2bNte0GJodcXyokrIMHI%2b4%2bsGZERYDtKflLNq4wd7eWEwRcFpOGETwUgrvA3sGa/L3PATjbyFPZ3K/8mryZ40Be1BduX8giOadvOvXHye7PoxixD97xT/lKEJJc6qJeHpjG5yWyVwI6vcK2%2ba43fhgmBcUPeNGH2pkRozvLclmrWukCEq0t4lUD/9gcWR3wQFtOi2vm7/UiEVq5tk7S0PK9KmDNUOzA1ihcdeI5ZmQWPI4a0qh1UEbUZ80fM6psCPFTmBAEbcBJ134xsRevs/kSUgV6iAjr%2bGJzX4et%2b4fm0O/56sBzLO1KHRXJrIwayWfcrdvpW9k1YAw/uUiksZJGbERo5NTXPHRJQysN8P7CWjvxJhxuS%2bgh6nMze8fvGJvwFwCAg%3d%3d", poster: "http://p1.music.126.net/v4V40sXKnaqsG0ACyY0aDg==/109951164912221924.jpg?param=130y130%22%20class=%22j-img%22%20data-src=%22http://p1.music.126.net/v4V40sXKnaqsG0ACyY0aDg==/109951164912221924.jpg"},
		 { title: "知道爱", artist: "张国荣", mp3:"https://public.ch.files.1drv.com/y4mNIpnPJRBuMOgEP6Ex2d6Prf_xjo9j5QPEW9JuCWv6TVGA3iQIh9F8nOpNe28-4yla9rZ436gC53BPPaIsvniTG7TCwz7zl4hcHycFyYeGUbRGEpZp959s2_fGrE176V--I4jIJFndjeFD1gfl7V9pQ6OteaUW1m__lenZuQcvBt7QaFRR2FHpV7yjZji7oQGrQDuj2V2BgJceqzgnVaDk4Yzqqssu9c9t5Ch4sg-k_o?access_token=EwAQA61DBAAUzl/nWKUlBg14ZGcybuC4/OHFdfEAAY9MeR158qmslZxG3OLeGeYufpHTRe6nuDFfeYjiLP8SPekalD1mvXO89GdDE3bcfujPVQJTBJNMsNr702NPRoBSLtEEjRRWQVD5uxUqsktN/K5sbhBlS06pGNtpWL0oe6CvgrmC6OMPB3Q/JIJD6pNclU0DmRBBdER32W%2bMYlC3qdNW%2bilqlKkgcaIleAExkez9/KGMgOpLXG1TKzsmDh5rrOrr3Rbk34cTqWPaZ7U5YHEVlZRKTItOIo2C3nOWZ/1ibz%2bWwltoxxOl3wUsEoaKRnuFqVpLBPZAffLVomD7iv57g6uGF6zL5/HhbgRggc3TVgc9CS/jx/zVGsM17RIDZgAACCmuKaTOD/cG4AGZAJ78Tl5rc8ecb1Vne5MehrtGBtDoo%2b3sMM1wR0jK3DLEmVgT8CrZpjmMymc73zkcdv77h0SkLTXjlBJA4B1sakEHAZ/5Fr2pHzOlhDADBlkFmFrvFGxIk%2bnHXBIfX6tu6ChC/c1/1DiYOHG6t4HP7ti2aSoF/1pJgbfGqtg0CQdANZL9w0ySBL7/UCHXKQCBn8K3/jUuaunzB4NISkrfBT/JqkmJQQ/TXibhWb81hH/RzmcRJ1eTCapnYDJ%2bNte0GJodcXyokrIMHI%2b4%2bsGZERYDtKflLNq4wd7eWEwRcFpOGETwUgrvA3sGa/L3PATjbyFPZ3K/8mryZ40Be1BduX8giOadvOvXHye7PoxixD97xT/lKEJJc6qJeHpjG5yWyVwI6vcK2%2ba43fhgmBcUPeNGH2pkRozvLclmrWukCEq0t4lUD/9gcWR3wQFtOi2vm7/UiEVq5tk7S0PK9KmDNUOzA1ihcdeI5ZmQWPI4a0qh1UEbUZ80fM6psCPFTmBAEbcBJ134xsRevs/kSUgV6iAjr%2bGJzX4et%2b4fm0O/56sBzLO1KHRXJrIwayWfcrdvpW9k1YAw/uUiksZJGbERo5NTXPHRJQysN8P7CWjvxJhxuS%2bgh6nMze8fvGJvwFwCAg%3d%3d", poster: "http://p1.music.126.net/xnpkMFbfwrBqXcJTL0cfNw==/109951164261178305.jpg?param=130y130%22%20class=%22j-img%22%20data-src=%22http://p1.music.126.net/xnpkMFbfwrBqXcJTL0cfNw==/109951164261178305.jpg"}
	 ],
		{playlistOptions:{enableRemoveControls: true},
		swfPath: "js/",
		supplied: "webmv, ogv, m4v, oga, mp3",
		useStateClassSkin: true,
		autoBlur: false,
		smoothPlayBar: true,
		keyEnabled: true,
		audioFullScreen: true
	});
	
	//添加播放歌曲

	$("#latest li").find("a.playIcon").click(function() {
		var k=$(this).parent("li").index();
		myPlaylist.add({ 
			title:latest[k].title, artist:latest[k].artist,
			//free:true,
			mp3:latest[k].mp3,
			//oga:"",
			poster:latest[k].poster
		});
		myPlaylist.play(-1);
	});

	$("#popular li").find("a.playIcon").click(function() {
		var k=$(this).parent("li").index();
		myPlaylist.add({ 
			title:popular[k].title, artist:popular[k].artist,
			//free:true,
			mp3:popular[k].mp3,
			//oga:"",
			poster:popular[k].poster
		});
		myPlaylist.play(-1);
	});

	$("#rank li").find("a.playIcon").click(function() {
		var k=$(this).parent("li").index();
		myPlaylist.add({ 
			title:rank[k].title, artist:rank[k].artist,
			//free:true,
			mp3:rank[k].mp3,
			//oga:"",
			poster:rank[k].poster
		});
		myPlaylist.play(-1);
	});
	
$("#main li").find("a.playIcon").click(function () {
	var k = $(this).parent("li").index();
	myPlaylist.add({
		title: main[k].title, artist: main[k].artist,
		//free:true,
		mp3: main[k].mp3,
		//oga:"",
		poster: main[k].poster
	});
	myPlaylist.play(-1);
});
	
$("#spirit li").find("a.playIcon").click(function () {
	var k = $(this).parent("li").index();
	myPlaylist.add({
		title: spirit[k].title,
		artist: spirit[k].artist,
		//free:true,
		mp3: spirit[k].mp3,
		//oga:"",
		poster: spirit[k].poster
	});
	myPlaylist.play(-1);
});
$("#magic li").find("a.playIcon").click(function () {
	var m = $(this).parent("li").index();
	myPlaylist.add({
		title: magic[m].title,
		artist: magic[m].artist,
		//free:true,
		mp3: magic[m].mp3,
		//oga:"",
		poster: magic[m].poster
	});
	myPlaylist.play(-1);
});
	//添加歌曲结束


	//移除
	$("#playlist-remove").click(function() {
		myPlaylist.remove();		//（0 1 2 ... -2 -1）
	});
	
	$("#listRemove").click(function() {
		myPlaylist.remove();
	});

	// 上一曲、下一曲

	$("#playlist-next").click(function() {
		myPlaylist.next();
	});
	$("#playlist-previous").click(function() {
		myPlaylist.previous();
	});

	// 播放
	$("#playlist-play").click(function() {
		myPlaylist.play();
	});

	$("#playlist-play--2").click(function() {
		myPlaylist.play(-2);
	});
	$("#playlist-play--1").click(function() {
		myPlaylist.play(-1);
	});
	$("#playlist-play-0").click(function() {
		myPlaylist.play(0);
	});
	$("#playlist-play-1").click(function() {
		myPlaylist.play(1);
	});
	$("#playlist-play-2").click(function() {
		myPlaylist.play(2);
	});

	// 暂停

	$("#playlist-pause").click(function() {
		myPlaylist.pause();
	});



	//是否自动播放

	$("#playlist-option-autoPlay-true").click(function() {
		myPlaylist.option("autoPlay", true);
	});
	$("#playlist-option-autoPlay-false").click(function() {
		myPlaylist.option("autoPlay", false);
	});




	//播放器列表滚动条js------------------------------------------------------------------------------------------------
	var $bar=$(".bar");
	var $scrollBar=$(".scrollBar");
	var $maxH = $scrollBar.innerHeight() - $bar.outerHeight();
	var $ul=$(".jp-playlist ul");
	var $li=$(".jp-playlist ul li");
	var disY=0; 
	var iScale=0;
	var iSpeed = 0;
	
	$ul.height(1000);		//设置ul的高度
	
	$bar.mousedown(function (event){
		var event = event || window.event;
		disY = event.clientY - $(this).position().top;                
		$(document).bind("mousemove",function (event){
				var event = event || window.event;
				var iH = event.clientY - disY;                        
				iH <= 0 && (iH = 0);
				iH >= $maxH && (iH = $maxH);
				$bar.css({top : iH + "px"});
				iScale = - iH/$maxH;
				$ul.css({top:iScale*($ul.height()-$(".jp-playlist-box").height())+"px"});	
				return false;
		});                
		$(document).bind("mouseup",function (){		
				$(document).unbind("mousemove");
				$(document).unbind("mouseup");
		});
		return false;
	});
	
	 //当鼠标移入，监听事件
	$(".jp-playlist-box").mouseover(function(){
			//鼠标滚轮
			addHandler(this, "mousewheel", mouseWheel);//IE
			addHandler(this, "DOMMouseScroll", mouseWheel);//标准
			return false;			
	});
	//绑定事件重写兼容
	 function addHandler(element, type, handler){
			return element.addEventListener ? element.addEventListener(type, handler, false) :
			element.attachEvent("on" + type, handler, false)
	}
	 //鼠标滚轮事件
	function mouseWheel(event){
		var event = event || window.event;
		if(event.wheelDelta) {//IE
				iSpeed = event.wheelDelta > 0 ? -3 : 3;
		}else if(event.detail) {//火孤
				iSpeed = event.detail < 0 ? -3 : 3;
		}
		move();
		
		//FF,绑定事件，阻止默认事件  
		if (event.preventDefault) {  
			event.preventDefault();  
		} 	
	} ;
	//滚轮 要执行的
	function move(){
		var iH=$bar.position().top;
		iH=iH+iSpeed;
		iH <= 0 && (iH = 0);
		iH >= $maxH && (iH = $maxH);
		$bar.css({top:iH+"px"});
		iScale = - iH/$maxH;
		$ul.css({top:iScale*($ul.height()-$(".jp-playlist-box").height())+"px"});
		return false;
	};
	//播放器列表滚动条js 结束------------------------------------------------
	
	
	
	//音乐播放器 收缩、展开----------------------------------------------
	var fold=true;//标识
	
	//页面加载时，播放器运动出来，延迟1秒，运动回去
	$(".jp-video").animate({left:0},"slow",function(){
		slideOut($(this));		
	}).delay(1000).animate({left:"-480px"},350,function(){
		slideIn($(this));	
	});
	
	//点击按钮运动出来，或运动回去
	$("#btnfold").mouseover(function(){
		if(fold){
			$(".jp-video").animate({left:"-480px"},350,function(){	
				slideIn($(this));
			});	
		}else{
			$(".jp-video").animate({left:0},350,function(){
				slideOut($(this));
			});	
		}
	});
	//封装按钮背景切换1
	function slideOut(obj){
		$("#btnfold").attr({"title":"点击收缩"});
		obj.find("span").css({"transform":"rotate(180deg)"});
		obj.find("span").css({"MozTransform":"rotate(180deg) translateX(2px)"});
		obj.find("span").css({"WebkitTransform":"rotate(180deg)"});
		fold=true;		
	};
	//封装按钮背景切换2
	function slideIn(obj){
		$("#btnfold").attr({"title":"点击展开"});	
		obj.find("span").css({"transform":"rotate(0deg)"});
		obj.find("span").css({"MozTransform":"rotate(0deg) translateX(-2px)"});
		obj.find("span").css({"WebkitTransform":"rotate(0deg)"});
		fold=false;	
	};
	
	//歌曲列表展开、收缩---------------------------------------------------
	var iOpen=false;
	$("#listClose").click(function(){
		if(iOpen){
			$(".jp-playlist-box").animate({height:0},100);
			$("#btnfold").css({top:"5px"});
			$("#listRemove").css({display:"none"});
			$(".scrollBar").css({display:"none"});
			$(".jp-video").animate({height:"94px",bottom:"20px"},100);
			iOpen=false;
		}else{
			$(".jp-playlist-box").animate({height:"80px"},100);
			$("#btnfold").css({top:"52px"});
			$("#listRemove").css({display:"block"});
			$(".scrollBar").css({display:"block"});
			$(".jp-video").animate({height:"175px",bottom:"20px"},100);
			iOpen=true;
		}
	});
	
	
	
	
	
	
	
	
	
	
	
	
