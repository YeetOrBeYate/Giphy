import React from 'react'
import { render, screen, cleanup } from '@testing-library/react'
import GridComp from '../comp/GifGrid'
import { SEARCH_GIFS } from '../redux/actions/types'

import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'


describe('Should render Grid compnent', () => {

  test('On render', () => {
    const initialState = {
      gifs: { gifsArray: [] },
      loading: { isLoading: [] },
    }
    const mockStore = configureStore()
    let store

    store = mockStore(initialState)

    render(<Provider store={store}><GridComp /></Provider>)
    const formElement = screen.getByTestId('grid-1')
    expect(formElement).toBeInTheDocument()
    expect(formElement).toHaveTextContent("Start searching! There's endless possibilities")
  })

  test('On loading', () => {
    const initialState = {
      gifs: { gifsArray: [] },
      loading: { isLoading: [SEARCH_GIFS] }
    }
    const mockStore = configureStore()
    let store = mockStore(initialState)

    render(<Provider store={store}><GridComp /></Provider>)
    const formElement = screen.getByTestId('grid-2')
    expect(formElement).toBeInTheDocument()
  })
})