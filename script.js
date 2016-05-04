(function() {

  'use strict';

  var btn = document.getElementById('request');
  var bio = document.getElementById('bio');

  var request = new XMLHttpRequest();

  request.onreadystatechange = function() {

    if (request.readyState === 4) {

      bio.style.border = '1px solid #e8e8e8';

      if (request.status === 200) {

        bio.innerHTML = request.responseText;
      }

      else {
        bio.innerHTML = 'An error occured during your request: ' + request.status + ' ' + request.statusText;
      }
    }
  }

  request.open('Get', 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/Bio.txt');

  btn.addEventListener('click', function() {

    this.style.display = 'none';

    request.send();
  });

})();
