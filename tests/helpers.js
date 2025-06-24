// Test helpers for vanilla JavaScript
window.testHelpers = {
  hasClass: function(element, className) {
    return element.classList.contains(className);
  },
  
  find: function(element, selector) {
    return element.querySelector(selector);
  },
  
  findAll: function(element, selector) {
    return element.querySelectorAll(selector);
  },
  
  text: function(element) {
    return element.textContent || element.innerText || '';
  },
  
  attr: function(element, attribute) {
    return element.getAttribute(attribute);
  },
  
  trigger: function(element, eventName) {
    const event = new Event(eventName, { bubbles: true, cancelable: true });
    element.dispatchEvent(event);
  },
  
  click: function(element) {
    element.click();
  },
  
  val: function(element, value) {
    if (value !== undefined) {
      element.value = value;
    }
    return element.value;
  },
  
  isChecked: function(element) {
    return element.checked;
  },
  
  setChecked: function(element, checked) {
    element.checked = checked;
  },
  
  isVisible: function(element) {
    return element.style.display !== 'none' && element.offsetParent !== null;
  },
  
  remove: function(element) {
    if (element && element.parentNode) {
      element.parentNode.removeChild(element);
    }
  }
};