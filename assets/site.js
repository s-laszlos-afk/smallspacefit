// Central affiliate config. Set AFFILIATE_TAG after the Amazon Associates
// account exists (e.g. "smallspacefit-20") — all Amazon links get it appended.
var AFFILIATE_TAG = "smallspace0b8-20";

(function () {
  if (AFFILIATE_TAG) {
    document.querySelectorAll('a[href*="amazon.com/dp/"]').forEach(function (a) {
      try {
        var u = new URL(a.href);
        u.searchParams.set("tag", AFFILIATE_TAG);
        a.href = u.toString();
      } catch (e) { /* leave link as-is */ }
    });
  }
  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
})();
