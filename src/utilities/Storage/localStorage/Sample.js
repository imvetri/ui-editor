let sample =[
  {
    "name": "ForgotPassword",
    "markup": "<div className=\"vsButton\"><button id=\"f123\">{state.buttonText}</button></div>",
    "events": [
      {
        "name": "onClick",
        "reducer": "state.show",
        "publishable": true,
        "publishName": "onPasswordForgotten",
        "id": "f123"
      }
    ],
    "state": "{\"buttonText\":\"Forgot Password\"}",
    "style": ".vsButton{\nfont-family: BentonSansBook,Helvetica,Arial,sans-serif;\ncolor: rgb(0, 0, 0);\n}\n\n\n.vsButton button{\nborder-color: #bf215d;\n    color: #fff;\n    background: #ef5f96;\nborder: 1px solid;\n}\n\n.vsButton button:hover{\nborder-color: #bf215d;\n}",
    "config": "{}"
  },
  {
    "name": "Modal",
    "markup": "<div class=\"modal\">\n<header>\n  <h3>Forgot Password</h3>\n    <button className=\"closeButton\" id=\"x\">x</button>\n</header>\n<section class=\"content\">\n</section>\n<footer>footer</footer>\n</div>",
    "events": [
      {
        "name": "onClick",
        "reducer": "state.name=\"\";",
        "publishable": true,
        "publishName": "onCloseModal",
        "id": "x"
      }
    ],
    "state": "{\"variant\":\"initial\"}",
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
    "markup": "<div class=\"privacyPolicy\">\n\t{state.content}\n</div>",
    "events": [],
    "state": "{\n\t\"content\":\"Please enter the email address you used to create your account and we will send you a link to reset your password. See Privacy Policy\"\n}",
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
    "markup": "<span className={state.variant+\" emailInput\"}>\n\t\n    <input id=\"input\" className=\"email\" type=\"email\" \tvalue={state.email} />SOME\n\t\n    <label>{state.placeholder}</label>\n    \n</span>",
    "events": [
      {
        "name": "onChange",
        "reducer": "state.email = e.target.value",
        "publishable": "",
        "publishName": "",
        "id": "input"
      },
      {
        "name": "onFocus",
        "reducer": "state.variant = \"focussed\"",
        "index": 1,
        "publishable": "",
        "publishName": "",
        "id": "input"
      },
      {
        "name": "onBlur",
        "reducer": "if(state.email.length==0){\n    state.placeholder =\"Please enter an Email Address\"\n    state.variant = \"prompt_input\"\n}\nelse if(!state.email.includes(\"@\")){\n    state.placeholder =\"Please correct the Email Address\"\n\tstate.variant = \"prompt_correct_input\";\n}\nelse{\n\tstate.placeholder = \"Email Address\";\n    state.variant = \"valid_input\"\n}\n",
        "index": 2,
        "publishable": "",
        "publishName": "",
        "id": "input"
      }
    ],
    "state": "{\n\t\"email\":\"\",\n    \"variant\":\"initial\",\n    \"placeholder\":\"Email Address\"\n}",
    "style": ".emailInput{\n\tfont-family: BentonSansBook,Helvetica,Arial,sans-serif;\n\tposition:relative;\n}\n\n.emailInput .email{\n\tpadding: 17px;\n\tpadding-top: 25px;\n\tborder: 1px solid #e1e1e1;\n    font-size: 16px;\n    width: 100%;\n}\n\n.emailInput label{\n    font-size: 14px;\n    position:absolute;\n    left: 15px;\n    top: -18px;\n}\n\n.prompt_input.emailInput label{\n\tfont-size: 11px;\n   \tleft: 15px;\n    top: -18px;\n    color: #d91560;\n}\n\n.prompt_input .email{\n    color: #d91560;\n    border-color: #ef5f96;\n}\n\n.prompt_correct_input label{\n    color: #d91560;\n\tfont-size: 11px;\n    top: -28px;\n    left: 9px;\n}\n\n.prompt_correct_input .email{\n   color: #d91560;\n    border-color: #ef5f96;\n}\n\n.focussed.emailInput label{\n\tfont-size: 11px;\n    top: -28px;\n    left: 9px;\n}\n\n.valid_input label{\n\tfont-size: 11px;\n    top: -28px;\n    left: 9px;\n}\n\n.emailInput label {\n\ttransition: top .3s;\n}",
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
    "markup": "<div className=\"page\">\n\t<ForgotPassword></ForgotPassword>\n    <ResetPasswordModal></ResetPasswordModal>\n</div>",
    "events": [
      {
        "name": "onPasswordForgotten",
        "reducer": "state.ResetPasswordModal = [\n\t{\n    \ttitle: \"Forgot Password\",\n        footer: \"Copyrigts\",\n        show: \"sd\"\n    }\n];\n\nstate.variant = \"modal_opened\";",
        "index": 0,
        "publishable": "",
        "publishName": "",
        "id": "ForgotPassword"
      },
      {
        "name": "onClose",
        "reducer": "state.ResetPasswordModal = [];\nstate.variant = \"modal_closed\";",
        "index": 0,
        "publishable": "",
        "publishName": "",
        "id": "ResetPasswordModal"
      }
    ],
    "state": "{\n\t\"showModal\": false,\n    \"list\": [1,2,3,4,5],\n    \"ResetPasswordModal\": [],\n    \"variant\": \"initial\"\n}",
    "style": ".page{\n\theight: 700px;\n\twidth: 500px;\n}",
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
  },
  {
    "name": "Carousal",
    "markup": "<div className={state.variant}>\n\t<button className=\"left\" id=\"previous\">{\"<\"}</button>\n    <div className=\"window\">\n    \t<div className=\"content\">\n          {<div>{state.items[state.current]}</div>}\n\t    </div>\n    </div>\n    <button className=\"right\" id=\"next\">{\">\"}</button>\n</div>",
    "events": [
      {
        "name": "onClick",
        "reducer": "if(state.current===state.items.length-1){\n\tstate.current = 0;\n}\n\nelse {\n\tstate.current = state.current +1;\n}",
        "index": 0,
        "publishable": "",
        "publishName": "",
        "id": "next"
      },
      {
        "name": "onClick",
        "reducer": "if(state.current===0){\n\tstate.current = state.items.length-1;\n}\n\nelse {\n\tstate.current = state.current -1;\n}",
        "index": 1,
        "publishable": "",
        "publishName": "",
        "id": "previous"
      }
    ],
    "state": "{\"variant\":\"initial layoutComponent\",\"items\":[1,2,3,4,5,6],\"current\":0}",
    "style": ".layoutComponent button{\n\tcolor:red;\n    height:100%;\n    width: 40px;\n}\n\n.layoutComponent {\n\twidth:100%;\n    height:220px;\n    position:relative;\n}\n\n.layoutComponent *{\n  \tbox-sizing: border-box;\n}\n\n.layoutComponent .window {\n\twidth: 50%;\n    height:220px;\n    position: relative;\n    margin:auto;\n\toverflow:hidden;\n}\n\n.layoutComponent .content{\n\theight:220px;\n}\n\n.layoutComponent .content > div{\n\tdisplay:inline-block;\n    height:200px;\n    width:220px;\n    background-color:green;\n    margin:7px;\n}\n\n.layoutComponent .left{\n\tposition:absolute;\n    left:0px;\n    top:0px;\n}\n\n.layoutComponent .right{\n\tposition:absolute;\n    right:0px;\n    top:0px;\n}",
    "children": [],
    "id": 314,
    "config": "{\"ProductComponent\":{\"override\":false}}"
  },
  {
    "name": "Product",
    "markup": "<div className={state.variant} style={state.style} id=\"product\">\n\t{state.name}\n</div>\n",
    "events": [
      {
        "name": "onMouseEnter",
        "reducer": "state.variant = \"item on_hover\";\nstate.name = \"Buy now\";",
        "index": 0,
        "publishable": "",
        "publishName": "",
        "id": "product"
      },
      {
        "name": "onMouseLeave",
        "reducer": "state.variant = \"item initial\";\nstate.name = \"\";",
        "publishable": "",
        "publishName": "",
        "id": "product"
      }
    ],
    "state": "{\n\t\"name\" : \"\",\n    \"variant\" : \"item initial\",\n    \"style\" : {\n       \t\"backgroundImage\": \"$assets['1.jpeg']\"\n    }\n}",
    "style": ".item.initial {\n\tbackground-color:darkcyan;\n    background-size:contain;\n}\n\n.item.on_hover {\n\tbackground-color:teal;\n    background-size:auto;\n}\n\n.item{\n\twidth:400px;\n    height:400px;\n\ttext-align: center;\n\tvertical-align: middle;\n\tline-height: 200px;\n    margin : 12px;\n}",
    "children": [],
    "id": 949,
    "config": "{}"
  },
  {
    "name": "Carousal_Single",
    "markup": "<div className={state.variant}>\n\t<button className=\"left\" id=\"previous\">{\"<\"}</button>\n    <div className=\"content\"><Product></Product>\n    </div>\n    <button className=\"right\" id=\"next\">{\">\"}</button>\n</div>",
    "events": [
      {
        "name": "onClick",
        "reducer": "if(state.current===state.items.length-1){\n\tstate.current = 0;\n}\n\nelse {\n\tstate.current = state.current +1;\n}\n\nstate.Product = [state.items[state.current]]\n",
        "index": 0,
        "publishable": "",
        "publishName": "",
        "id": "next"
      },
      {
        "name": "onClick",
        "reducer": "if(state.current===0){\n\tstate.current = state.items.length-1;\n}\n\nelse {\n\tstate.current = state.current -1;\n}\n\nstate.Product = [state.items[state.current]]\n",
        "index": 1,
        "publishable": "",
        "publishName": "",
        "id": "previous"
      }
    ],
    "state": "{\n    \"variant\":\"initial Carousal_Single\",\n    \"items\":[\n        {\"name\":\"\",\"variant\":\"item initial\",\"style\":{\"backgroundImage\":\"$assets['1.jpeg']\"}},\n        {\"name\":\"\",\"variant\":\"item initial\",\"style\":{\"backgroundImage\":\"$assets['2.jpeg']\"}},\n        {\"name\":\"\",\"variant\":\"item initial\",\"style\":{\"backgroundImage\":\"$assets['3.jpeg']\"}},\n        {\"name\":\"\",\"variant\":\"item initial\",\"style\":{\"backgroundImage\":\"$assets['4.jpeg']\"}},\n        {\"name\":\"\",\"variant\":\"item initial\",\"style\":{\"backgroundImage\":\"$assets['5.jpeg']\"}},\n        {\"name\":\"\",\"variant\":\"item initial\",\"style\":{\"backgroundImage\":\"$assets['6.jpeg']\"}}\n    ],\n    \"current\":0,\n    \"Product\":[\n        {\"name\":\"\",\"variant\":\"item initial\",\"style\":{\"backgroundImage\":\"$assets['1.jpeg']\"}}\n    ]\n}",
    "style": ".Carousal_Single button{\n\tcolor:red;\n    height:220px;\n    width: 40px;\n    display:inline-block;\n}\n\n.Carousal_Single {\n    height:220px;\n}\n\n.Carousal_Single *{\n  \tbox-sizing: border-box;\n}\n\n.Carousal_Single .content{\n\theight:200px;\n    min-width:200px;\n    display:inline-block;\n\ttext-align: center;\n\tvertical-align: middle;\n\tline-height: 200px;\n}\n",
    "children": [],
    "id": 314,
    "config": "{\"ProductComponent\":{\"override\":false},\"Product\":{\"override\":true}}"
  },
  {
    "name": "Carousal_Multi",
    "markup": "<div className={state.variant}>\n\t<button className=\"left\" id=\"previous\">{\"<\"}</button>\n    \t<div  style={state.contentStyle} className=\"content\">\n        \t<Product></Product>\n\t    </div>\n    <button className=\"right\" id=\"next\">{\">\"}</button>\n</div>",
    "events": [
      {
        "name": "onClick",
        "reducer": "if(state.current===state.items.length-1){\n\tstate.current = 0;\n}\n\nelse {\n\tstate.current = state.current +1;\n}\n\nstate.contentStyle.left = -(state.current*200) + \"px\"",
        "index": 0,
        "publishable": "",
        "publishName": "",
        "id": "next"
      },
      {
        "name": "onClick",
        "reducer": "if(state.current===0){\n\tstate.current = state.items.length-1;\n}\n\nelse {\n\tstate.current = state.current -1;\n}\n\nstate.contentStyle.left = -(state.current*200) + \"px\"",
        "index": 1,
        "publishable": "",
        "publishName": "",
        "id": "previous"
      }
    ],
    "state": "{\n    \"variant\":\"initial Carousal_Double\",\n    \"items\":[\n        \n    ],\n    \"current\":0,\n    \"Product\":[\n        {\"name\":\"Product one\",\"variant\":\"item initial\",\"style\":{\"backgroundImage\":\"$assets['1.jpeg']\"}},\n        {\"name\":\"Product one\",\"variant\":\"item initial\",\"style\":{\"backgroundImage\":\"$assets['2.jpeg']\"}},\n        {\"name\":\"Product one\",\"variant\":\"item initial\",\"style\":{\"backgroundImage\":\"$assets['3.jpeg']\"}},\n        {\"name\":\"Product one\",\"variant\":\"item initial\",\"style\":{\"backgroundImage\":\"$assets['4.jpeg']\"}},\n        {\"name\":\"Product one\",\"variant\":\"item initial\",\"style\":{\"backgroundImage\":\"$assets['5.jpeg']\"}},\n        {\"name\":\"Product one\",\"variant\":\"item initial\",\"style\":{\"backgroundImage\":\"$assets['6.jpeg']\"}}],\n        \"contentStyle\" : {\n        \t\"left\": \"0px\"\n        }\n}",
    "style": ".Carousal_Double button{\n\tcolor:red;\n    height:220px;\n    width: 40px;\n    display:inline-block;\n}\n\n.Carousal_Double {\n    height:220px;\n    position: relative;\n}\n\n.Carousal_Double *{\n  \tbox-sizing: border-box;\n}\n\n.Carousal_Double .content{\n\theight:200px;\n    width: 1200px;\n\ttext-align: center;\n\tvertical-align: middle;\n\tline-height: 200px;\n    position: absolute;\n}\n\n.Carousal_Double .content > div{\n\tdisplay: inline-block;\n}\n\n.Carousal_Double #previous {\n\tposition: absolute;\n    left: 0px;\n    top:0px;\n    z-index: 1;\n}\n\n.Carousal_Double #next {\n\tposition: absolute;\n    right: 0px;\n    top:0px;\n}\n\n",
    "children": [],
    "id": 314,
    "config": "{\"ProductComponent\":{\"override\":false},\"Product\":{\"override\":true}}"
  },
  {
    "name": "Carousal_Circleback",
    "markup": "<div className={state.variant}>\n\t<button className=\"left\" id=\"previous\">{\"<\"}</button>\n    \t<div style={state.contentStyle} className=\"content\"><Product></Product>\n\t    </div>\n    <button className=\"right\" id=\"next\">{\">\"}</button>\n</div>",
    "events": [
      {
        "name": "onClick",
        "reducer": "\nstate.Product.push(state.Product.shift())\n",
        "index": 0,
        "publishable": "",
        "publishName": "",
        "id": "next"
      },
      {
        "name": "onClick",
        "reducer": "\nstate.Product.unshift(state.Product.pop())\n",
        "index": 1,
        "publishable": "",
        "publishName": "",
        "id": "previous"
      }
    ],
    "state": "{\n    \"variant\":\"initial Carousal_Double\",\n    \"items\":[\n        \n    ],\n    \"current\":0,\n    \"Product\":[\n        {\"name\":\"\",\"variant\":\"item initial\",\"style\":{\"backgroundImage\":\"$assets['1.jpeg']\"}},\n        {\"name\":\"\",\"variant\":\"item initial\",\"style\":{\"backgroundImage\":\"$assets['2.jpeg']\"}},\n        {\"name\":\"\",\"variant\":\"item initial\",\"style\":{\"backgroundImage\":\"$assets['3.jpeg']\"}},\n        {\"name\":\"\",\"variant\":\"item initial\",\"style\":{\"backgroundImage\":\"$assets['4.jpeg']\"}},\n        {\"name\":\"\",\"variant\":\"item initial\",\"style\":{\"backgroundImage\":\"$assets['5.jpeg']\"}},\n        {\"name\":\"\",\"variant\":\"item initial\",\"style\":{\"backgroundImage\":\"$assets['6.jpeg']\"}}],\n        \"contentStyle\" : {\n        \t\"left\": \"0px\"\n        }\n}",
    "style": ".Carousal_Double button{\n\tcolor:red;\n    height:40px;\n    width: 40px;\n    display:inline-block;\n\tborder-radius: 50%;\n}\n\n.Carousal_Double button:focus{\n    outline: 0;\n}\n\n.Carousal_Double {\n    height:440px;\n    position: relative;\n}\n\n.Carousal_Double *{\n  \tbox-sizing: border-box;\n}\n\n.Carousal_Double .content{\n\theight: 400px;\n    width: 3000px;\n\tvertical-align: middle;\n\tline-height: 200px;\n    position: absolute;\n}\n\n.Carousal_Double .content > div{\n\tdisplay: inline-block;\n}\n\n.Carousal_Double #previous {\n\tposition: absolute;\n    left: 0px;\n    top:200px;\n    z-index: 1;\n}\n\n.Carousal_Double #next {\n\tposition: absolute;\n    right: 0px;\n    top:200px;\n}\n\n",
    "children": [],
    "id": 314,
    "config": "{\"ProductComponent\":{\"override\":false},\"Product\":{\"override\":true}}"
  }
];
module.exports = {
  sample: sample
}