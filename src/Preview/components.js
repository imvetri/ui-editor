[
  {
    "name": "ForgotPassword",
    "markup": "<div className=\"vsButton\"><button id=\"f123\">Forgot Password</button></div>",
    "events": [
      {
        "name": "onClick",
        "reducer": "state.show",
        "publishable": true,
        "publishName": "onPasswordForgotten",
        "id": "f123"
      }
    ],
    "state": "{\"show\":\"false\"}",
    "style": ".vsButton{\nfont-family: BentonSansBook,Helvetica,Arial,sans-serif;\ncolor: rgb(0, 0, 0);\n}\n\n\n.vsButton button{\nborder-color: #bf215d;\n    color: #fff;\n    background: #ef5f96;\nborder: 1px solid;\n}\n\n.vsButton button:hover{\nborder-color: #bf215d;\n}",
    "children": [],
    "id": 218,
    "config": "{}",
    "idMarkup": "<div className=\"vsButton\" data-uuid=\"0\"><button id=\"f123\" data-uuid=\"1\">Forgot Password</button></div>"
  },
  {
    "name": "Modal",
    "markup": "<div class=\"modal\">\n<header>\n  <h3>Forgot Password</h3>\n    <button className=\"closeButton\">x</button>\n</header>\n<section class=\"content\">\n  content\n</section>\n<footer>footer</footer>\n</div>",
    "events": [],
    "state": "{}",
    "style": ".modal{\n  width:400px;\n  font-size:22px;\n  position:relative;\nbackground-color: white;\ncolor: black;\n  font-family: BentonSansLight,Helvetica,Arial,sans-serif;\n  font-weight:400;\n    line-height: 17px;\n    letter-spacing: .04em;\n    text-transform: inherit;\n    font-weight: 400;\n\n}\n\n.modal h3{\n  padding:1rem;\nfont-size:26px;\nfont-weight: 400;\n}\n\n.modal .content{\npadding:1rem;\nfont-weight: 400;\n}\n\n.modal footer{\npadding:1rem;\n  border:1px solid black;\nfont-weight: 400;\n}\n.modal header{\n  border:1px solid black;\nfont-weight: 400;\n}\n\n.modal .closeButton{\n  position: absolute;\n  right: 10px;\n  top: 20px;\n}\n\n.modal .content{\n    border:1px solid black;\nfont-weight: 400;\n}",
    "children": [],
    "id": 191,
    "config": "{}",
    "idMarkup": "<div class=\"modal\" data-uuid=\"0\">\n<header data-uuid=\"1\">\n  <h3 data-uuid=\"2\">Forgot Password</h3>\n    <button className=\"closeButton\" data-uuid=\"3\">x</button>\n</header>\n<section class=\"content\" data-uuid=\"4\">\n  content\n</section>\n<footer data-uuid=\"5\">footer</footer>\n</div>"
  },
  {
    "name": "CancelButton",
    "markup": "<div className=\"vsButton\"><button>{state.cancelButton}</button></div>",
    "events": [],
    "state": "{\"cancelButton\":\"Cancel\"}",
    "style": ".vsButton{\nfont-family: BentonSansBook,Helvetica,Arial,sans-serif;\ncolor: rgb(0, 0, 0);\n}\n\n\n.vsButton button{\nborder-color: #bf215d;\n    color: #fff;\n    background: #ef5f96;\nborder: 1px solid;\npadding: .5rem 2rem;\n}\n\n.vsButton button:hover{\nborder-color: #bf215d;\n}",
    "children": [],
    "id": 174,
    "config": "{}",
    "idMarkup": "<div className=\"vsButton\" data-uuid=\"0\"><button data-uuid=\"1\">{state.cancelButton}</button></div>"
  },
  {
    "name": "SubmitButton",
    "markup": "<div className=\"vsButton\"><button>{state.submitButton}</button></div>",
    "events": [],
    "state": "{\"submitButton\":\"Submit\"}",
    "style": ".vsButton{\nfont-family: BentonSansBook,Helvetica,Arial,sans-serif;\ncolor: rgb(0, 0, 0);\n}\n\n\n.vsButton button{\nborder-color: #bf215d;\n    color: #fff;\n    background: #ef5f96;\nborder: 1px solid;\npadding: .5rem 2rem;\n}\n\n.vsButton button:hover{\nborder-color: #bf215d;\n}",
    "children": [],
    "id": 134,
    "config": "{}",
    "idMarkup": "<div className=\"vsButton\" data-uuid=\"0\"><button data-uuid=\"1\">{state.submitButton}</button></div>"
  },
  {
    "name": "PrivacyAndPolicy",
    "markup": "<div class=\"privacyPolicy\">\n  Please enter the email address you used to create your account and we will send you a link to reset your password. See Privacy Policy\n</div>",
    "events": [],
    "state": "{}",
    "style": ".privacyPolicy{\nfont-family: BentonSansBook,Helvetica,Arial,sans-serif;\nfont-size: 11px;\n    line-height: 17px;\n    letter-spacing: .04em;\n    text-transform: inherit;\n    font-weight: 400;\n}",
    "children": [],
    "id": 843,
    "config": "{}",
    "idMarkup": "<div class=\"privacyPolicy\" data-uuid=\"0\">\n  Please enter the email address you used to create your account and we will send you a link to reset your password. See Privacy Policy\n</div>"
  },
  {
    "name": "TermsAndService",
    "markup": "<div class=\"privacyPolicy\">\n{state.variant}\n</div>",
    "events": [],
    "state": "{\"variant\":\"This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.\"}",
    "style": ".privacyPolicy{\nfont-family: BentonSansBook,Helvetica,Arial,sans-serif;\nfont-size: 11px;\n    line-height: 17px;\n    letter-spacing: .04em;\n    text-transform: inherit;\n    font-weight: 400;\n}",
    "children": [],
    "id": 796,
    "config": "{}",
    "idMarkup": "<div class=\"privacyPolicy\" data-uuid=\"0\">\n{state.variant}\n</div>"
  },
  {
    "name": "Form",
    "markup": "<form>\n</form>",
    "events": [],
    "state": "{}",
    "style": "",
    "children": [],
    "id": 390,
    "config": "{}",
    "idMarkup": "<form data-uuid=\"0\">\n</form>"
  },
  {
    "name": "EmailInput",
    "markup": "<span className=\"emailInput\">\n<input id=\"input\" className=\"email\" type=\"email\" value={state.email} placeholder=\"Email Address *\"/>\n</span>",
    "events": [
      {
        "name": "onChange",
        "reducer": "state.email = e.target.value",
        "publishable": "",
        "publishName": "",
        "id": "input"
      }
    ],
    "state": "{}",
    "style": ".emailInput .email{\npadding: .75rem;\nborder: 1px solid #e1e1e1;\nfont-family: BentonSansBook,Helvetica,Arial,sans-serif;\n    font-size: 16px;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box;\n    width: 100%;\n    border-radius: 0;\n    -webkit-box-shadow: none;\n    box-shadow: none;\n\n}",
    "children": [],
    "id": 991,
    "config": "{}",
    "idMarkup": "<span className=\"emailInput\" data-uuid=\"0\">\n<input id=\"input\" className=\"email\" type=\"email\" value={state.email} placeholder=\"Email Address *\"/>\n</span>"
  },
  {
    "name": "ResetPasswordForm",
    "markup": "<form><PrivacyAndPolicy></PrivacyAndPolicy><CancelButton></CancelButton><SubmitButton></SubmitButton><EmailInput></EmailInput><TermsAndService></TermsAndService>\n</form>",
    "events": [],
    "state": "{\"variant\":\"text\"}",
    "style": "",
    "children": [],
    "id": 364,
    "config": "{}",
    "idMarkup": "<form data-uuid=\"0\"><PrivacyAndPolicy data-uuid=\"1\"></PrivacyAndPolicy><CancelButton data-uuid=\"2\"></CancelButton><SubmitButton data-uuid=\"3\"></SubmitButton><EmailInput data-uuid=\"4\"></EmailInput><TermsAndService data-uuid=\"5\"></TermsAndService>\n</form>"
  },
  {
    "name": "VariantModal",
    "markup": "<div class=\"modal\">\n<header>\n  <h3>{state.title}</h3>\n    <button id=\"close\" className=\"closeButton\">x</button>\n</header>\n<section class=\"content\"><ResetPasswordForm></ResetPasswordForm>\n</section>\n<footer>{state.footer}</footer>\n</div>",
    "events": [
      {
        "name": "onClick",
        "reducer": "state.good = \"hide\"",
        "index": 0,
        "publishable": true,
        "publishName": "onCloseModal",
        "id": "close"
      }
    ],
    "state": "{\"title\":\"Forgot Password\",\"footer\":\"Copyrigts\"}",
    "style": ".modal{\n  width:400px;\n  font-size:22px;\n  position:relative;\nbackground-color: white;\ncolor: black;\n  font-family: BentonSansLight,Helvetica,Arial,sans-serif;\n  font-weight:400;\n    line-height: 17px;\n    letter-spacing: .04em;\n    text-transform: inherit;\n    font-weight: 400;\n\n}\n\n.modal h3{\n  padding:1rem;\nfont-size:26px;\nfont-weight: 400;\n}\n\n.modal .content{\npadding:1rem;\nfont-weight: 400;\n}\n\n.modal footer{\npadding:1rem;\n  border:1px solid black;\nfont-weight: 400;\n}\n.modal header{\n  border:1px solid black;\nfont-weight: 400;\n}\n\n.modal .closeButton{\n  position: absolute;\n  right: 10px;\n  top: 20px;\n}\n\n.modal .content{\n    border:1px solid black;\nfont-weight: 400;\n}",
    "children": [],
    "id": 191,
    "config": "{}",
    "idMarkup": "<div class=\"modal\" data-uuid=\"0\">\n<header data-uuid=\"1\">\n  <h3 data-uuid=\"2\">{state.title}</h3>\n    <button id=\"close\" className=\"closeButton\" data-uuid=\"3\">x</button>\n</header>\n<section class=\"content\" data-uuid=\"4\"><ResetPasswordForm data-uuid=\"5\"></ResetPasswordForm>\n</section>\n<footer data-uuid=\"6\">{state.footer}</footer>\n</div>",
    "variants": [
      "{\"title\":\"Forgot Password\",\"footer\":\"Copyrigts\"}",
      {
        "title": "Forgot Password",
        "footer": "Copyrigts",
        "good": "hide"
      }
    ]
  },
  {
    "name": "Page",
    "markup": "<div className=\"page\"><VariantModal></VariantModal><ForgotPassword></ForgotPassword></div>",
    "events": [
      {
        "name": "onPasswordForgotten",
        "reducer": "state.showModal = true;",
        "publishable": "",
        "publishName": "",
        "id": "ForgotPassword"
      },
      {
        "name": "onCloseModal",
        "reducer": "state.showModal = false;",
        "publishable": "",
        "publishName": "",
        "id": "VariantModal"
      }
    ],
    "state": "{\"showModal\":false}",
    "style": ".page{\nheight: 700px;\nwidth: 500px;\n\n}",
    "children": [],
    "id": 815,
    "config": "{\"VariantModal\":{\"showHideProp\":\"showModal\",\"override\":false},\"ForgotPasswordButton\":{\"showHideProp\":\"\",\"override\":false},\"ForgotPassword\":{\"showHideProp\":\"\",\"override\":false}}",
    "idMarkup": "<div className=\"page\" data-uuid=\"0\"><VariantModal data-uuid=\"1\"></VariantModal><ForgotPassword data-uuid=\"2\"></ForgotPassword></div>",
    "variants": [
      {
        "showModal": "false"
      },
      {
        "showModal": "false",
        "ForgotPassword": {
          "show": "false"
        }
      },
      {
        "showModal": true
      },
      {
        "showModal": "true",
        "ForgotPassword": {
          "show": "false"
        }
      },
      {
        "showModal": false
      },
      {
        "showModal": false,
        "ForgotPassword": {
          "show": "false"
        }
      },
      {
        "showModal": false,
        "VariantModal": {
          "title": "Forgot Password",
          "footer": "Copyrigts",
          "good": "hide"
        }
      }
    ]
  }
]