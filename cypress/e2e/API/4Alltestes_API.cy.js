describe('API Automation test', () => {

    context('Valida a API Lista de todos objetos', () => {
        
        //let baseUrlAPI = 'https://api.restful-api.dev/objects'

        it('LIST OF ALL OBJECTS (GET)', () => {
        
            cy.request({
                url: 'https://api.restful-api.dev/objects',
                method: 'GET',
                failOnStatusCode: false
            }).then(({ status, duration, body }) => {
                expect(status, 'Status code').to.eq(200)
                expect(duration, 'Duração').to.be.lessThan(20000)
                expect(body[0].id).to.eq('4')
                expect(body[0].name, 'Nome do Produto').to.eq('Apple iPhone 11, 64GB')
                expect(body[5].data.Price, 'Preço').to.eq('519.99')
                expect(body[5].data.Capacity, 'Capacidade').to.eq('256 GB')
                expect(body[5].name, 'Nome do Produto').to.eq('Apple iPad Air')
    
                cy.writeFile('cypress/fixtures/listaDeProdutos.json', body[0])
            })
    
    })
    
    context('Valida a lista de objetos por IDs', () => {
        
        it('LIST OF OBJECTS BY IDS (GET)', () => {

            cy.request({
                url: 'https://api.restful-api.dev/objects?id=3&id=5&id=10',
                method: 'GET',
                failOnStatusCode: false
            }).then(({ status, body }) => {
                expect(status, 'Status code').to.eq(200)
                expect(body[0].id).to.eq('3')
                expect(body[0].name, 'Nome do Produto').to.eq('Apple iPhone 12 Pro Max')
                expect(body[1].id).to.eq('5')
                expect(body[1].name, 'Nome do Produto').to.eq('Samsung Galaxy Z Fold2')
                expect(body[2].id).to.eq('10')
                expect(body[2].name, 'Nome do Produto').to.eq('Apple iPad Mini 5th Gen')
            })
    })
    
    context('Valida um objeto unico ', () => {

        it('SINGLE OBJECT (GET)', () => {

            let productId = '7'

            cy.request({
                url: 'https://api.restful-api.dev/objects/7',
                method: 'GET',
                failOnStatusCode: false
                }).then(({ status, body }) =>{
                    expect(status).to.eq(200)
                    expect(body.name, 'Nome do Produto').to.eq('Apple MacBook Pro 16')
            })
            
        })
        
    })    

    context('Adiciona um produto', () => {
        

        it('ADD OBJECT (POST)', () => {
            
            cy.request({
                url: 'https://api.restful-api.dev/objects',
                method: 'POST',
                failOnStatusCode: false,
                body: {
                    "name": "Xiaomi 15",
                    "data": {
                       "year": 2024,
                       "price": 1600.50,
                       "CPU model": "Snapdragon 8 gen 2",
                       "Hard disk size": "1 TB"
                    }
                 }
            }).then(({ status, body }) => {
                expect(status).to.eq(200)
                expect(body.name).to.eq('Xiaomi 15')
                expect(body.data.year).to.eq(2024)
                expect(body.data.Price).to.eq(1600.55)
                
            })
        })
    })    

    context('Deleta um produto', () => {

        it('DELETE OBJECT', () => {
            
            cy.request({
                url: 'https://api.restful-api.dev/objects',
                method: 'POST',
                failOnStatusCode: false,
                body: {
                    "name": "Xiaomi 25",
                    "data": {
                       "year": 2023,
                       "price": 1500,
                       "CPU model": "Snapdragon 8 gen ",
                       "Hard disk size": "500 GB"
                    }
                 }
            }).then(({ body }) => {
    
                cy.request({
                    url: 'https://api.restful-api.dev/objects/6',
                    method: 'DELETE',
                    failOnStatusCode: false
                }).then(({ status }) => {
                    expect(status).to.eq(200)
                })
        })

        
        })
    })


        })
    })
})