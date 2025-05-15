
class MainPage {
    visit() {
     cy.visit('/') 
    }

    loadPage() {
     cy.intercept('GET', '**', (req) => {
        req.on('response', (res) => {
        return new Promise(resolve => setTimeout(resolve, 1000)).then(() => res);
        });
     });
    }
  }

  export const mainPage = new MainPage()