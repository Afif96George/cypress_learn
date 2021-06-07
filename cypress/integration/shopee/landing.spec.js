// context('Actions', () => {
//     beforeEach(() => {
//       cy.visit('https://shopee.com.my/')
//     })
// })

describe('My First Test', () => {
  it('visit shopee', () => {
    cy.visit('https://shopee.com.my/')
// choose language
    try {
      cy.get(':nth-child(2) > .shopee-button-outline').click() 
    } catch (error) {
      cy.get("this is dope")
    }
   
// close ads
    try {
      cy.get('.shopee-popup__close-btn').click()
    } catch (error) {
      cy.get("no popups")
    }
  })
  

    
  
})