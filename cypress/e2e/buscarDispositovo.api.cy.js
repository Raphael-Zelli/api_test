///<reference types= "cypress" />

//FUNCIONALIDADE

describe("Buscar dispositivos",()=>{

    //CENÁRIOS
        it("Buscar todos os dispositivos",()=>{
        cy.request({
            url:"/objects",
            method:"GET"
        })
            .then((resultado)=>{
                expect(resultado.status).equal(200)
                resultado.body.forEach(element => {
                    expect(element.id).not.empty
                    expect(element.name).not.empty
                });
            })
    })

        it("Buscar dispositivo que não existes",()=>{
            const id ="14514521"

            cy.request({
                url:`/objects/${id}`,
                method:"GET",
                failOnStatusCode: false
            })
                .then((resultado)=>{
                    expect(resultado.status).equal(404)
                    expect(resultado.body.error).equal(`Oject with id=${id} was not found.`)
                })

        })
})