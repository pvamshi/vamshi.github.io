$(function() {
  var doc = document.documentElement;
  var body = document.body;
  var content = document.getElementById('main');
    var menu = document.getElementById('sidebar');

  var header = document.getElementById('header');

  var headings = content.querySelectorAll('h1, h2, h3, h4, h5, h6');

    function updateSidebar() {
      var top = doc && doc.scrollTop || body.scrollTop
      var headerHeight = header.offsetHeight
      if (top > headerHeight) {

        $(menu).css({
          position: 'fixed',
          top: 0,
          left: $(menu).offset().left
        })
      } else {
        $(menu).css({
          position: '',
          top: '',
          left: '',
        })
      }
      var last
      for (var i = 0; i < headings.length; i++) {
        var link = headings[i];
        if (link.offsetTop > top) {
          if (!last) last = link
          break
        } else {
          last = link
        }
      }
      if (last)
      setActive(last.id)
    }

    function setActive (id) {
      var previousActive = menu.querySelector('.active')
      var currentActive = typeof id === 'string'
        ? menu.querySelector('[href="#' + id + '"]')
        : id
      if (currentActive !== previousActive) {
        if (previousActive) previousActive.classList.remove('active')
        currentActive.classList.add('active');
      }
    }

  updateSidebar();
  window.addEventListener('scroll', updateSidebar);
  window.addEventListener('resize', updateSidebar);

  var sheet;
  function insertRule(selectors, rules) {
    var doc = document;

    if (typeof doc.styleSheets !== 'object') {
      return;
    }
    if (!sheet) {
      if (doc.createStyleSheet) {
        sheet = doc.createStyleSheet();
      } else {
        doc.getElementsByTagName('head')[0].appendChild(doc.createElement('style'));
        sheet = doc.styleSheets[doc.styleSheets.length - 1];
      }
    }
    if (!Array.isArray(selectors)) {
      selectors = [selectors];
    }
    if (sheet.addRule) {
      selectors.forEach(function(selector) {
        sheet.addRule(selector, rules);
      });
    } else {
      sheet.insertRule(selectors.join(',') + ' {' + rules + '}', sheet.cssRules.length);
    }
  }

});
