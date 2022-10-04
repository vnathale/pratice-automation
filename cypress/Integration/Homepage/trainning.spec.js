




describe ('Realizando o acesso a Página de treinamento', ()=>{
    it ('Usuário deverá realizar acesso a Homepage e clicar no botão trainning', ()=>{
        
        cy.visit('https://automatenow.io/') 
        cy.viewport(1400, 900)
        cy.on('uncaught:exception', (err, runnable) => {return false})     
        cy.wait (10000) 
        cy.contains('Training').click()
        cy.wait (5000)
                
    })
})