/**
 * Toastbox Demo Functions
 * Interactive examples for all Toastbox features
 */

// Utility function to display results
function showResult(action, result) {
  const resultsDiv = document.getElementById('results');
  const timestamp = new Date().toLocaleTimeString();
  resultsDiv.innerHTML = `
    <strong>Demo Results:</strong>
    <span class="text-primary">[${timestamp}]</span>
    <strong>${action}:</strong> ${result}
  `;
}

// =============================================================================
// ALERT EXAMPLES
// =============================================================================

function basicAlert() {
  toastbox.alert("Hello World! This is a basic alert dialog.");
  showResult("Basic Alert", "Dialog shown");
}

function alertWithTitle() {
  toastbox.alert({
    title: "Success!",
    message: "Cool. This alert has both a title and message."
  });
  showResult("Alert with Title", "Dialog shown with title");
}

function alertWithCallback() {
  toastbox.alert("This alert has a callback function that will execute when dismissed.", function() {
    showResult("Alert with Callback", "Callback executed. Alert was dismissed");
  });
}

function alertCustomButton() {
  toastbox.alert({
    message: "This alert has a custom button label instead of the default 'OK'.",
    buttons: {
      ok: {
        label: "Cool",
        className: "btn-success"
      }
    }
  });
  showResult("Custom Button Alert", "Dialog shown with custom button");
}

// =============================================================================
// CONFIRM EXAMPLES
// =============================================================================

function basicConfirm() {
  toastbox.confirm("Are you sure about this?", function(result) {
    showResult("Basic Confirm", result ? "User confirmed" : "User cancelled");
  });
}

function confirmWithTitle() {
  toastbox.confirm({
    title: "Delete Item",
    message: "This action cannot be undone. Are you sure you want to delete this amazing item?",
    callback: function(result) {
      showResult("Confirm with Title", result ? "Item deleted" : "Deletion cancelled");
    }
  });
}

function confirmCustomButtons() {
  toastbox.confirm({
    title: "Save Changes",
    message: "Uh oh. You have unsaved changes.",
    buttons: {
      cancel: {
        label: "Discard Changes",
        className: "btn-outline-secondary"
      },
      confirm: {
        label: "Save & Continue",
        className: "btn-primary"
      }
    },
    callback: function(result) {
      showResult("Custom Button Confirm", result ? "Changes saved" : "Changes discarded");
    }
  });
}

function dangerousConfirm() {
  toastbox.confirm({
    title: "Super Dangerous Action",
    message: "This will create the Torment Nexus. This action can't be undone.",
    className: "text-danger",
    buttons: {
      cancel: {
        label: "Cancel",
        className: "btn-outline-secondary"
      },
      confirm: {
        label: "Activate Torment",
        className: "btn-danger"
      }
    },
    callback: function(result) {
      showResult("Dangerous Confirm", result ? "Torment Nexus activated. Profits galore." : "Operation cancelled. Our stock went down.");
    }
  });
}

// =============================================================================
// PROMPT EXAMPLES
// =============================================================================

function textPrompt() {
  toastbox.prompt({
    title: "Enter Your Name",
    message: "Please enter your full dang name:",
    placeholder: "e.g. Homestar Runner",
    callback: function(result) {
      showResult("Text Prompt", result ? `Name entered: "${result}"` : "Input cancelled");
    }
  });
}

function emailPrompt() {
  toastbox.prompt({
    title: "Email Address",
    message: "Please enter your email address:",
    inputType: "email",
    placeholder: "DJmankiewicz@homestarrunner.com",
    callback: function(result) {
      showResult("Email Prompt", result ? `Email entered: "${result}"` : "Input cancelled");
    }
  });
}

function numberPrompt() {
  toastbox.prompt({
    title: "Enter Your Age",
    message: "Please enter your age in years:",
    inputType: "number",
    min: 1,
    max: 120,
    placeholder: "25",
    callback: function(result) {
      showResult("Number Prompt", result ? `Age entered: ${result} years` : "Input cancelled");
    }
  });
}

function textareaPrompt() {
  toastbox.prompt({
    title: "Comments",
    message: "Please share mild feedback:",
    inputType: "textarea",
    placeholder: "Enter your highly tempered comments",
    rows: 4,
    callback: function(result) {
      showResult("Textarea Prompt", result ? `Comments: "${result.substring(0, 50)}${result.length > 50 ? '...' : ''}"` : "Input cancelled");
    }
  });
}

function selectPrompt() {
  const options = [
    { text: "Option 1 - Basic Plan", value: "basic" },
    { text: "Option 2 - Expensive Plan", value: "premium" },
    { text: "Option 3 - Outrageously Expensive Plan", value: "enterprise" }
  ];

  toastbox.prompt({
    title: "Choose Your Plan",
    message: "Select a subscription plan:",
    inputType: "select",
    inputOptions: options,
    callback: function(result) {
      showResult("Select Prompt", result ? `Plan selected: "${result}"` : "Selection cancelled");
    }
  });
}

