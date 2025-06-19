describe('toastbox.alert (simple)', function() {
  'use strict';

  describe('basic usage', function() {
    it('creates a dialog with message', function() {
      var dialog = toastbox.alert('Hello world!');
      expect(dialog).to.exist;
      expect(dialog.querySelector('.bootbox-body').textContent).to.equal('Hello world!');
    });

    it('has OK button', function() {
      var dialog = toastbox.alert('Test');
      var button = dialog.querySelector('.modal-footer button');
      expect(button).to.exist;
      expect(button.textContent).to.equal('OK');
    });

    it('has bootbox-alert class', function() {
      var dialog = toastbox.alert('Test');
      expect(dialog.classList.contains('bootbox-alert')).to.be.true;
    });

    it('accepts options object', function() {
      var dialog = toastbox.alert({
        message: 'Custom message',
        title: 'Custom title'
      });
      expect(dialog.querySelector('.bootbox-body').textContent).to.equal('Custom message');
      expect(dialog.querySelector('.modal-title').textContent).to.equal('Custom title');
    });
  });

  describe('callbacks', function() {
    it('calls callback when OK is clicked', function(done) {
      var called = false;
      var dialog = toastbox.alert({
        message: 'Test',
        callback: function() {
          called = true;
          done();
        }
      });
      
      var button = dialog.querySelector('.btn-primary');
      button.click();
    });
  });

  describe('custom buttons', function() {
    it('allows custom OK button text', function() {
      var dialog = toastbox.alert({
        message: 'Test',
        buttons: {
          ok: {
            label: 'Custom OK'
          }
        }
      });
      
      var button = dialog.querySelector('.modal-footer button');
      expect(button.textContent).to.equal('Custom OK');
    });
  });
});