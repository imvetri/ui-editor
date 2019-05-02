describe('Component creation', function() {
    it('Creates component, previews component', function() {
    
      // Load ui-editor
      cy.visit('http://localhost:8080/')

      // Type element name
      cy.get('#elementName')
      .type('HeaderComponent')

      // Type element markup
      cy.get('#elementMarkup')
      .type('<h1 id="ID1">{{}state.name}</h1>')

      // Type element state
      cy.get('#elementState')
      .clear()
      .type('{{}"name":"hello world"}')
      
      // Click save.
      cy.get("#save").click()

      // Check component name is visible and created
      cy.contains(".element-list li", "HeaderComponent")

      // Check component has preview and export buttons
      cy.contains(".element-list li", "Preview")
      cy.contains(".element-list li", "Export")


      // Select the created component to open the events tab content.
      cy.get(".element-list li").click()

      // Select the tag
      cy.get(".events-tab ul input[type='radio']").check()

      // Type event name
      cy.get(".event input").type("onClick")

      // Type reducer
      cy.get(".event textarea").type("state.name='its new world now'")

      // Save it.
      cy.get("#saveEvent").click();

      // Click preview
      cy.get(".element-list .preview").click()

      // Check component rendered right.
      cy.contains("#ID1","hello world")

      // Click the tag which contains event
      cy.get("#ID1").click();

      // Check event worked or not. 
      cy.contains("#ID1","its new world now")
    })
  })