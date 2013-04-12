var DivBean = function(){
    
}

DivBean.prototype.test = function(){
    var elem = document.getElementById(this.id);
    elem.innerHtml='tested';
}