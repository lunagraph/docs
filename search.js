// Search-only adaptation of mintlify/help-center-starter/search.js.
// Keep Mintlify's native entry mounted so it owns the search dialog and focus.
(function () {
  document.addEventListener('click', function (event) {
    if (!(event.target instanceof Element)) return;
    if (!event.target.closest('[data-help-search-trigger]')) return;

    var entries = [
      document.getElementById('search-bar-entry'),
      document.getElementById('search-bar-entry-mobile'),
    ];
    var entry = entries.find(function (element) {
      return element instanceof HTMLElement && element.offsetParent !== null;
    });
    if (entry) entry.click();
  });
})();
