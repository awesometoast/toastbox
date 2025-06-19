describe('toastbox.locales', function() {
  'use strict';

  describe('locale functions', function() {
    it('has default English locale', function() {
      var locales = toastbox.locales();
      expect(locales.en).to.exist;
      expect(locales.en.OK).to.equal('OK');
      expect(locales.en.CANCEL).to.equal('Cancel');
      expect(locales.en.CONFIRM).to.equal('OK');
    });

    it('can add new locale', function() {
      toastbox.addLocale('test', {
        OK: 'Test OK',
        CANCEL: 'Test Cancel',
        CONFIRM: 'Test Confirm'
      });
      
      var locales = toastbox.locales();
      expect(locales.test).to.exist;
      expect(locales.test.OK).to.equal('Test OK');
    });

    it('can set locale', function() {
      toastbox.addLocale('test2', {
        OK: 'OK Test',
        CANCEL: 'Cancel Test',
        CONFIRM: 'Confirm Test'
      });
      
      toastbox.setLocale('test2');
      
      // Create a dialog to test the locale was applied
      var dialog = toastbox.alert('Test');
      var button = dialog.querySelector('.modal-footer button');
      expect(button.textContent).to.equal('OK Test');
      
      // Reset to English
      toastbox.setLocale('en');
    });

    it('can remove locale', function() {
      toastbox.addLocale('removeme', {
        OK: 'OK',
        CANCEL: 'Cancel',
        CONFIRM: 'Confirm'
      });
      
      var locales = toastbox.locales();
      expect(locales.removeme).to.exist;
      
      toastbox.removeLocale('removeme');
      locales = toastbox.locales();
      expect(locales.removeme).to.not.exist;
    });

    it('cannot remove English locale', function() {
      expect(function() {
        toastbox.removeLocale('en');
      }).to.throw('"en" is used as the default and fallback locale and cannot be removed.');
    });
  });

  describe('locale in dialogs', function() {
    afterEach(function() {
      // Reset to English after each test
      toastbox.setLocale('en');
    });

    it('uses current locale for alert', function() {
      toastbox.addLocale('es', {
        OK: 'Aceptar',
        CANCEL: 'Cancelar',
        CONFIRM: 'Aceptar'
      });
      
      toastbox.setLocale('es');
      
      var dialog = toastbox.alert('Hola');
      var button = dialog.querySelector('.modal-footer button');
      expect(button.textContent).to.equal('Aceptar');
    });

    it('uses current locale for confirm', function() {
      toastbox.addLocale('fr', {
        OK: 'OK',
        CANCEL: 'Annuler',
        CONFIRM: 'Confirmer'
      });
      
      toastbox.setLocale('fr');
      
      var dialog = toastbox.confirm({
        message: 'Test',
        callback: function() {}
      });
      
      var buttons = dialog.querySelectorAll('.modal-footer button');
      expect(buttons[0].textContent).to.equal('Annuler');
      expect(buttons[1].textContent).to.equal('Confirmer');
    });
  });
});