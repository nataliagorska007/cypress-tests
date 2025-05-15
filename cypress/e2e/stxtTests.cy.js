import { portfolioPage } from '../support/pages/portfolioPage'
import { mainPage } from '../support/pages/mainPage'

describe('STXT page', () => {
  beforeEach(() => {
    mainPage.visit()
    mainPage.loadPage()
  })

  it('Portfolio page', () => {
    portfolioPage.clearCookie()
    portfolioPage.clickPortfolioOptionInMenu()
    portfolioPage.goToPortfolioPage()
    portfolioPage.verifyIfPortfolioPageIsDisplayed()
    portfolioPage.selectCountries()
    portfolioPage.verifySearchedResults()
  })
})