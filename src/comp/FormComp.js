import React from 'react'
import {Button, Form, FormGroup, Label, Input, Alert} from "reactstrap"
import { useDispatch } from 'react-redux'

import { ON_SEARCH_GIFS } from '../redux/actions/types'


const FormComp = () => {

  const dispatch = useDispatch()

  const [search, setSearch] = React.useState({ string: '' })
  
  const { string: searchString } = search

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
          <Alert color="danger" isOpen={false}>
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
