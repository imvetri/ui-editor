let sample = [
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
        "config": "{}"
    },
    {
        "name": "Modal",
        "markup": "<div class=\"modal\">\n<header>\n  <h3>Forgot Password</h3>\n    <button className=\"closeButton\" id=\"x\">x</button>\n</header>\n<section class=\"content\"><PrivacyAndPolicy></PrivacyAndPolicy>\n \n</section>\n<footer>footer</footer>\n</div>",
        "events": [
            {
                "name": "onClick",
                "reducer": "state.name=\"\";",
                "publishable": true,
                "publishName": "onCloseModal",
                "id": "x"
            }
        ],
        "state": "{}",
        "style": ".modal{\n  width:400px;\n  font-size:22px;\n  position:relative;\nbackground-color: white;\ncolor: black;\n  font-family: BentonSansLight,Helvetica,Arial,sans-serif;\n  font-weight:400;\n    line-height: 17px;\n    letter-spacing: .04em;\n    text-transform: inherit;\n    font-weight: 400;\n\n}\n\n.modal h3{\n  padding:1rem;\nfont-size:26px;\nfont-weight: 400;\n}\n\n.modal .content{\npadding:1rem;\nfont-weight: 400;\n}\n\n.modal footer{\npadding:1rem;\n  border:1px solid black;\nfont-weight: 400;\n}\n.modal header{\n  border:1px solid black;\nfont-weight: 400;\n}\n\n.modal .closeButton{\n  position: absolute;\n  right: 10px;\n  top: 20px;\n}\n\n.modal .content{\n    border:1px solid black;\nfont-weight: 400;\n}",
        "config": "{}"
    },
    {
        "name": "CancelButton",
        "markup": "<div className=\"vsButton\"><button>{state.cancelButton}</button></div>",
        "events": [],
        "state": "{\"cancelButton\":\"Cancel\"}",
        "style": ".vsButton{\nfont-family: BentonSansBook,Helvetica,Arial,sans-serif;\ncolor: rgb(0, 0, 0);\n}\n\n\n.vsButton button{\nborder-color: #bf215d;\n    color: #fff;\n    background: #ef5f96;\nborder: 1px solid;\npadding: .5rem 2rem;\n}\n\n.vsButton button:hover{\nborder-color: #bf215d;\n}",
        "config": "{}"
    },
    {
        "name": "SubmitButton",
        "markup": "<div className=\"vsButton\"><button>{state.submitButton}</button></div>",
        "events": [],
        "state": "{\"submitButton\":\"Submit\"}",
        "style": ".vsButton{\nfont-family: BentonSansBook,Helvetica,Arial,sans-serif;\ncolor: rgb(0, 0, 0);\n}\n\n\n.vsButton button{\nborder-color: #bf215d;\n    color: #fff;\n    background: #ef5f96;\nborder: 1px solid;\npadding: .5rem 2rem;\n}\n\n.vsButton button:hover{\nborder-color: #bf215d;\n}",
        "config": "{}"
    },
    {
        "name": "PrivacyAndPolicy",
        "markup": "<div class=\"privacyPolicy\">\n  Please enter the email address you used to create your account and we will send you a link to reset your password. See Privacy Policy\n</div>",
        "events": [],
        "state": "{}",
        "style": ".privacyPolicy{\nfont-family: BentonSansBook,Helvetica,Arial,sans-serif;\nfont-size: 11px;\n    line-height: 17px;\n    letter-spacing: .04em;\n    text-transform: inherit;\n    font-weight: 400;\n}",
        "config": "{}"
    },
    {
        "name": "TermsAndService",
        "markup": "<div class=\"privacyPolicy\">\n{state.variant}\n</div>",
        "events": [],
        "state": "{\"variant\":\"This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.\"}",
        "style": ".privacyPolicy{\nfont-family: BentonSansBook,Helvetica,Arial,sans-serif;\nfont-size: 11px;\n    line-height: 17px;\n    letter-spacing: .04em;\n    text-transform: inherit;\n    font-weight: 400;\n}",
        "config": "{}"
    },
    {
        "name": "Form",
        "markup": "<form className=\"vsfrm\">\n</form>",
        "events": [],
        "state": "{}",
        "style": ".vsfrm{\nheight:400px;\nwidth:400px;\n}",
        "config": "{}"
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
        "config": "{}"
    },
    {
        "name": "ResetPasswordForm",
        "markup": "<form><TermsAndService></TermsAndService><EmailInput></EmailInput><SubmitButton></SubmitButton><CancelButton></CancelButton><TermsAndService><PrivacyAndPolicy></PrivacyAndPolicy></TermsAndService>\n</form>",
        "events": [],
        "state": "{\"variant\":\"text\"}",
        "style": "form{\nheight:400px;}",
        "config": "{}"
    },
    {
        "name": "Page",
        "markup": "<div className=\"page\"><ForgotPassword></ForgotPassword><ResetPasswordModal></ResetPasswordModal></div>",
        "events": [
            {
                "name": "onCloseModal",
                "reducer": "state.ResetPasswordModal = [];",
                "publishable": "",
                "publishName": "",
                "id": "VariantModal"
            },
            {
                "name": "onClose",
                "reducer": "state.ResetPasswordModal = [];",
                "publishable": "",
                "publishName": "",
                "id": "ResetPasswordModal"
            },
            {
                "name": "onPasswordForgotten",
                "reducer": "state.ResetPasswordModal =[{title: \"Forgot Password\",\"footer\": \"Copyrigts\",\"show\": \"sd\"}]",
                "publishable": "",
                "publishName": "",
                "id": "ForgotPassword"
            }
        ],
        "state": "{\"showModal\":false,\"list\":[1,2,3,4,5],\"ResetPasswordModal\":[]}",
        "style": ".page{\nheight: 700px;\nwidth: 500px;\n\n}",
        "config": "{\"VariantModal\":{\"showHideProp\":\"showModal\",\"override\":false},\"ForgotPasswordButton\":{\"showHideProp\":\"\",\"override\":false},\"ForgotPassword\":{\"showHideProp\":\"\",\"override\":false,\"renderListProp\":\"\"},\"ResetPasswordModal\":{\"showHideProp\":\"showModal\",\"override\":true,\"renderListProp\":\"\"}}"
    },
    {
        "name": "ResetPasswordModal",
        "markup": "<div class=\"modal\">\n<header>\n  <h3>{state.title}</h3>\n    <button id=\"close\" className=\"closeButton\">x</button>\n</header>\n<section class=\"content\"><ResetPasswordForm></ResetPasswordForm>\n</section>\n<footer>{state.footer}</footer>\n</div>",
        "events": [
            {
                "name": "onClick",
                "reducer": "state.show = \"sd\";",
                "publishable": true,
                "publishName": "onClose",
                "id": "close"
            }
        ],
        "state": "{\"title\":\"Forgot Password\",\"footer\":\"Copyrigts\"}",
        "style": ".modal{\n  width:400px;\n  font-size:22px;\n  position:relative;\nbackground-color: white;\ncolor: black;\n  font-family: BentonSansLight,Helvetica,Arial,sans-serif;\n  font-weight:400;\n    line-height: 17px;\n    letter-spacing: .04em;\n    text-transform: inherit;\n    font-weight: 400;\n\n}\n\n.modal h3{\n  padding:1rem;\nfont-size:26px;\nfont-weight: 400;\n}\n\n.modal .content{\npadding:1rem;\nfont-weight: 400;\n}\n\n.modal footer{\npadding:1rem;\n  border:1px solid black;\nfont-weight: 400;\n}\n.modal header{\n  border:1px solid black;\nfont-weight: 400;\n}\n\n.modal .closeButton{\n  position: absolute;\n  right: 10px;\n  top: 20px;\n}\n\n.modal .content{\n    border:1px solid black;\nfont-weight: 400;\n}",
        "config": "{}"
    }
]

module.exports = {
    sample: sample
}