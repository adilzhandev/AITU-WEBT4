# Assignment 4 — Forms and Validation

A simple website built with HTML, CSS, and JavaScript. It includes three pages, one for each assignment section, connected by a navigation bar. Each of the first two pages contains two task cards. Cards are displayed in two columns on desktop and one column on smaller screens. The registration page uses a centered card with fields that stack vertically on smaller screens. Tasks 2–4 use Bootstrap 5.3.8 through a CDN. No build tools or package installation are required.

## Pages

| Task | File | Description |
| --- | --- | --- |
| Task 0 | `index.html` | A basic contact form with name, email, message, and a Submit button. Every field has a label. |
| Task 1 | `index.html` | Built-in HTML5 validation using required, type, minlength, maxlength, and pattern. |
| Task 2 | `bootstrap.html` | A contact form with Bootstrap classes, a responsive row/col-md-6 grid, placeholders, and helper text. |
| Task 3 | `bootstrap.html` | Validation feedback using is-valid and is-invalid classes, with messages below the fields. |
| Task 4 | `registration.html` | A registration form with first name, last name, email, password confirmation, gender, hobbies, country, Submit, and Reset. |

`style.css` contains the shared styles. `script.js` validates the forms, checks whether passwords match, displays feedback, and clears the validation state when Reset is clicked.

## How to Run

Open `index.html` in a browser. An internet connection is required to load Bootstrap on the Task 2–4 pages.

If Python is installed, you can also start a local server from the project folder:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000` in your browser.

## Testing

1. Use the navigation bar to open all three sections and find all five tasks.
2. In Task 0, fill in the form and click Submit. Check that submitting or editing one form does not change the other form on the same page.
3. In Tasks 1 and 2, try empty fields, an invalid email address, and a message shorter than 10 characters. The browser should prevent submission.
4. In Task 3, submit an empty form to display red fields and error messages. Enter valid values to turn the fields green.
5. In Task 4, test a password shorter than 8 characters, passwords that do not match, and missing gender or country selections. Then complete the form correctly. Hobbies are optional, and multiple hobbies can be selected.
6. Click Reset to clear the values and all validation messages.
7. Reduce the browser width. Fields displayed side by side should stack vertically on smaller screens.

These are demonstration forms. They do not send emails, create accounts, or store or transmit the entered data. Use a sample password when testing.

## How Validation Works

Tasks 1 and 2 use HTML attributes to trigger the browser's built-in validation. In Tasks 3 and 4, `novalidate` disables the browser's default validation pop-ups, while JavaScript calls `checkValidity()` and adds Bootstrap feedback classes. `setCustomValidity()` checks whether the passwords match. `preventDefault()` prevents an actual form submission.

## Deployment

- Repository: [AITU-WEBT4](https://github.com/adilzhandev/AITU-WT-A4)
- Live website: [GitHub Pages](https://adilzhandev.github.io/AITU-WT-A4/)

The website is published from the root of the `main` branch using GitHub Pages. Both links are needed for submission. The student must complete the oral defense and live coding tasks in class.

## Documentation

- [Getting started with Bootstrap](https://getbootstrap.com/docs/5.3/getting-started/introduction/)
- [Bootstrap form validation](https://getbootstrap.com/docs/5.3/forms/validation/)
