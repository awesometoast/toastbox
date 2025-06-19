# Toastbox - Bootstrap powered alert, confirm and flexible dialog boxes

This is a fork of [Bootbox](https://github.com/bootboxjs/bootbox) by Nick Payne, specifically designed for Bootstrap 5.3+ while also removing the jQuery dependency.

## Why This Fork Exists

This fork was created to:
- Focus specifically on Bootstrap 5.3+ compatibility
- Remove the jQuery dependency for Bootstrap 5 sites that don't rely on it

We gratefully acknowledge the excellent foundation provided by Nick Payne's original Bootbox project. He should get a raise of some kind. Or at least a free donut (or other pastry of his choice). Or both.

## Installation

### CDN
```html
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
<script src="path/to/toastbox.js"></script>
```

### NPM
```bash
npm install toastbox
```

## Usage Examples

### Basic Alert
```javascript
// Simple message
toastbox.alert("Hello world!");

// With callback
toastbox.alert("Hello world!", function() {
    console.log("Alert closed!");
});

// With options
toastbox.alert({
    message: "Hello world!",
    title: "My Alert",
    callback: function() {
        console.log("Alert closed!");
    }
});
```

### Confirm Dialog
```javascript
// Simple confirm
toastbox.confirm("Are you sure?", function(result) {
    if (result) {
        console.log("User clicked OK");
    } else {
        console.log("User clicked Cancel");
    }
});

// With options
toastbox.confirm({
    message: "Are you sure you want to delete this item?",
    title: "Confirm Deletion",
    buttons: {
        cancel: {
            label: "Keep it"
        },
        confirm: {
            label: "Delete it",
            className: "btn-danger"
        }
    },
    callback: function(result) {
        if (result) {
            // Delete the item
        }
    }
});
```

### Prompt Dialog
```javascript
// Simple prompt
toastbox.prompt({
    title: "Enter your name",
    callback: function(result) {
        if (result !== null) {
            console.log("Hello " + result);
        }
    }
});

// Text input with validation
toastbox.prompt({
    title: "Enter your email",
    inputType: "email",
    placeholder: "your@email.com",
    required: true,
    callback: function(result) {
        if (result) {
            console.log("Email: " + result);
        }
    }
});

// Select dropdown
toastbox.prompt({
    title: "Choose your favorite color",
    inputType: "select",
    inputOptions: [
        { value: "red", text: "Red" },
        { value: "blue", text: "Blue" },
        { value: "green", text: "Green" }
    ],
    callback: function(result) {
        console.log("Selected color: " + result);
    }
});

// Textarea
toastbox.prompt({
    title: "Enter your message",
    inputType: "textarea",
    placeholder: "Type your message here...",
    callback: function(result) {
        console.log("Message: " + result);
    }
});
```

### Custom Dialog
```javascript
toastbox.dialog({
    message: "This is a custom dialog",
    title: "Custom Dialog",
    buttons: {
        cancel: {
            label: "Cancel",
            className: "btn-secondary"
        },
        save: {
            label: "Save",
            className: "btn-primary",
            callback: function() {
                console.log("Save clicked");
            }
        },
        delete: {
            label: "Delete",
            className: "btn-danger",
            callback: function() {
                console.log("Delete clicked");
            }
        }
    }
});
```

### Configuration Options

#### Global Defaults
```javascript
// Set global defaults
toastbox.setDefaults({
    locale: "en",
    animate: true,
    className: "my-custom-class",
    closeButton: true,
    backdrop: true
});
```

#### Localization
```javascript
// Add a custom locale
toastbox.addLocale("es", {
    OK: "Aceptar",
    CANCEL: "Cancelar",
    CONFIRM: "Confirmar"
});

// Set the locale
toastbox.setLocale("es");

// Remove a locale
toastbox.removeLocale("es");

// Get all available locales
var locales = toastbox.locales();
```

#### Dialog Sizing
```javascript
toastbox.alert({
    message: "Small dialog",
    size: "small"
});

toastbox.alert({
    message: "Large dialog",
    size: "large"
});
```

#### Custom CSS Classes
```javascript
toastbox.alert({
    message: "Custom styled dialog",
    className: "my-custom-dialog"
});
```

### Utility Methods
```javascript
// Hide all open dialogs
toastbox.hideAll();

// Get version
console.log(toastbox.VERSION);
```

### Event Handling
```javascript
// Dialog with custom event handling
var dialog = toastbox.dialog({
    message: "Dialog with events",
    buttons: {
        ok: {
            label: "OK",
            callback: function() {
                console.log("Dialog closing");
                return true; // Allow dialog to close
            }
        }
    }
});

// The dialog element is returned and can be manipulated
dialog.addEventListener('shown.bs.modal', function() {
    console.log("Dialog shown");
});

dialog.addEventListener('hidden.bs.modal', function() {
    console.log("Dialog hidden");
});
```

## Running Tests

Tests are run using [Karma](http://karma-runner.github.io/0.8/index.html) using the Mocha test adapter. To run the tests yourself, simply run

```
npm install
```

within the project followed by

```
npm test
```

Tests are run against the generated files contained in the `/dist` directory - regenerate those files and run the Karma tests by simply running Grunt:

```
grunt
```

## License

(The MIT License)

Copyright (C) 2011-2022 by Nick Payne <nick@kurai.co.uk> (original Bootbox)

Copyright (C) 2025 by Awesometoast (Toastbox fork modifications)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE
