


describe ('Realizando o acesso a Página de Sandbox', ()=>{
    it ('Usuário deverá realizar acesso a Homepage e clicar no botão Sandbox', ()=>{
        
        cy.visit('https://automatenow.io/') 
        cy.viewport(1400, 900)
        cy.on('uncaught:exception', (err, runnable) => {return false})     
        cy.wait (10000) 
        cy.contains('Sandbox').click()
        cy.wait (5000)
                
    })
})