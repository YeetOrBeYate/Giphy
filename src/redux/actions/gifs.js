import { SEARCH_GIFS } from './types'


export const searchGiphyAction = ({ string }) => ({
  type: SEARCH_GIFS,
  payload: {
    request: {
      method: 'get',
      url: `/search?q=${string}&api_key=cGruXJIEb8W8c44Uy0xWjIkO5OfbjYS5`
    }
  },
  setLoading: {
    action: 'set',
    type: SEARCH_GIFS
  }
})