function MapStore(container, key) {
  var clean = function(val) { return val; };
  var map = (container.getItem(key) || '').split(',').filter(clean);

  return {
    all: function(){
      return map.slice();
    },
    has: function(k){
      return map.indexOf(k) !== -1;
    },
    add: function(value){
      map.push(value);
      container.setItem(key, map.join(','));
    }
  };
}

function openItem(id) {
  document.getElementById(id).classList.add('opened');
}

(function(d){
  function all (selector) {
    return [].slice.call(d.querySelectorAll(selector));
  }

  function track(data) {
    typeof _paq !== 'undefined' && _paq.push(data);
  }

  d.body.classList.remove('no-js');

  var store = MapStore(localStorage, 'articles');

  store.all().forEach(openItem);

  all('.present a[rel="bookmark"]').forEach(function(el){
    el.addEventListener('click', function(event){
      track(['trackEvent', 'Article', 'Click', el.dataset.trackingId]);
    })
  });

  all('.present.openable').forEach(function(el){
    el.classList.remove('shine');
    el.addEventListener('click', function(event){
      var day = el.getAttribute('id');

      if (!store.has(day)) {
        track(['trackEvent', 'Article', 'OpenBox', day]);
        store.add(day);
        openItem(day);
      }
    });
  });
})(document);
