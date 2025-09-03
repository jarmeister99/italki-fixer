const EXTENSION_NAME = "iTalki-Fixer";

function log(message) {
  console.log(`[${EXTENSION_NAME}]: ${message}`);
}

// Global state for elements to hide
const elementsToHide = [
  {
    elementName: "aiChat",
    hideCallable: function () {
      const chatContent = document.getElementById("chat-content");

      if (chatContent) {
        const parent = chatContent.parentElement;
        if (parent) {
          const grandparent = parent.parentElement;
          if (grandparent) {
            grandparent.style.display = "none";
            this.isHidden = true;
            log(`${this.elementName} successfully hidden`);
            return true;
          }
        }
      }
      return false;
    },
    isHidden: false,
  },
  {
    elementName: "flowyLevelUp",
    hideCallable: function () {
      const flowyLevelUp = document.querySelector(".flowy_level_up");
      if (flowyLevelUp) {
        flowyLevelUp.style.display = "none";
        this.isHidden = true;
        log(`${this.elementName} successfully hidden`);
        return true;
      }
      return false;
    },
    isHidden: false,
  },
  {
    elementName: "fishEntry",
    hideCallable: function () {
      const fishEntry = document.getElementById("fish-entry");
      if (fishEntry) {
        fishEntry.style.display = "none";
        this.isHidden = true;
        log(`${this.elementName} successfully hidden`);
        return true;
      }
      return false;
    },
    isHidden: false,
  },
];

function hideElements() {
  elementsToHide.forEach((element) => {
    if (!element.isHidden) {
      element.hideCallable.call(element);
    }
  });

  if (elementsToHide.every((element) => element.isHidden)) {
    log("All elements found and hidden, stopping poll");
    clearInterval(pollInterval);
  }
}

const pollInterval = setInterval(hideElements, 500);
hideElements();
