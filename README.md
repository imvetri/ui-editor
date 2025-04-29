
## introduction

ui-editor is a design to code tool for web development.


## feedbacks/next steps/todo/roadmap

are most welcome. read further for contact details.



## pricing

I have not finalised pricing model yet, to sustain living and tool development, I have planned to put a one time fee for registered users/ subscribers.

1. Free to use, try, open issues, get features if you need for learning, practicing.
2. Get paid license for businesses or for learning purpose also you may get learners license to get education material.  www.ui-editor.com/pricing 
3. You may get registered or subscribe at www.ui-editor.com for news or feature releases
4. you may open www.ui-editor.com/pricing and click on registration fee of 11$ + Tax. 
5. you may open an issue here or www.ui-editor.com/contact-us or www.ui-editor.com/support to reach about questions, feedbacks, road map

## past work 

https://ui-editor.com/experiments

## getting started -setup

1. open the tool: open imvetri.github.io/ui-editor or start local server in 3000, download the repo files, open localhost:3000/html.html
2. import your designs: click the 'import' button and select your design file.
3. convert: right click a design box and click "Result".
4. preview and Test: review the prototype in the preview window and test the interactions.
5. you can use this part of your dev server and build apps in real time or you can set a toggle between html.html and result.html , merge them in a single file, to build apps in production or you can set this up in internal network for designers to design and you to check result in production.

## UI commands

1. create box - **press "Space"**
2. move box - **press Shift + Arrow keys**
3. resize box - **press Alt + Arrow keys**
4. keyboard navigate mode - default behaviour. **press arrow keys to navigate boxes.** up and down navigates parent, child. left and right navigates sibblings
5. mouse navigate mode - **press m** this allows to navigate canvas using mouse movement. mouse will be hidden, release mouse to reset this behaviour.
6. mouse mode - box resize and box move - **press m** move the canvas so that target box is in cross bar. **press Shift and move mouse** to move box. press **Alt and arrow** to adjust box size.
7. contextmenu - few more steps

## steps to convert design to protype / product - (goal)

1. import design - create a box and press **enter** add image path in prompt.
2. draw boxes on contents, inputs, clickable area.
3. define design token - open contextmeny-> Decorate ->add. a prompt opens for sequence of inputs in prompt are - token name, css property, css value.
4. apply design token - move focus to target box -> contextmenu->Decorate -> apply -> pick one from list
5. define data - contextmenu->data->add. a prompt opens for sequence of inputs in prompt - name, type (values or types. values are literal values, types are object type) you can also add rules for data types for complex business apps.
6. mark input box - to allow user to enter input. move focus to a box -> contextmenu -> mark-> input -> type - pick a type
7. mark output box - to show value or content from storage. move focus to box -> contextmenu-> mark -> output -> pick a type. or if the value is from some other storage, click ouput, and then navigate to storage box containing the value and then contextmenu-> mark-> output -> read from -> pick property name
8. mark storage - to allow user to configure the table index moving button. prev and next from stored table data. this allows to view a row in the frontend.
9. move - to allow user to move data from input box to storage. this helps to configure persistance with validation or without for typed input as well. to do this , go to target input box -> contextmenu -> move -> from. then navigate to storage box or create on prior then contextmenu-> move -> to. then configure when to move. go to input-> contextmenu -> move-> on -> Enter for submit after enter on input box. or navigate to box where end user may click -> contextmenu->move->on-> Click. This will move from input to storage on click of this box. Finally optional navigate to input box ->contextmenu->move->on->valid. this will save value only if data input matches input type.
10. show - to allow user to mark ui designer's variants of a component. go to happy path screen box -> contextmenu-> show-> this. go to where to show and contextmenu->show->here and contextmenu->show->on->valid. to show error message on invalid input then contextmenu->show->on>invalid. this includes data type
11. result- to allow user to test the designed app navigate to box -> right click-> look

## warnings / notes: 

1. to add more design token, currently there is a bug. "Wouldn't take long to fix it. Its just a design. Priority is the app functionality" - A web cant use this excuse anymore. Neither I can. "But customers are waiting". I totally understand. but for that, whatever is there is, lets share, take feedback.


## conclusion

Most open source tools are heavy on stack, so code generation is tricky - penpot
Figma, appsmith and other proprietary tools are influenced by AI to gain investors, hence they wont focus this challenge.
the technique is integratable with other existing tools.
uses own framework designed for this particular challenge.
uses html, few js files. no bundlers, no package.json.
crisp solution, light weight, easy for maintainance.

Thanks

## contact

Reach www.ui-editor.com/contact-us or www.ui-editor.com/support or click chat icon in www.ui-editor.com. for commercial liscense

Shield: [![CC BY-NC 4.0][cc-by-nc-shield]][cc-by-nc]

This work is licensed under a
[Creative Commons Attribution-NonCommercial 4.0 International License][cc-by-nc].

[![CC BY-NC 4.0][cc-by-nc-image]][cc-by-nc]

[cc-by-nc]: https://creativecommons.org/licenses/by-nc/4.0/
[cc-by-nc-image]: https://licensebuttons.net/l/by-nc/4.0/88x31.png
[cc-by-nc-shield]: https://img.shields.io/badge/License-CC%20BY--NC%204.0-lightgrey.svg
