document.addEventListener('DOMContentLoaded', function () {
    // Restore options when options page is loaded
    chrome.storage.local.get(["preferredLanguage"], function(result) {
      document.getElementById(result.preferredLanguage).checked = true;
    });
  
    // Save options when form is submitted
    document.getElementById('prefLangForm').addEventListener('submit', function(e) {
      e.preventDefault();  // Prevent the form from submitting
      let selectedLanguage = document.querySelector('input[name="language"]:checked').value;
      chrome.storage.local.set({ "preferredLanguage": selectedLanguage }, function() {
        if (chrome.runtime.lastError) {
          console.log("Runtime error.");
        }
      });
    });
  });
  