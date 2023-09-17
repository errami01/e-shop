import React from 'react'
import BarsMenu from './BarsMenu'
import { BrowserRouter } from 'react-router-dom'

describe('<BarsMenu />', () => {
  const data = ["tajin","kouskous","l7out","loubia"]
  beforeEach(()=>{
    cy.mount(
      <BrowserRouter>
        <BarsMenu isOpen={true}/>
      </BrowserRouter>)
    cy.intercept('GET', '/categories.json', data)
  })
  
  it('should be hidden', ()=>{
    cy.mount(
      <BrowserRouter>
        <BarsMenu isOpen={false}/>
      </BrowserRouter>)
    cy.getByData("barsMenuContainer").should('be.hidden')
  })
  it('should be visible', () => {
    cy.getByData("barsMenuContainer").should('be.visible')
  })
  it('should render the list of categories',()=>{
    cy.getByData("barsMenuContainer")
      .should('be.visible')
      .find('a')
      .should('have.length', data.length)
  })

})