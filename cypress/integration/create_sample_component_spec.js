describe('Component creation', function() {
    it('Creates component, previews component', function() {
      cy.visit('http://localhost:8080/')
      cy.get('#elementName')
      .type('HeaderComponent')

      cy.get('#elementMarkup')
      .type('<h1 id="ID1">{{}state.name}</h1>')

      cy.get('#elementState')
      .clear()
      .type('{{}"name":"hello world"}')
      
      cy.get("#save").click()

      cy.contains(".element-list li", "HeaderComponent")
      cy.contains(".element-list li", "Preview")

      cy.contains(".element-list li", "Export")

      cy.get(".element-list li").click()

      cy.get(".events-tab ul input[type='radio']").check()

      cy.get(".event input").type("onClick")
      cy.get(".event textarea").type("state.name='its new world now'")

      cy.get("#saveEvent").click();

      cy.get(".element-list .preview").click()

      cy.get("#ID1").click();

      cy.contains("#ID1","its new world now")
    })
  })