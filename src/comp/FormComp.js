import React from 'react'
import {Button, Form, FormGroup, Label, Input, Alert} from "reactstrap"
import {useSelector,useDispatch} from 'react-redux'


import {searchGiphy} from "../Actions/GifActions"


const FormComp = () => {

  const dispatch = useDispatch()
  const Gifs = useSelector(state =>state.Gifs)

  const [search,setSearch] = React.useState({
    string:''
  })

  const handleChange = (e)=>{
      setSearch({...search, [e.target.name]:e.target.value})
  }

  const submit = (e)=>{
    e.preventDefault()
    dispatch(searchGiphy(search))
    setSearch({...search, string:""})
  }


    return (
        <Form onSubmit={(e)=>submit(e)}  className="themed-form">
          <Alert color="danger" isOpen={Gifs.failure}>
            There seems to be an error, please retype and try again
          </Alert>
          <FormGroup >
            <Label for="searchBar">Search giphy!</Label>
            <Input id='searchBar' type="text" name="string" value={search.string} onChange={handleChange}/>
          </FormGroup>
          <Button onClick ={(e)=>submit(e)}color="primary">Search</Button>
        </Form>
    )
}

export default FormComp
