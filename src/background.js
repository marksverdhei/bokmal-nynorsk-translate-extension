chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.method === "getPreferredLanguage") {
      chrome.storage.local.get(["preferredLanguage"], function(result) {
        sendResponse({preferredLanguage: result.preferredLanguage});
      });
      return true;  // Required to return a response asynchronously
    }
  });
