describe('toastbox.alert (simple)', function() {
  'use strict';

  describe('basic usage', function() {
    it('creates a dialog with message', function() {
      var dialog = toastbox.alert('Hello world!');
      expect(dialog).to.exist;
      // With the new behavior, messages for alerts without titles go in the header as a div, not h5.modal-title
      expect(dialog.querySelector('.toastbox-header-message').textContent).to.equal('Hello world!');
      expect(dialog.querySelector('.modal-title')).to.not.exist; // No h5.modal-title should exist
      expect(dialog.querySelector('.toastbox-body').innerHTML).to.equal(''); // Body should be empty
    });

    it('has OK button', function() {
      var dialog = toastbox.alert('Test');
      var button = dialog.querySelector('.modal-footer button');
      expect(button).to.exist;
      expect(button.textContent).to.equal('OK');
    });

    it('has toastbox-alert class', function() {
      var dialog = toastbox.alert('Test');
      expect(dialog.classList.contains('toastbox-alert')).to.be.true;
    });

    it('accepts options object', function() {
      var dialog = toastbox.alert({
        message: 'Custom message',
        title: 'Custom title'
      });
      expect(dialog.querySelector('.toastbox-body').textContent).to.equal('Custom message');
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

  describe('header message placement', function() {
    
    it('should place message in header when no title is provided', function() {
      var testMessage = 'Hello world! This should be in the header.';
      
      // Create alert without title
      var dialog = toastbox.alert(testMessage);
      
      // Check that modal header exists and contains the message in a div, not h5.modal-title
      var modalHeader = dialog.querySelector('.modal-header');
      var headerMessage = dialog.querySelector('.toastbox-header-message');
      var modalTitle = dialog.querySelector('.modal-title');
      var modalBody = dialog.querySelector('.toastbox-body');
      
      expect(modalHeader).to.exist;
      expect(headerMessage).to.exist;
      expect(headerMessage.textContent).to.equal(testMessage);
      expect(modalTitle).to.not.exist; // No h5.modal-title should exist when no title provided
      expect(modalBody.innerHTML).to.equal(''); // Body should be empty
      expect(modalBody.parentNode.style.display).to.equal('none'); // .modal-body should be hidden to prevent empty space
    });
    
    it('should still work normally when title is provided', function() {
      var testTitle = 'Alert Title';
      var testMessage = 'This is the message content.';
      
      // Create alert with title
      var dialog = toastbox.alert({
        title: testTitle,
        message: testMessage
      });
      
      // Check that title and message are in correct places
      var modalTitle = dialog.querySelector('.modal-title');
      var modalBody = dialog.querySelector('.toastbox-body');
      
      expect(modalTitle.textContent).to.equal(testTitle);
      expect(modalBody.textContent).to.equal(testMessage);
    });
    
  });
});