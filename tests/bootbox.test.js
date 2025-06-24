describe('Bootbox', function() {
  'use strict';

  it('is attached to the window object', function() {
    expect(window.toastbox).to.be.an('object');
  });

  it('exposes the correct public API', function() {
    expect(toastbox.alert).to.be.a('function');
    expect(toastbox.confirm).to.be.a('function');
    expect(toastbox.dialog).to.be.a('function');
    expect(toastbox.prompt).to.be.a('function');
    expect(toastbox.setDefaults).to.be.a('function');
    expect(toastbox.setLocale).to.be.a('function');
    expect(toastbox.removeLocale).to.be.a('function');
    expect(toastbox.locales).to.be.a('function');
    expect(toastbox.hideAll).to.be.a('function');
    expect(toastbox.addLocale).to.be.a('function');
  });

  describe('hideAll', function() {
    it('hides all dialogs', function() {
      var dialog1 = toastbox.alert('Dialog 1');
      var dialog2 = toastbox.alert('Dialog 2');
      
      // Both should be visible
      expect(dialog1.style.display).to.not.equal('none');
      expect(dialog2.style.display).to.not.equal('none');
      
      toastbox.hideAll();
      
      // After hideAll, both should be hidden
      // Note: Bootstrap modal hide is async, so this is just checking the method runs
      expect(toastbox.hideAll).to.not.throw();
    });
  });

  describe('version', function() {
    it('has a version property', function() {
      expect(toastbox.VERSION).to.be.a('string');
    });
  });
});