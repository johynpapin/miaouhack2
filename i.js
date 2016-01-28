var speed=50;                         // SPEED OF ANIMATION IN MILLISECONDS.
var change=5000;                   // MAX TIME BETWEEN DIRECTION CHANGES IN MILLISECONDS. 
var xmax=5;                             // MAX NUMBER OF PIXEL STEPS LEFT OR RIGHT.        
var ymax=3;                             // MAX NUMBER OF PIXEL STEPS UP OR DOWN.
var fishRurl="http://www.javascriptbank.com/javascript/background/Swimming_Fish/fish_right.gif";   // THE URL OF THE RIGHT-FACING FISH
var fishLurl="http://www.javascriptbank.com/javascript/background/Swimming_Fish/fish_left.gif";      // THE URL OF THE LEFT-FACING FISH
//var fishRurl = "http://www.icone-gif.com/gif/animaux/baleines-orques/baleines006.gif";
//var fishLurl = "http://www.icone-gif.com/gif/animaux/baleines-orques/baleines006.gif";

var w3c=(document.getElementById)?true:false;
var ns4=(document.layers)?true:false;
var ie4=(document.all && !w3c)?true:false;
var ie5=(document.all && w3c)?true:false;
var ns6=(w3c && navigator.appName.indexOf("Netscape")>=0)?true:false;
var w_x, w_y, bothfish,pich,picw;
var incrx=Math.floor(Math.random()*xmax);
var incry=Math.floor(Math.random()*ymax);
var xdir=true;
var ydir=true;
var imagex=new Image(); imagex.src=fishLurl;
var t=(ns4)? '<layer name="bothfish" top="-100" left="0">' : '<div id="bothfish" style="position:absolute; top:0px; left;0px; width:1px; height:1px; z-index:10000;">'; 
t+='<img src="'+fishRurl+'" border="0" name="fishpic">';
t+=(ns4)?'</layer>':'</div>';
$("body").append(t);

function getid(id){
if(ns4) return document.layers[id];
else if(ie4)return document.all[id];
else return document.getElementById(id);
}

function moveidto(id,x,y){
if(ns4)id.moveTo(x,y);
else{
id.style.left=x+'px';
id.style.top=y+'px';
}}

function moveidby(id,x,y){
if(ns4)id.moveBy(x,y);
else{
id.style.left=parseInt(id.style.left)+x+'px';
id.style.top=parseInt(id.style.top)+y+'px';
}}

function getwindowsize(){
if(ie4||ie5){
w_x=document.body.clientWidth;
w_y=document.body.clientHeight;
}else{
w_x=window.innerWidth-15;
w_y=window.innerHeight-15;
}}

function changedirs(){
if(Math.floor(Math.random()*5)>2)xdir=(Math.floor(Math.random()*2)==0);
if(Math.floor(Math.random()*5)>2)ydir=(Math.floor(Math.random()*2)==0);
if(Math.floor(Math.random()*5)>2)incrx=Math.floor(Math.random()*xmax);
if(Math.floor(Math.random()*5)>2)incry=Math.floor(Math.random()*ymax);
checkdirs();
setTimeout('changedirs()',Math.ceil(Math.random()*change));
}

function checkdirs(){
if(xdir) (ns4)? bothfish.document.images["fishpic"].src=fishRurl:document.images["fishpic"].src=fishRurl;
else (ns4)? bothfish.document.images["fishpic"].src=fishLurl:document.images["fishpic"].src=fishLurl;
}

function animate(){
tx=(ns4)?bothfish.left:parseInt(bothfish.style.left);
ty=(ns4)?bothfish.top:parseInt(bothfish.style.top);
if(ie4||ie5){
xo=document.body.scrollLeft;
yo=document.body.scrollTop;
}else{
xo=window.pageXOffset;
yo=window.pageYOffset;
}
if(ydir) if((ty+incry+pich)>(w_y+yo)){ydir=false; checkdirs(); moveidby(bothfish,0,-incry);}else{ moveidby(bothfish,0,incry); }
else if((ty-incry)<yo){ ydir=true; checkdirs(); moveidby(bothfish,0,incry); }else{ moveidby(bothfish,0,-incry); }
if(xdir) if((tx+incrx+picw)>(w_x+xo)){ xdir=false; checkdirs(); moveidby(bothfish,-incrx,0); }else{ moveidby(bothfish,incrx,0); }
else if((tx-incrx)<xo){ xdir=true; checkdirs(); moveidby(bothfish,incrx,0); }else{ moveidby(bothfish,-incrx,0); }
}

window.onresize=function(){
if(ns4)setTimeout('history.go(0)',400);
else getwindowsize();
}

window.onload=function(){
bothfish=getid('bothfish');
if(ns4){
picw=bothfish.document.images['fishpic'].width;
pich=bothfish.document.images['fishpic'].height;
}else{
picw=document.images['fishpic'].width;
pich=document.images['fishpic'].height;
}
getwindowsize();
moveidto(bothfish,(w_x-picw)/2,(w_y-pich)/2);
setInterval('animate()',speed);
changedirs();
}
