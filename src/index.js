(function() {
  function shallowCloner(templateObj){
    var prop, props = [];
    for (prop in templateObj) {
      props.push(prop);
    }
    var body = props.map(
      function (prop) {
        return 'this.' +prop + ' = origin.' + prop;
      }
    ).join(";");
    /*jshint -W054 */
    var Klass = new Function("origin", body);
    /*jshint +W054 */
    return function cloner(origin) {
      return new Klass(origin);
    };
  }

  function deepCloner(){}

  var ObjectCloner = {
    for: shallowCloner,
    deep: {
      for: deepCloner
    }
  };

  if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = ObjectCloner;
  }
  else {
    if (typeof define === 'function' && define.amd) {
      define([], function() {
        return ObjectCloner;
      });
    }
    else {
      window.ObjectCloner = ObjectCloner;
    }
  }
}());
