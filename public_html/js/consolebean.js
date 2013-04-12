/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


var ConsoleBean = function(){
    
    var value = "It Works!(From ConsoleBean)";
    
    var logValue = function(){
        console.log(value);
    }
    
    ConsoleBean.prototype.test = function(){
        logValue();
    };

    ConsoleBean.prototype.setValue = function(newValue){
        value = newValue;
    };
}

_an(ConsoleBean);

