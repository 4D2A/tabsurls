document.addEventListener("click", (e) => {

  function toClipboard(tabs) {
    navigator.clipboard.writeText(tabs.map(t => t.url).join("\n")).then(function(){});
  }

  function getTabs() {
    var query = {
      url: "<all_urls>"
    };
    // ---
    if (document.getElementById("filter_current").checked) {
      query.windowId = browser.windows.WINDOW_ID_CURRENT;
    }
    // ---
    browser.tabs.query(query).then(toClipboard);
  }

  if (e.target.title == "action_copy_clipboard") {
    getTabs();
  }
});