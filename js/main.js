chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('main.html', {
    id: "mainJSONId",
    bounds: {
      width: 300,
      height: 500
    },
    minWidth: 200,
    minHeight: 350
  });
});