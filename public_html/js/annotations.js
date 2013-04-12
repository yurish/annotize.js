var _an, _autowired, _annotations;

(function() {
    var applicationContext = [];

    _annotations = function() {
        
    };
    _annotations.config = function(configObject) {
        for (var configItem in configObject) {
            var object = new configObject[configItem].bean();
            if (configObject[configItem].parameters) {
                for (opt in configObject[configItem].parameters) {
                    object[opt] = configObject[configItem].parameters[opt];
                }
            }
            pushToContext(configObject[configItem].id, object);
        }
    };

    _an = function(bean, id) {
        id = (id === null) ? generateBeanId() : id;
        var object = new bean();
        pushToContext(id, object);
    };

    _autowired = function(bean, id) {
        for (var i = 0; i <= applicationContext.length - 1; i++) {
            if (applicationContext[i].bean instanceof bean) {
                var currentBean = applicationContext[i].bean;
                if (id !== null) {
                    if (id === applicationContext[i].id) {
                        return currentBean;
                    }
                } else {
                    return currentBean;
                }


            }
        }
        console.log("No bean found in context");
    };

    function _generateBeanId() {
        return "generated";
    }

    function pushToContext(id, object) {
        applicationContext.push({"id": id, "bean": object});
    }



})(this);