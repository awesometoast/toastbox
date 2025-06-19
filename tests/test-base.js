// Base test setup for vanilla JavaScript bootbox tests
(function() {
  'use strict';

  // Store original bootbox dialog method
  var originalDialog = toastbox.dialog;

  // Override toastbox.dialog to track created dialogs
  toastbox.dialog = function(options) {
    var dialog = originalDialog.call(this, options);
    
    // Add helper methods to dialog for testing
    dialog.find = function(selector) {
      return this.querySelector(selector);
    };
    
    dialog.findAll = function(selector) {
      return this.querySelectorAll(selector);
    };
    
    dialog.hasClass = function(className) {
      return this.classList.contains(className);
    };
    
    dialog.text = function() {
      return this.textContent || this.innerText || '';
    };
    
    dialog.attr = function(attribute) {
      return this.getAttribute(attribute);
    };
    
    // Ensure dialog is in DOM for testing
    if (!dialog.parentNode) {
      document.body.appendChild(dialog);
    }
    
    return dialog;
  };

  // Clean up helper
  window.cleanupModals = function() {
    var modals = document.querySelectorAll('.bootbox');
    modals.forEach(function(modal) {
      if (modal.parentNode) {
        modal.parentNode.removeChild(modal);
      }
    });
    var backdrops = document.querySelectorAll('.modal-backdrop');
    backdrops.forEach(function(backdrop) {
      if (backdrop.parentNode) {
        backdrop.parentNode.removeChild(backdrop);
      }
    });
  };

  // Add afterEach hook to clean up modals
  if (typeof afterEach !== 'undefined') {
    afterEach(function() {
      cleanupModals();
    });
  }
})();