import React from 'react'
import {Button, Form, FormGroup, Label, Input} from "reactstrap"


const formComp = () => {
    return (
        <Form  className="themed-form">
          <FormGroup >
            <Label for="searchBar">Search giphy!</Label>
            <Input id='searchBar'></Input>
          </FormGroup>
          <Button color="primary">Search</Button>
        </Form>
    )
}

export default formComp
