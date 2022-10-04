



describe ('Acessando Homepage da Página de Automação', ()=>{
    it ('Usuário deverá realizar acesso a Homepage do site com sucesso', ()=>{
        
        cy.visit('https://automatenow.io/') 
        cy.viewport(1400, 900)

        cy.on('uncaught:exception', (err, runnable) => {return false})     
        cy.wait (10000)
    }) 
       
})