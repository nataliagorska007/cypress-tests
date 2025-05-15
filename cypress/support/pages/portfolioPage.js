const selectors = {
    portfolioOption: '#w-dropdown-toggle-2',
    cookie: '#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll',
    portfolioMenuElement: '#w-dropdown-list-2 > .navbar-class > .navbar-menu > .navbar-big-button',
    portfolioHeader: '.h1-capsule-transparent',
    countrySelect: '.multi-select-country > .multi-select-field',
    country: 'label',
    cardBody: '.project-card-body',
}

const elements = {
    portfolio: 'portfolio',
    poland: 'Poland',
    netherlands: 'Netherlands',
    country: 'Country',
}

class PortfolioPage {
    clearCookie() {
      cy.get(selectors.cookie).should('be.visible').click()
    }
  
    clickPortfolioOptionInMenu() {
      cy.get(selectors.portfolioOption).click()
    }
  
    goToPortfolioPage() {
      cy.get(selectors.portfolioMenuElement).click()
    }

    verifyIfPortfolioPageIsDisplayed() {
      cy.get(selectors.portfolioHeader).should('be.visible').and('contain', elements.portfolio)
    }

    selectCountries() {
      cy.get(selectors.countrySelect).click()
      cy.get(selectors.country).contains(elements.poland).click()
      cy.get(selectors.countrySelect).click()
      cy.get(selectors.country).contains(elements.netherlands).click()
    }

    verifySearchedResults() {
      cy.get(selectors.cardBody).should('have.length', 4)
    }
  }
  
  export const portfolioPage = new PortfolioPage()