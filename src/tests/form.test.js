import React from 'react'
import { render, screen, cleanup } from '@testing-library/react'
import FormComp from '../comp/FormComp'
import { SEARCH_GIFS } from '../redux/actions/types'

import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'


describe('Should render form compnent', () => {
  
  test('On render', () => {
    const initialState = { error: { errorArray: [] } }
    const mockStore = configureStore()
    let store
  
    store = mockStore(initialState)
  
    render(<Provider store={store}><FormComp /></Provider>)
    const formElement = screen.getByTestId('form-1')
    expect(formElement).toBeInTheDocument()
    expect(formElement).toHaveTextContent('Search giphy!')
    expect(formElement).toHaveTextContent('Search')
  })

  test('on error', () => {
    const initialState = { error: { errorArray: [SEARCH_GIFS] } }
    const mockStore = configureStore()
    let store = mockStore(initialState)

    render(<Provider store={store}><FormComp /></Provider>)
    const formElement = screen.getByTestId('form-1')
    expect(formElement).toBeInTheDocument()
    expect(formElement).toHaveTextContent('There seems to be an error, please retype and try again')
  })
})




