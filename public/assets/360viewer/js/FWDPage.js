var mainProductHolder_el = null;
var productHolder_el = null;
var productHolderBackground_el = null;


var lightBoxViewer = null;
var openedWindow = null;
var mainWidth = 940;
var productHolderWidth = 940;
var productHolderHeight = 550;
var windowW = 0;
var windowH = 0;

function init(){

	//productHolderBackground_el = document.getElementById("productHolderBackground");
	productHolder_el = document.getElementById("productHolder");
	mainProductHolder_el = document.getElementById("mainProductHolder");

	positionStuff();
	setTimeout( function(){
		positionStuff();
		}, 50);
	
	if(window.addEventListener){
		window.addEventListener("resize", onResizeHandler);
	}else if(window.attachEvent){
		window.attachEvent("onresize", onResizeHandler);
	}
	
	if(document.addEventListener){
		document.addEventListener("fullscreenchange", onFullScreenChange);
		document.addEventListener("mozfullscreenchange", onFullScreenChange);
		document.addEventListener("webkitfullscreenchange", onFullScreenChange);
	}
	
	setupViwer();
}


//#####################################//
/* resize handler */
//#####################################//
function onResizeHandler(){
	positionStuff();
}

function onFullScreenChange(e){
	setTimeout(positionStuff, 50);
}

//#####################################//
/* position stuff */
//#####################################//
function positionStuff(){
	positionProductHolder();
}

//#####################################//
/* position product holder */
//#####################################//
function positionProductHolder(){
    windowW = document.getElementsByTagName('body')[0].clientWidth;

	var finalW = Math.min(windowW, mainWidth);
	var finalH = productHolderHeight;
	var finalX = parseInt((windowW - finalW)/2);
	
	if(FWDUtils.isMobile ){
		finalH = (finalW/productHolderWidth) * productHolderHeight;
	}

	productHolder_el.style.top = "9px";
	productHolder_el.style.width = finalW  + "px";
	productHolder_el.style.height = finalH  + "px";
}


//########################################//
/* Setup lightbox */
//#######################################//
function setupLightBox(){
	FWDViewer.setPrototype();
	lightBoxViewer = new FWDViewer({
		//----main----//
		playListAndSkinId:"viewerPlaylistAndSkin",
		displayType:"lightbox",
		preloaderText:"Loading MRI slides:",
		startDraggingMode:"rotate",
		showLargeImageVersionOnZoom:"yes",
		useEntireScreenFor3dObject:"no",
		stopRotationAtEnds:"no",
		addCorrectionForWebKit:"yes",
		addDragAndSpinSupport:"yes",
		startAtImage:20,
		imageWidth:720,
		imageHeight:411,
		zoomFactor:2,
		dragRotationSpeed:.7,
		dragAndSpinSpeed:1,
		buttonsRotationSpeed:300,
		slideShowDelay:300,
		backgroundColor:"#000000",
		preloaderFontColor:"#a2a3a3",
		preloaderBackgroundColor:"#000000",
		//----lightbox-----//
		lightBoxWidth:940,
		lightBoxHeight:550,
		lightBoxBackgroundOpacity:.85,
		lightBoxBackgroundColor:"#000000",
		//----controller----//
		buttons:"rotate, pan, roteteleft, rotateright, scrollbar, play, info, link, fullscreen",
		buttonsToolTips:"Rotate, Move/Pan, Previous slide, Next slide, Zoom level: , Play/Pause, Info, Custom link, Full screen/Normal screen",
		controllerPosition:"bottom",
		inverseNextAndPrevRotation:"yes",
		addKeyboardSupport:"yes",
		slideShowAutoPlay:"no",
		startSpaceBetweenButtons:5,
		spaceBetweenButtons:5,
		startSpaceForScrollBarButtons:15,
		startSpaceForScrollBar:0,
		controllerMaxWidth:924,
		controllerBackgroundOpacity:1,
		controllerOffsetY:8,
		scrollBarOffsetX:0,
		scrollBarHandlerToolTipOffsetY:-4,
		zoomInAndOutToolTipOffsetY:-1,
		buttonsToolTipOffsetY:4,
		link:"http://www.google.com",
		buttonToolTipFontColor:"#a2a3a3",
		//----navigator----//
		showNavigator:"yes",
		navigatorPosition:"topright",
		navigatorOffsetX:6,
		navigatorOffsetY:6,
		navigatorHandlerColor:"#FF0000",
		navigatorBorderColor:"#AAAAAA",
		//----info window----//
		infoWindowBackgroundOpacity:.6,
		infoWindowBackgroundColor:"#000000",
		infoWindowScrollBarColor:"#999999",
		//----markers-----//
		showMarkersInfo:"no",
		markerToolTipOffsetY:-1,
		toolTipWindowMaxWidth:500,
		//----context menu----//
		showScriptDeveloper:"no",
		contextMenuLabels:"Rotate, Move/Pan, Previous slide, Next slide, Zoom in/Zoom out, Play/Pause, Info, Custom link, Full screen/Normal screen",
		contextMenuBackgroundColor:"#4c4c4c",
		contextMenuBorderColor:"#727272",
		contextMenuSpacerColor:"#727272",
		contextMenuItemNormalColor:"#a2a3a3",
		contextMenuItemSelectedColor:"#FFFFFF",
		contextMenuItemDisabledColor:"#595b5b"
	});
	
	lightBoxViewer.addListener(FWDViewer.CLOSE_LIGHTBOX, lightBoxCloseDone);
}

function lightBoxCloseDone(){
	viewer.hibernate_bl = false;
	viewer.resizeHandler();
	FWDViewer.prototype.destroy();
	lightBoxViewer = null;
	FWDViewer.prototype = null;
}


