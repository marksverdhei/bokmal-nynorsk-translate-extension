// temporary setting
const preferredLanguage = "bokmål";

// Temporary, super-simple baseline in place of better
function predictLanguage(text) {
  // Convert text and word to lowercase for case-insensitive comparison
  if (text.toLowerCase().includes("ikkje")) {
      console.log("Predicted nynorsk")
      return "nynorsk";
  } else if (text.toLowerCase().includes("ikke")) {
      console.log("Predicted bokmål")
      return "bokmål"; // For now, default to bokmål
  } else {
      return "other";
  }
}

// This is a dummy function for translation
function translateToBokmal(text) {
  // Implement your translation logic here
  console.log("translating")
  return "nynorsk"; // For now, just return the same text
}

// This is a dummy function for translation
function translateToNynorsk(text) {
  // Implement your translation logic here
  console.log("translating")
  return "bokmål"; // For now, just return the same text
}

// Function that processes nodes
function processNodes(nodes) {
  nodes.forEach(node => {
    const preidctedLanguage = predictLanguage(node.nodeValue);
    if (preidctedLanguage === 'nynorsk' && preferredLanguage === 'bokmål') {
      node.nodeValue = translateToBokmal(node.nodeValue);
    } else if (preidctedLanguage === 'bokmål' && preferredLanguage === 'nynorsk') {
      node.nodeValue = translateToNynorsk(node.nodeValue);
    }
  });
}

// Run prediction function on each piece of text longer than 4 words
let textNodes = Array.from(document.querySelectorAll('body *'))
  .flatMap(element => Array.from(element.childNodes))
  .filter(node => node.nodeType === Node.TEXT_NODE);

processNodes(textNodes); // Run on initial DOM

// Observe for changes in DOM
let observer = new MutationObserver(mutations => {
  mutations.forEach(mutation => {
      let newNodes = Array.from(mutation.addedNodes);
      newNodes = newNodes
          .flatMap(node => Array.from(node.childNodes))
          .filter(node => node.nodeType === Node.TEXT_NODE);
      processNodes(newNodes); // Run on any new nodes
  });
});

// Configuration of the observer
let config = { attributes: true, childList: true, subtree: true };

// Pass in the target node, as well as the observer options
observer.observe(document.body, config);