function checkboxPrompt() {
  const options = [
    { text: "Email notifications", value: "email" },
    { text: "SMS notifications", value: "sms" },
    { text: "Deleteheads newsletter", value: "push" },
  ];

  toastbox.prompt({
    title: "Notification Preferences",
    message: "Select which notifications you'd like to receive:",
    inputType: "checkbox",
    inputOptions: options,
    callback: function(result) {
      if (result && result.length > 0) {
        showResult("Checkbox Prompt", `Selected: ${result.join(', ')}`);
      } else {
        showResult("Checkbox Prompt", "No options selected or cancelled");
      }
    }
  });
}

// =============================================================================
// CUSTOM DIALOG EXAMPLES
// =============================================================================

function customButtonsDialog() {
  toastbox.dialog({
    title: "Choose Your Fate",
    message: "What next?",
    buttons: {
      save: {
        label: "Save",
        className: "btn-success",
        callback: function() {
          showResult("Custom Dialog", "Save button clicked");
        }
      },
      edit: {
        label: "Edit",
        className: "btn-warning",
        callback: function() {
          showResult("Custom Dialog", "Edit button mashed");
        }
      },
      delete: {
        label: "Delete",
        className: "btn-danger",
        callback: function() {
          showResult("Custom Dialog", "Delete button clicked");
        }
      },
      cancel: {
        label: "Cancel",
        className: "btn-outline-secondary",
        callback: function() {
          showResult("Custom Dialog", "Cancel button clicked");
        }
      }
    }
  });
}

function largeDialog() {
  toastbox.dialog({
    title: "Large Dialog",
    message: `
      <h5>This is a large dialog</h5>
      <p>Large dialogs are cool for displaying more content, forms, or detailed information.</p>
      <ul>
        <li>More space for content</li>
        <li>Better for forms and tables</li>
        <li><s>Unlock large modals with a Toastbox Premium subscription!</s></li>
        <li>&#8593; That's not a thing</li>
      </ul>
      <p class="text-muted">Here are some more words.</p>
    `,
    size: "large",
    buttons: {
      ok: {
        label: "Close",
        className: "btn-primary"
      }
    }
  });
  showResult("Large Dialog", "Large-sized dialog displayed");
}

function smallDialog() {
  toastbox.dialog({
    title: "Small Dialog",
    message: "This is a compact dialog for quick notifications or simple confirmations.",
    size: "small",
    buttons: {
      ok: {
        label: "OK",
        className: "btn-primary"
      }
    }
  });
  showResult("Small Dialog", "Small-sized dialog displayed");
}

function centeredDialog() {
  toastbox.dialog({
    title: "Centered Dialog",
    message: "This dialog is vertically centered on the screen. Neat.",
    centerVertical: true,
    buttons: {
      ok: {
        label: "Nice!",
        className: "btn-primary"
      }
    }
  });
  showResult("Centered Dialog", "Vertically centered dialog displayed");
}

// =============================================================================
// CONFIGURATION EXAMPLES
// =============================================================================

function noAnimationDialog() {
  toastbox.alert({
    title: "No Animation",
    message: "This dialog appears instantly without the fade-in animation.",
    animate: false
  });
  showResult("No Animation", "Dialog shown without fade animation");
}

function customClassDialog() {
  toastbox.alert({
    title: "Custom Styling",
    message: "This dialog has custom CSS classes applied for unique styling.",
    className: "border-success shadow-lg",
    buttons: {
      ok: {
        label: "Stylish!",
        className: "btn-success"
      }
    }
  });
  showResult("Custom Class", "Dialog shown with custom CSS classes");
}

function noCloseDialog() {
  toastbox.alert({
    title: "No Close Button??",
    message: "This dialog doesn't have the X close button in the header. Users must use the OK button to dismiss it. Wow.",
    closeButton: false
  });
  showResult("No Close Button", "Dialog shown without X button");
}

function backdropDialog() {
  toastbox.alert({
    title: "Backdrop Demo",
    message: "Try clicking on the background (backdrop) behind this dialog. It should dismiss the dialog.",
    backdrop: true,
    onHide: function() {
      showResult("Backdrop Demo", "Dialog was dismissed (possibly by clicking backdrop)");
    }
  });
}

// =============================================================================
// DEMO INITIALIZATION
// =============================================================================

// Show welcome message when page loads
document.addEventListener('DOMContentLoaded', function() {
  showResult("Page Loaded", "Welcome! Try clicking any of the demo buttons above to see Toastbox in action.");

  // Set up some default styling for better demo experience
  toastbox.setDefaults({
    centerVertical: false,
    animate: true
  });
});

// Handle any errors gracefully
window.addEventListener('error', function(e) {
  console.error('Demo error:', e.error);
  showResult("Error", `Demo error: ${e.message}`);
});