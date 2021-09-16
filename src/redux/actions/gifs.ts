import {
  SEARCH_GIFS
 } from './types'

interface SearchAction {
  type: typeof SEARCH_GIFS,
  payload: any,
  setLoading: any
}

type SearchParam = {
  searchString: string
}


export const searchGiphyAction = ({ searchString }: SearchParam) : SearchAction => ({
  type: SEARCH_GIFS,
  payload: {
    request: {
      method: 'get',
      url: `/search?q=${searchString}&api_key=cGruXJIEb8W8c44Uy0xWjIkO5OfbjYS5`
    }
  },
  setLoading: {
    action: 'set',
    type: SEARCH_GIFS
  }
})