# Toastbox - Bootstrap-powered alert, confirm and flexible dialog boxes

This is a fork of [Bootbox](https://github.com/bootboxjs/bootbox) by Nick Payne, specifically designed for Bootstrap 5.3+ while also removing the jQuery dependency.

## Why This Fork Exists

This fork was created to:
- Focus specifically on Bootstrap 5.3+ compatibility
- Remove the jQuery dependency for Bootstrap 5 sites that don't rely on it

We gratefully acknowledge the excellent foundation provided by Nick Payne's original Bootbox project. He should get a raise of some kind. Or at least a free donut (or other pastry of his choice). Or both. Why not both?

## Prerequisites

Toastbox requires Bootstrap 5.3 or higher. This package does not include Bootstrap -- you'll need to include that separately in your project.

## Examples

Open `examples/index.html` in your web browser. It's got:

- **Interactive Demos**: Click buttons to see all features in action. So interactive!
- **Complete Code Examples**: Copy-paste ready code for every dialog type. Easy.
- **~~An all-seeing orb~~**: It doesn't have that.

The examples use Bootstrap 5.3.7 from CDN and include `toastbox.css` for optimal styling. All examples demonstrate real-world usage patterns and are self-contained for easy testing.

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

### Composer
```bash
composer require awesometoast/toastbox
```

### Symfony 7 with AssetMapper

1. Install the package:
```bash
composer require awesometoast/toastbox
```

2. The package automatically registers with AssetMapper. You can import it in your JavaScript:
```javascript
import toastbox from '@awesometoast/toastbox';

// Or import with locales
import toastbox from '@awesometoast/toastbox/all';

// Or import locales separately
import toastbox from '@awesometoast/toastbox';
import '@awesometoast/toastbox/locales';
```

3. Use in your Twig templates:
```twig
{% block javascripts %}
    {{ parent() }}
    <script type="module">
        import toastbox from '@awesometoast/toastbox';

        // Your toastbox code here
        toastbox.alert("Hello from Symfony!");
    </script>
{% endblock %}
```

### Laravel / Static HTML

For non-Symfony projects, you can use the dist files directly:

1. If using Composer:
```bash
composer require awesometoast/toastbox
```

2. Include the JavaScript file:
```html
<!-- From vendor directory -->
<script src="vendor/awesometoast/toastbox/dist/toastbox.js"></script>

<!-- Or copy to your public assets -->
<script src="assets/js/toastbox.js"></script>
```

## Running Tests

Tests are run using [Karma](http://karma-runner.github.io/0.8/index.html) using the Mocha test adapter. To run the tests yourself, simply run:

```
npm install
```

within the project followed by:

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
