context('check the functionality of search module',()=> {
    before(()=> {
        //visit car rent app
        cy.visit('http://qalab.pl.tivixlabs.com/');
    });

    describe('select pickup date and drop off date',()=> {
        it('When user click on search button then car rent data should be display',()=> {
            cy.get('input[id="pickup"]').clear().type('2021-01-01');
            cy.get('input[id="dropoff"]').clear().type('2022-02-06');
            cy.get('.btn-primary').contains('Search').click();
            cy.get('table[id="search-results"]').should('exist');
        });
    });

    describe('pickup date and drop off date is empty',()=> {
        it('When user click on search button then car rent data should not display',()=> {
            cy.get('input[id="pickup"]').clear();
            cy.get('input[id="dropoff"]').clear();
            cy.get('.btn-primary').contains('Search').click();
            cy.get('table[id="search-results"]').should('not.exist');
        });
    });

    describe('Select pickup date is greater from drop off date ',()=> {
        it('When user click on search button then invalid error date message should be display',()=> {
            cy.get('input[id="pickup"]').clear().type('2022-02-06');
            cy.get('input[id="dropoff"]').clear().type('2021-01-01');
            cy.get('.btn-primary').contains('Search').click();
            cy.get('.alert').should('contain','Please enter a valid date!');
        });
    });

});