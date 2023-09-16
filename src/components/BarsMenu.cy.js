import React from 'react'
import BarsMenu from './BarsMenu'
import { BrowserRouter } from 'react-router-dom'
const MockedBarsMenu = ()=>{
  <BrowserRouter>
    <BarsMenu />
  </BrowserRouter>
}

describe('<BarsMenu />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<MockedBarsMenu />)
  })
})