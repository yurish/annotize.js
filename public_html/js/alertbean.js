/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

var AlertBean = function(){

}
_an(AlertBean, "annotationFromBean");

AlertBean.prototype.test = function(){
    if(this.value){
        alert(this.value);
    } else 
        alert("It works!");
}