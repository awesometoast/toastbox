describe('toastbox.dialog', function() {
  'use strict';

  describe('basic usage', function() {
    it('throws error without message', function() {
      expect(function() {
        toastbox.dialog({});
      }).to.throw('"message" option must not be null or an empty string');
    });

    it('creates basic dialog', function() {
      var dialog = toastbox.dialog({
        message: 'Test message'
      });
      
      expect(dialog).to.exist;
      expect(dialog.classList.contains('toastbox')).to.be.true;
      expect(dialog.classList.contains('modal')).to.be.true;
      expect(dialog.querySelector('.toastbox-body').textContent).to.equal('Test message');
    });

    it('adds title when provided', function() {
      var dialog = toastbox.dialog({
        message: 'Test',
        title: 'Dialog Title'
      });
      
      var title = dialog.querySelector('.modal-title');
      expect(title).to.exist;
      expect(title.textContent).to.equal('Dialog Title');
    });

    it('adds custom class when provided', function() {
      var dialog = toastbox.dialog({
        message: 'Test',
        className: 'my-custom-class'
      });
      
      expect(dialog.classList.contains('my-custom-class')).to.be.true;
    });
  });

  describe('buttons', function() {
    it('creates dialog without buttons', function() {
      var dialog = toastbox.dialog({
        message: 'No buttons'
      });
      
      var footer = dialog.querySelector('.modal-footer');
      expect(footer).to.not.exist;
    });

    it('creates custom buttons', function() {
      var dialog = toastbox.dialog({
        message: 'Test',
        buttons: {
          cancel: {
            label: 'Cancel',
            className: 'btn-danger'
          },
          save: {
            label: 'Save',
            className: 'btn-success'
          }
        }
      });
      
      var buttons = dialog.querySelectorAll('.modal-footer button');
      expect(buttons.length).to.equal(2);
      
      expect(buttons[0].textContent).to.equal('Cancel');
      expect(buttons[0].classList.contains('btn-danger')).to.be.true;
      
      expect(buttons[1].textContent).to.equal('Save');
      expect(buttons[1].classList.contains('btn-success')).to.be.true;
    });

    it('executes button callbacks', function(done) {
      var dialog = toastbox.dialog({
        message: 'Test',
        buttons: {
          test: {
            label: 'Test Button',
            callback: function() {
              done();
            }
          }
        }
      });
      
      var button = dialog.querySelector('.modal-footer button');
      button.click();
    });
  });

  describe('options', function() {
    it('respects closeButton option', function() {
      var dialogWith = toastbox.dialog({
        message: 'Test',
        closeButton: true
      });
      
      var dialogWithout = toastbox.dialog({
        message: 'Test',
        closeButton: false
      });
      
      expect(dialogWith.querySelector('.toastbox-close-button')).to.exist;
      expect(dialogWithout.querySelector('.toastbox-close-button')).to.not.exist;
    });

    it('respects size option', function() {
      var smallDialog = toastbox.dialog({
        message: 'Test',
        size: 'small'
      });
      
      var largeDialog = toastbox.dialog({
        message: 'Test',
        size: 'large'
      });
      
      expect(smallDialog.querySelector('.modal-sm')).to.exist;
      expect(largeDialog.querySelector('.modal-lg')).to.exist;
    });

    it('respects animate option', function() {
      var animated = toastbox.dialog({
        message: 'Test',
        animate: true
      });
      
      var notAnimated = toastbox.dialog({
        message: 'Test',
        animate: false
      });
      
      expect(animated.classList.contains('fade')).to.be.true;
      expect(notAnimated.classList.contains('fade')).to.be.false;
    });
  });
});