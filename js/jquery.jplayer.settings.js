<!--
$(function(){
	var playItem = 0,
		title=$('.jp-interface .jp-title'),
		jPlayer=$("#jplayer"),
		myPlayList = [
			{name:"Aunty Dele",mp3:"audio/auntydele.mpeg",ogg:"audio/auntydele.ogg"},
			{name:"Feel Alright",mp3:"audio/feel alright.mpeg",ogg:"audio/feel alright.ogg"},
			{name:"High Me",mp3:"audio/high me.mpeg",ogg:"audio/high me.ogg"},
			{name:"Holiday",mp3:"audio/holiday.mpeg",ogg:"audio/holiday.ogg"},
			{name:"Jarra",mp3:"audio/jarra.mpeg",ogg:"audio/jarra.ogg"},
			{name:"Ndo",mp3:"audio/ndo.mpeg",ogg:"audio/ndo.ogg"},
			{name:"Oluchi",mp3:"audio/oluchi.mpeg",ogg:"audio/oluchi.ogg"},
			{name:"Roasted Yam",mp3:"audio/roasted yam.mpeg",ogg:"audio/roasted yam.ogg"},
		],		
		jPlay=function(idx){
			if(typeof idx==typeof 0)
				jPlayer.jPlayer("setMedia",myPlayList[idx]).jPlayer('play')
			if(typeof idx==typeof '')
				jPlayer.jPlayer("setMedia",myPlayList[playItem=idx=='next'?(++playItem<myPlayList.length?playItem:0):(--playItem>=0?playItem:myPlayList.length-1)]).jPlayer('play')					
			title.text(myPlayList[playItem].name)
			Cufon.refresh()
		}

	jPlayer.jPlayer({
		ready: function() {
			jPlay(playItem)
		},
		ended:function(){
			jPlay('next')
		}
	})
	
	$(".jp-prev,.jp-next")
		.click( function() { 
			jPlay($(this).is('.jp-next')?'next':'prev')
			return false;
		})
	
});
-->