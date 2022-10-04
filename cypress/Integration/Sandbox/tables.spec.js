




describe ('Realizando oa busca de Pais com sucesso', ()=>{
    it ('Usuário deverá realizar a busca de um Pais com sucesso', ()=>{
        
        cy.visit('https://automatenow.io/') 
        cy.viewport(1400, 900)
        cy.on('uncaught:exception', (err, runnable) => {return false})     
        cy.wait (10000) 
        cy.contains('Sandbox').click()
        cy.wait (5000)
        cy.contains('wp-block-button__link wp-element-button').click()
        //Realizar Busca de País
        
        cy.contains('search').type('China')
        cy.wait (5000)          
                
    })
})