describe('toastbox.confirm', function() {
  'use strict';

  describe('basic usage', function() {
    it('throws error without callback', function() {
      expect(function() {
        toastbox.confirm('Are you sure?');
      }).to.throw('confirm requires a callback');
    });

    it('creates dialog with message and callback', function() {
      var dialog = toastbox.confirm({
        message: 'Are you sure?',
        callback: function() {}
      });
      
      expect(dialog).to.exist;
      expect(dialog.querySelector('.toastbox-body').textContent).to.equal('Are you sure?');
    });

    it('has Cancel and OK buttons', function() {
      var dialog = toastbox.confirm({
        message: 'Test',
        callback: function() {}
      });
      
      var buttons = dialog.querySelectorAll('.modal-footer button');
      expect(buttons.length).to.equal(2);
      
      // Cancel should be first
      expect(buttons[0].textContent).to.equal('Cancel');
      expect(buttons[0].classList.contains('btn-secondary')).to.be.true;
      
      // OK should be second and primary
      expect(buttons[1].textContent).to.equal('OK');
      expect(buttons[1].classList.contains('btn-primary')).to.be.true;
    });

    it('has toastbox-confirm class', function() {
      var dialog = toastbox.confirm({
        message: 'Test',
        callback: function() {}
      });
      
      expect(dialog.classList.contains('toastbox-confirm')).to.be.true;
    });
  });

  describe('callbacks', function() {
    it('calls callback with true when OK clicked', function(done) {
      var dialog = toastbox.confirm({
        message: 'Test',
        callback: function(result) {
          expect(result).to.be.true;
          done();
        }
      });
      
      var okButton = dialog.querySelector('.btn-primary');
      okButton.click();
    });

    it('calls callback with false when Cancel clicked', function(done) {
      var dialog = toastbox.confirm({
        message: 'Test',
        callback: function(result) {
          expect(result).to.be.false;
          done();
        }
      });
      
      var cancelButton = dialog.querySelector('.btn-secondary');
      cancelButton.click();
    });
  });

  describe('custom buttons', function() {
    it('allows custom button labels', function() {
      var dialog = toastbox.confirm({
        message: 'Test',
        buttons: {
          cancel: {
            label: 'No way!'
          },
          confirm: {
            label: 'Yes please!'
          }
        },
        callback: function() {}
      });
      
      var buttons = dialog.querySelectorAll('.modal-footer button');
      expect(buttons[0].textContent).to.equal('No way!');
      expect(buttons[1].textContent).to.equal('Yes please!');
    });
  });
});