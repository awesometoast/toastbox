// Quick fix for prompt tests - check where the input actually is
var dialog = toastbox.prompt({
  title: 'Test',
  callback: function() {}
});

console.log('Dialog structure:');
console.log('Form:', dialog.querySelector('form'));
console.log('Input in form:', dialog.querySelector('form input'));
console.log('Input in modal:', dialog.querySelector('.modal-body input'));