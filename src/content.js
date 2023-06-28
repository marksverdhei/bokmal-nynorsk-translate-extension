// This is a dummy function for predicting language
function predictLanguage(text) {
    // Implement your language prediction logic here
    console.log("Predicted bokmål")
    return "bokmål"; // For now, just return bokmål
  }
  
  // This is a dummy function for translation
  function translate(text) {
    // Implement your translation logic here
    console.log("translating")
    return "nn to nb ->" + text; // For now, just return the same text
  }
  
  // Run prediction function on each piece of text longer than 4 words
  window.addEventListener('DOMContentLoaded', (event) => {
    let textNodes = Array.from(document.querySelectorAll('body *'))
      .flatMap(element => Array.from(element.childNodes))
      .filter(node => node.nodeType === Node.TEXT_NODE);
  
    textNodes.forEach(node => {
      let words = node.nodeValue.split(' ');
      if (words.length > 4 && predictLanguage(node.nodeValue) === 'bokmål') {
        node.nodeValue = translate(node.nodeValue);
      }
    });
  });
  