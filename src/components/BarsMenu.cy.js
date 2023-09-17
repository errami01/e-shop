import React from 'react'
import BarsMenu from './BarsMenu'
import { BrowserRouter } from 'react-router-dom'

describe('<BarsMenu />', () => {
  beforeEach(()=>{
    // cy.intercept('GET', '/categories.json', {fixture:'categories.json'})
  })
  it('should be visible', () => {
    cy.mount(
      <BrowserRouter>
        <BarsMenu isOpen={true}/>
      </BrowserRouter>)
    cy.getByData("barsMenuContainer").should('be.visible')
  })
  it('should be hidden', ()=>{
    cy.mount(
      <BrowserRouter>
        <BarsMenu isOpen={false}/>
      </BrowserRouter>)
    cy.getByData("barsMenuContainer").should('be.hidden')
  })
})