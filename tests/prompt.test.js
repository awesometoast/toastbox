describe('toastbox.prompt', function() {
  'use strict';

  describe('basic usage', function() {
    it('throws error without callback', function() {
      expect(function() {
        toastbox.prompt('Enter your name');
      }).to.throw('prompt requires a callback');
    });

    it('throws error without title', function() {
      expect(function() {
        toastbox.prompt({
          callback: function() {}
        });
      }).to.throw('prompt requires a title');
    });

    it('creates dialog with input', function() {
      var dialog = toastbox.prompt({
        title: 'Enter your name',
        callback: function() {}
      });
      
      expect(dialog).to.exist;
      expect(dialog.querySelector('form input[type="text"]')).to.exist;
      expect(dialog.querySelector('.modal-title').textContent).to.equal('Enter your name');
    });

    it('has Cancel and OK buttons', function() {
      var dialog = toastbox.prompt({
        title: 'Test',
        callback: function() {}
      });
      
      var buttons = dialog.querySelectorAll('.modal-footer button');
      expect(buttons.length).to.equal(2);
      expect(buttons[0].textContent).to.equal('Cancel');
      expect(buttons[1].textContent).to.equal('OK');
    });
  });

  describe('input types', function() {
    it('creates text input by default', function() {
      var dialog = toastbox.prompt({
        title: 'Test',
        callback: function() {}
      });
      
      var input = dialog.querySelector('form input');
      expect(input ? input.type : '').to.equal('text');
    });

    it('creates email input', function() {
      var dialog = toastbox.prompt({
        title: 'Test',
        inputType: 'email',
        callback: function() {}
      });
      
      var input = dialog.querySelector('form input');
      expect(input ? input.type : '').to.equal('email');
    });

    it('creates number input', function() {
      var dialog = toastbox.prompt({
        title: 'Test',
        inputType: 'number',
        callback: function() {}
      });
      
      var input = dialog.querySelector('form input');
      expect(input ? input.type : '').to.equal('number');
    });

    it('creates textarea', function() {
      var dialog = toastbox.prompt({
        title: 'Test',
        inputType: 'textarea',
        callback: function() {}
      });
      
      var textarea = dialog.querySelector('form textarea');
      expect(textarea).to.exist;
    });

    it('creates select', function() {
      var dialog = toastbox.prompt({
        title: 'Test',
        inputType: 'select',
        inputOptions: [
          { value: '1', text: 'Option 1' },
          { value: '2', text: 'Option 2' }
        ],
        callback: function() {}
      });
      
      var select = dialog.querySelector('form select');
      expect(select).to.exist;
      expect(select ? select.options.length : 0).to.equal(2);
    });
  });

  describe('callbacks', function() {
    it('calls callback with value when OK clicked', function(done) {
      var dialog = toastbox.prompt({
        title: 'Test',
        callback: function(result) {
          expect(result).to.equal('test value');
          done();
        }
      });
      
      var input = dialog.querySelector('form input');
      if (input) input.value = 'test value';
      
      var okButton = dialog.querySelector('.btn-primary');
      okButton.click();
    });

    it('calls callback with null when Cancel clicked', function(done) {
      var dialog = toastbox.prompt({
        title: 'Test',
        callback: function(result) {
          expect(result).to.be.null;
          done();
        }
      });
      
      var cancelButton = dialog.querySelector('.btn-secondary');
      cancelButton.click();
    });
  });

  describe('options', function() {
    it('sets default value', function() {
      var dialog = toastbox.prompt({
        title: 'Test',
        value: 'default value',
        callback: function() {}
      });
      
      var input = dialog.querySelector('form input');
      expect(input ? input.value : '').to.equal('default value');
    });

    it('sets placeholder', function() {
      var dialog = toastbox.prompt({
        title: 'Test',
        placeholder: 'Enter something...',
        callback: function() {}
      });
      
      var input = dialog.querySelector('form input');
      expect(input ? input.placeholder : '').to.equal('Enter something...');
    });

    it('sets required attribute', function() {
      var dialog = toastbox.prompt({
        title: 'Test',
        required: true,
        callback: function() {}
      });
      
      var input = dialog.querySelector('form input');
      expect(input ? input.required : false).to.be.true;
    });
  });
});