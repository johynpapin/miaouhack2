link = document.createElement("link");
link.href = "https://rawgit.com/johynpapin/miaouhack2/master/blink.css";
link.type = "text/css";
link.rel = "stylesheet";
link.media = "screen,print";

document.getElementsByTagName("head")[0].appendChild(link);

document.body.setAttribute("style", "-webkit-transform: rotate(-90deg);");
document.body.setAttribute("style", "-moz-transform: rotate(-90deg);");
document.body.setAttribute("style", "-o-transform: rotate(-90deg);");
