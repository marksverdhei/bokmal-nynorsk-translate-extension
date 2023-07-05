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

// Function that processes nodes
function processNodes(nodes) {
  nodes.forEach(node => {
      if (predictLanguage(node.nodeValue) === 'bokmål') {
          node.nodeValue = translate(node.nodeValue);
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
