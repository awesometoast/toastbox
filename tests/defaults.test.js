describe('toastbox.setDefaults', function() {
  'use strict';

  // Store original defaults
  var originalDefaults;

  beforeEach(function() {
    // Store the current defaults before each test
    originalDefaults = {
      locale: 'en',
      backdrop: 'static',
      animate: true,
      className: null,
      closeButton: true,
      show: true
    };
    
    // Reset to known state
    toastbox.setDefaults(originalDefaults);
  });

  afterEach(function() {
    // Reset to original defaults
    toastbox.setDefaults(originalDefaults);
  });

  describe('setting defaults', function() {
    it('can set locale default', function() {
      toastbox.addLocale('de', {
        OK: 'OK',
        CANCEL: 'Abbrechen',
        CONFIRM: 'Bestätigen'
      });
      
      toastbox.setDefaults({ locale: 'de' });
      
      var dialog = toastbox.alert('Test');
      var button = dialog.querySelector('.modal-footer button');
      expect(button.textContent).to.equal('OK');
    });

    it('can set animate default', function() {
      toastbox.setDefaults({ animate: false });
      
      var dialog = toastbox.alert('Test');
      expect(dialog.classList.contains('fade')).to.be.false;
      
      toastbox.setDefaults({ animate: true });
      
      dialog = toastbox.alert('Test 2');
      expect(dialog.classList.contains('fade')).to.be.true;
    });

    it('can set className default', function() {
      toastbox.setDefaults({ className: 'my-default-class' });
      
      var dialog = toastbox.alert('Test');
      expect(dialog.classList.contains('my-default-class')).to.be.true;
    });

    it('can set closeButton default', function() {
      toastbox.setDefaults({ closeButton: false });
      
      var dialog = toastbox.alert('Test');
      expect(dialog.querySelector('.toastbox-close-button')).to.not.exist;
      
      toastbox.setDefaults({ closeButton: true });
      
      dialog = toastbox.alert('Test 2');
      expect(dialog.querySelector('.toastbox-close-button')).to.exist;
    });

    it('can set multiple defaults at once', function() {
      toastbox.setDefaults({
        animate: false,
        className: 'test-class',
        closeButton: false
      });
      
      var dialog = toastbox.alert('Test');
      
      expect(dialog.classList.contains('fade')).to.be.false;
      expect(dialog.classList.contains('test-class')).to.be.true;
      expect(dialog.querySelector('.toastbox-close-button')).to.not.exist;
    });

    it('dialog options override defaults', function() {
      toastbox.setDefaults({
        animate: false,
        className: 'default-class'
      });
      
      var dialog = toastbox.alert({
        message: 'Test',
        animate: true,
        className: 'override-class'
      });
      
      expect(dialog.classList.contains('fade')).to.be.true;
      expect(dialog.classList.contains('override-class')).to.be.true;
      expect(dialog.classList.contains('default-class')).to.be.false;
    });
  });

  describe('setDefaults with key-value', function() {
    it('can set single default with key-value', function() {
      toastbox.setDefaults('animate', false);
      
      var dialog = toastbox.alert('Test');
      expect(dialog.classList.contains('fade')).to.be.false;
    });
  });
});