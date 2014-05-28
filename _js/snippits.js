
var History = window.History;
	function updateUrl(e) {
		href = '/'+pages[index]+'.html'; 
		hrefNoSlash = href.replace(/\//g,'');
		History.pushState(null, null, href);
	};
	History.Adapter.bind(window,'statechange',function(){ // Note: We are using statechange instead of popstate
        var State = History.getState(); // Note: We are using History.getState() instead of event.state
        hrefNoSlash2 = State.hash.replace(/\//g,'')
        //alert(pages[index])
    });
    
    
function quotes(){
    $('.quotes').fadeOut(1000, function() {$('.quotes').load('/_inc/quotes.html .quote'+ Math.floor((Math.random()*6)+1) + '', function() {$('.quotes').fadeIn(1000)})})     
}

 //    setInterval(quotes, 2000);

	  function blockMove() {
      event.preventDefault() ;
}

	ontouchmove = function (){blockMove()
}