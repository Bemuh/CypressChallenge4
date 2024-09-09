import { getFieldValue } from "../support/utils";


describe('', () => {

    it('', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        getFieldValue('Username').then((username) => {
            cy.log(username);
            cy.get('[name="username"]').type(username);
        });

        getFieldValue('Password').then((password) => {
            cy.log(password);
            cy.get('[name="password"]').type(password);
        });

        cy.get('.orangehrm-login-button').click()
    });

})