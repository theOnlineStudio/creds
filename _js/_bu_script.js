
$(function() {
	init();
});


var pages=[ 
	//INTRO PAGES //
	// Note - these pages correspond to the pages within the _page directory - comment out page to remove it from creds //
	"quotes",
	"currentMarket", 
	"options", 
	"us",
	//MENU //
	"menu",
	//WORK PAGES 
	//"html",       
	//"flash",
	//"nothing",
]

	var index = 0;
	
	function nextPage() {index = (index + 1) % pages.length; console.log(pages[index])}
	function prevPage() {index = (index - 1) % pages.length; console.log(pages[index])}

function init(){
	for (i=0; i<pages.length; i++){
		//console.log(pages[i]);
		$("#content").append($("<div class="+pages[i]+">").load(pages[i]+".html #content"));
		
		}
	
	var History = window.History;
	
	function updateUrl(e) {
		href = '/'+pages[index]+'.html'; 
		hrefNoSlash = href.replace(/\//g,'');
		History.pushState(null, null, href);
		changePage(); 
	};
	
		History.Adapter.bind(window,'statechange',function(){ // Note: We are using statechange instead of popstate
        var State = History.getState(); // Note: We are using History.getState() instead of event.state
        hrefNoSlash2 = State.hash.replace(/\//g,'')
        changePage();
        //alert(pages[index])
    });
	
	$('#left').click(function() {prevPage(); updateUrl();})
	$('#right').click(function() {nextPage(); updateUrl();})	
	$('#menu').click(function() {index=4; updateUrl();})
	
	function changePage(){$('#content').fadeOut(1000, function() {$('#content').load('/'+pages[index]+'.html #content', function() {$('#content').fadeIn(2000)})})}	


//PAGE SPECIFIC SCRIPTS//
function quotes(){
    $('.quotes').fadeOut(1000, function() {$('.quotes').load('/_inc/quotes.html .quote'+ Math.floor((Math.random()*6)+1) + '', function() {$('.quotes').fadeIn(1000)})})     
}

 //    setInterval(quotes, 2000);

	  function blockMove() {
      event.preventDefault() ;
}

	ontouchmove = function (){blockMove()
}
}
