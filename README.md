
## introduction

ui-editor is a design to code tool for web development.

## todo 

docs, demos, examples, tutorials from basic top medium to advanced to scalable aspp



##  doc

Documentation ‐ part 1 ‐ draw boxes [click here ](https://github.com/imvetri/ui-editor/wiki/Documentation-%E2%80%90-part-1-%E2%80%90-draw-boxes)

Documentation ‐ part 2 ‐ design ‐ add & apply [click here ](https://github.com/imvetri/ui-editor/wiki/Documentation-%E2%80%90-part-2-%E2%80%90-design-%E2%80%90-add--&-apply)

Documentation ‐ part 3 ‐ mark input [click here ](https://github.com/imvetri/ui-editor/wiki/Documentation-%E2%80%90-part-3-%E2%80%90-mark-input)

Documentation ‐ part 4 ‐ input box [click here ](https://github.com/imvetri/ui-editor/wiki/Documentation-%E2%80%90-part-4-%E2%80%90-input-box)

Documentation ‐ part 5 ‐ storage box [click here ](https://github.com/imvetri/ui-editor/wiki/Documentation-%E2%80%90-part-5-%E2%80%90-storage-box)

Documentation ‐ part 6 ‐ navigate storage [click here ](https://github.com/imvetri/ui-editor/wiki/Documentation-%E2%80%90-part-6-%E2%80%90-navigate-storage)

Documentation ‐ part 7 ‐ output ‐ type text [click here ](https://github.com/imvetri/ui-editor/wiki/Documentation-%E2%80%90-part-7-%E2%80%90-output-%E2%80%90-type-text)

Documentation ‐ part 8 ‐ output type image [click here ](https://github.com/imvetri/ui-editor/wiki/Documentation-%E2%80%90-part-8-%E2%80%90-output-type-image)

Documentation ‐ part 9 ‐ output type ‐ from storage [click here ](https://github.com/imvetri/ui-editor/wiki/Documentation-%E2%80%90-part-9-%E2%80%90-output-type-%E2%80%90-from-storage)

Documentation ‐ part 10 ‐ data type ‐ unique [click here ](https://github.com/imvetri/ui-editor/wiki/Documentation-%E2%80%90-part-10-%E2%80%90-data-type-%E2%80%90-unique)

Documentation ‐ part 11 ‐ show invalid design variant for invalid input [click here ](https://github.com/imvetri/ui-editor/wiki/Documentation-%E2%80%90-part-11-%E2%80%90-show-invalid-design-variant-for-invalid-input)

## getting started -setup

1. open the tool: open imvetri.github.io/ui-editor or start local server in 3000, download the repo files, open localhost:3000/html.html
2. import your designs: click the 'import' button and select your design file.
3. convert: right click a design box and click "Result".
4. preview and Test: review the prototype in the preview window and test the interactions.
5. you can use this part of your dev server and build apps in real time or you can set a toggle between html.html and result.html , merge them in a single file, to build apps in production or you can set this up in internal network for designers to design and you to check result in production.

## ui commands

1. create box - **press "Space"**
2. move box - **press Shift + Arrow keys**
3. resize box - **press Alt + Arrow keys**
4. keyboard navigate mode - default behaviour. **press arrow keys to navigate boxes.** up and down navigates parent, child. left and right navigates sibblings
5. mouse mode speed - s - increase by 1. default 0. so remember to press s once. d resets s to 1
6. mouse navigate mode - **press m** this allows to navigate canvas using mouse movement. mouse will be hidden, release mouse to reset this behaviour.
7. mouse mode - box resize and box move - **press m** move the canvas so that target box is in cross bar. **press Shift and move mouse** to move box. press **Alt and arrow** to adjust box size.
8. contextmenu - few more steps

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
11.  result- to allow user to test the designed app navigate to box -> right click-> look




## contact

Reach www.ui-editor.com/contact-us or www.ui-editor.com/support or click chat icon in www.ui-editor.com. for commercial liscense

Shield: [![CC BY-NC 4.0][cc-by-nc-shield]][cc-by-nc]

This work is licensed under a
[Creative Commons Attribution-NonCommercial 4.0 International License][cc-by-nc].

[![CC BY-NC 4.0][cc-by-nc-image]][cc-by-nc]

[cc-by-nc]: https://creativecommons.org/licenses/by-nc/4.0/
[cc-by-nc-image]: https://licensebuttons.net/l/by-nc/4.0/88x31.png
[cc-by-nc-shield]: https://img.shields.io/badge/License-CC%20BY--NC%204.0-lightgrey.svg
