import React from 'react'
import {Button, Form, FormGroup, Label, Input, Alert} from "reactstrap"
import { useDispatch, useSelector } from 'react-redux'

import { ON_SEARCH_GIFS, SEARCH_GIFS, ON_REMOVE_ERROR } from '../redux/actions/types'

import { RootState } from '../redux/reducers/reducer'


const FormComp = () => {

  const dispatch = useDispatch()

  const [search, setSearch] = React.useState({ inputString: '' })
  
  const { inputString: searchString } = search

  const errorArray = useSelector((state : RootState) => state.error.errorArray)

  const isError = errorArray.some((error) => error === SEARCH_GIFS)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isError) dispatch({ type: ON_REMOVE_ERROR, payload: SEARCH_GIFS })
    setSearch({ ...search, [e.currentTarget.name]: e.currentTarget.value })
  }

  // const handleSearch = (e)=>{
  //   e.preventDefault()
  //   dispatch({ type: ON_SEARCH_GIFS, payload: searchString})
  //   setSearch({ ...search, string: "" })
  // }

  // onSubmit = {(e)=> handleSearch(e)}

  const handleErrorDismisal = () => {
    dispatch({ type: ON_REMOVE_ERROR, payload: SEARCH_GIFS})
  }


    return (
        <Form data-testid='form-1'   className="themed-form">
          <Alert color="danger" isOpen={isError} toggle={handleErrorDismisal}>
            There seems to be an error, please retype and try again
          </Alert>
          <FormGroup >
            <Label for="searchBar">Search giphy!</Label>
            <Input id='searchBar' type="text" name="inputString" value={searchString} onChange={handleChange}/>
          </FormGroup>
          <Button type='submit' color="primary">Search</Button>
        </Form>
    )
}

export default FormComp
