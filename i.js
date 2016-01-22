file = location.pathname.split("/").pop();

link = document.createElement("link");
link.href = file.substr(0, file.lastIndexOf(".")) + ".css";
link.type = "text/css";
link.rel = "stylesheet";
link.media = "screen,print";

document.getElementsByTagName("head")[0].appendChild(link);
