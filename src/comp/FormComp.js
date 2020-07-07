import React from 'react'
import {Button, Form, FormGroup, Label, Input} from "reactstrap"
import {useSelector,useDispatch} from 'react-redux'

import {searchGiphy} from "../Actions/GifActions"


const FormComp = () => {

  const dispatch = useDispatch()

  const [search,setSearch] = React.useState({
    string:''
  })

  const handleChange = (e)=>{
      setSearch({...search, [e.target.name]:e.target.value})
  }

  const submit = (e)=>{
    e.preventDefault()



    dispatch(searchGiphy(search))
  }


    return (
        <Form  className="themed-form">
          <FormGroup >
            <Label for="searchBar">Search giphy!</Label>
            <Input id='searchBar' type="text" name="string" value={search.string} onChange={handleChange}/>
          </FormGroup>
          <Button onClick ={(e)=>submit(e)}color="primary">Search</Button>
        </Form>
    )
}

export default FormComp
