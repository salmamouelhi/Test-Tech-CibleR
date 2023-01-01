let CibTicks = 0;
const CibInterval = setInterval(() => {
  CibTicks++;
  if (CibTicks >= 30) clearInterval(CibInterval);
  if (!document.getElementById('CiblerIframe')) return;

  function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }

  document.getElementById('CiblerIframe').src =
    'https://cdn.cibler.io/live/' + document.location.search
    + (document.location.search ? '&' : '?') + getCookie('CookieId');
  clearInterval(CibInterval);
}, 300);