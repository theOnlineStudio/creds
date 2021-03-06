
$(function() {
	init();
});


var pages=[ 
	//INTRO PAGES //
	// Note - these pages correspond to the pages - comment out page to remove it from creds //
	"quotes", "b_multiSkilled", //"b_flexible",  "b_onCall", "b_quality", "b_budget", "b_consistent",  
	//MENU //
	"menu",
	//WORK PAGES 
	"advertising"
]

	
function init(){
pageAnimations('quotes');
	
	// set up the index to loop through the pages//
	var curPage = 0;
	// set up the var for determining where the menu finishes and work pages start //
	var work =0;
	
	getMenuNum();

	//LOAD IN ALL THE PAGES IN THE ARRAY IN THE ORDER THEY APPEAR
	for (i=0; i<pages.length; i++){
	if(i<=menuPos){
			$("#content").append($("<div class='"+pages[i]+"'>").load(pages[i]+".html"));
			intro = 1;
		}else{
			intro = 0;
		$("#content").append($("<div class='"+pages[i]+" work'>").load(pages[i]+".html"));
		}
	}
		
	console.log(pages[curPage]);

	// Next previous and menu buttons //
	
		function prevPage() {

			if(curPage < menuPos & curPage>0){
			console.log(menuPos +" & " + curPage);
			$('#page').css('background-image', 'url(/_img/weBelieve.png)');
			$('#page').animate({'background-position': '-5px 30px'});
			$('#left').show();
				$("#content").animate({left: '+=1024'}, 500, function(){
							$('.'+pages[curPage]+' h3').delay(0).fadeIn(500);
							$('.'+pages[curPage]+' p').delay(2000).fadeIn(1000);
					})
				} 

			if(curPage >= menuPos & curPage>0){
				$('#page').animate({'background-position': '-900px -120px'});

				$("#content").animate({
			
					left: '+=1024'}, 250, 
					function(){}
			
					)
				}
				if(curPage<0){
				curPage=0;
					$('#page').animate({'background-position': '-900px -120px'});
					$('#left').hide();
				}
				console.log(curPage); 
				curPage--; 

		};
					
	function nextPage() {
		curPage++; 
		if(curPage < menuPos){
			
			
				$('#page').animate({'background-position': '-5px 30px'});
		
				$("#content").animate({left: '-=1024'}, 500, function(){
							$('.'+pages[curPage]+' h3').delay(100).fadeIn(500);
							$('.'+pages[curPage]+' p').delay(1000).fadeIn(1000);
							})
				} 
		else{
			 
				$('#page').animate({'background-position': '-900px -120px'});
				$("#content").animate({left: '-=1024'}, 500)
				} 
		};
	
	
	function menu() 	{ $("#content").animate({left: menuPos*-1024}, 750, function(){console.log(index)});};
	
	$('#left').click(function()  {		prevPage();		console.log(pages[curPage]); 		logoAnim();		pageAnimations(pages[curPage]) });
	$('#right').click(function() { 		nextPage();		console.log(pages[curPage]); 		logoAnim();		pageAnimations(pages[curPage]) });


	$('h1').click(function()  { alert('menu');	curPage=menuPos; 	menu(); 	console.log(pages[curPage]); 		logoAnim();		pageAnimations(pages[menuPos]) });


	/*$("#page").swipe( {
		swipeRight:function(event, direction, distance, duration, fingerCount) {prevPage(); index--; console.log(pages[index]); logoAnim(); pageAnimations(pages[index])},
		swipeLeft:function(event, direction, distance, duration, fingerCount) {nextPage(); index++; console.log(pages[index]); logoAnim(); pageAnimations(pages[index]) },
			threshold:75
  		});*/

//Acertain where the menu is within the array and pass back a value so that it is always linked
	var menuPos;
	function getMenuNum() {
		var menuPosition=0;
		for (i=0;i<pages.length;i++) {
			if(pages[i]=="menu") {
				menuPosition = i;
				break;
			}
		}
		menuPos = menuPosition;
	}

//update page to correct poision from url 

if(window.location.search!= ''){
	var URL = window.location.search;
	var urlPos= URL.replace(/\?/g,'');
}

var urlPos;

getURLNo(urlPos, 0);

	function getURLNo(urlPos, speed) {
		var urlPosition=0;
			for (i=0;i<pages.length;i++) {
				if(pages[i]==urlPos) {
					urlPosition = i;
					break;
			}
		}

	pageAnimations(urlPos);
	
	urlPos = urlPosition;
	index = urlPosition;

	$("#content").animate({marginLeft: urlPos*-1024}, speed, function(){	logoAnim();});

	}
	function logoAnim(){
		if(index <= menuPos){
			$('h1').animate({
								"position": "absolute",
								"bottom": "10px",
								"right": "10px",
								"width": "251px", 
								"height": "50px",
								"background": "url(\/_img\/logo.png) no-repeat center center", 
								"text-indent": "1000%", 
								"white-space": "nowrap",	
								"overflow": "hidden", 
								})
		} 
		if(index > menuPos){
			$('h1').animate({
								"position": "absolute",
								"top": "10px",
								"right": "10px",
								"width": "251px", 
								"height": "50px",
								"background": "url(\/_img\/logo.png) no-repeat center center", 
								"text-indent": "1000%", 
								"white-space": "nowrap",	
								"overflow": "hidden", 

								}, 1000)
							}
		}
	
	
		
//PAGE SPECIFIC SCRIPTS//
	function pageAnimations(page){
	//alert(page);
		var thisVid = document.getElementById(page+'Vid');
	
		if(page=='quotes'){
			function quotes(){
					$('.quote').fadeOut(1000, function() {
					$('.quote').load('/_inc/quotes.html .q'+ Math.floor((Math.random()*6)+1) + '', function() {
						$('.quote').fadeIn(1000)
					})
				})     
			}
			setInterval(quotes, 5000);
		
		}

		if(page=='menu'){
		var linkName;
			$('#navigaion li').click(function() {
				linkName =($(this).attr('id')); getURLNo(linkName, 500); 
			})
		}

		if(page=='advertising'){
			 $('div .'+page+' .caseStudies').delay(500).animate({marginTop: "0px"}, 1000, function(){
				 //PLAY THE VIDEO CODE TO GO IN HERE//
				thisVid.currentTime =0;
				thisVid.play();
			 });
		}

	}		  
	function blockMove() {
      event.preventDefault() ;
}

	ontouchmove = function (){blockMove()
}
}