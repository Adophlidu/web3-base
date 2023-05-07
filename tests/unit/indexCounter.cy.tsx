import Counter from '@components/Counter'

const INCREMENT_BUTTON = '.increment'
const DECREMENT_BUTTON = '.decrement'
const NUMBER = '.number'

const add = (a: number, b: number) => a + b

describe('<Counter />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Counter />)
  })

  it('when the increment clicked, the number should be incremented', () => {
    cy.mount(<Counter />)
    cy.get(INCREMENT_BUTTON).click()
    cy.get(NUMBER).should('have.text', '1')
  })

  it('when the decrement clicked, the number should be decremented', () => {
    cy.mount(<Counter />)
    cy.get(DECREMENT_BUTTON).click()
    cy.get(NUMBER).should('have.text', '-1')
  })

  it('render with a initial value 2, the number should be 2', () => {
    cy.mount(<Counter initialValue={2} />)
    cy.get(NUMBER).should('have.text', '2')
  })
  it('1 + 2 = 3', () => {
    cy.wrap(add(1, 2)).should('eq', 3)
  })
})
