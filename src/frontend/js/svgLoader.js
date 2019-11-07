var object = document.getElementById('banana-contur-box');
var contentDocument = object.contentDocument;
var svgObject = contentDocument.getElementById('banana-contur');
var svgImage = document.createElementNS('http://www.w3.org/2000/svg','image')
svgImage.setAttribute('x','-50');
svgImage.setAttribute('y','0');
svgImage.setAttribute('width','auto');
svgImage.setAttribute('height','100%');
svgImage.setAttribute('mask','url(#mask)');
svgImage.setAttribute('xlink:href','slide1.jpg');
svgImage.setAttribute('id','image');
svgObject.appendChild(svgImage);