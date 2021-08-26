import React from 'react'
import {Button, Form, FormGroup, Label, Input, Alert} from "reactstrap"
import { useDispatch, useSelector } from 'react-redux'

import { ON_SEARCH_GIFS, SEARCH_GIFS } from '../redux/actions/types'


const FormComp = () => {

  const dispatch = useDispatch()

  const [search, setSearch] = React.useState({ string: '' })
  
  const { string: searchString } = search

  const errorArray = useSelector(state => state.error.errorArray)

  console.log('HERE', errorArray)

  const isError = errorArray.some((error) => error === SEARCH_GIFS)

  const handleChange = (e)=>{
    setSearch({ ...search, [e.target.name]: e.target.value })
  }

  const handleSearch = (e)=>{
    e.preventDefault()
    dispatch({ type: ON_SEARCH_GIFS, payload: searchString})
    setSearch({ ...search, string: "" })
  }


    return (
        <Form onSubmit={(e)=>handleSearch(e)}  className="themed-form">
        <Alert color="danger" isOpen={isError}>
            There seems to be an error, please retype and try again
          </Alert>
          <FormGroup >
            <Label for="searchBar">Search giphy!</Label>
            <Input id='searchBar' type="text" name="string" value={searchString} onChange={handleChange}/>
          </FormGroup>
          <Button type='submit' color="primary">Search</Button>
        </Form>
    )
}

export default FormComp
