import React, {Component} from 'react';
import {FormGroup, ControlLabel, FormControl, Button, HelpBlock} from 'react-bootstrap';

import store from '../../store';

class AddOtte extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      race: "",
      price: 0,
      age: 0
    };
    this.loadOtten = this.loadOtten.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  loadOtten() {
    fetch('http://localhost:9000/api/otten/')
      .then((response) => response.json())
      .then((data) => store.dispatch({
        type: 'OTTEN_LOADED',
        data: data
      }));
  }

  handleChange(value, valueClass) {
    switch (valueClass) {
      case "name":
        this.setState({name: value.target.value});
        break;
      case "race":
        this.setState({race: value.target.value});
        break;
      case "price":
        this.setState({price: value.target.value});
        break;
      case "age":
        this.setState({age: value.target.value});
        break;
      default:
        break;
    }


  }

  handleSubmit() {
    fetch('http://localhost:9000/api/otten/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
          "name": "New Otten",
          "race": "New OttenRace",
          "age": 4,
          "price": 67,
          "id": 67
      })
    });
  }


  render() {

    function FieldGroup({id, label, help, ...props}) {
      return (
        <FormGroup controlId={id}>
          <ControlLabel>{label}</ControlLabel>
          <FormControl {...props} />
          {help && <HelpBlock>{help}</HelpBlock>}
        </FormGroup>
      );
    }

    return (
      <div>
        <h1>Otte hinzufügen</h1>
        <form>
          <FormGroup controlId="formControlsTextarea">
            <ControlLabel>Name</ControlLabel>
            <FormControl componentClass="textarea" placeholder="textarea" value={this.state.name}
                         onChange={(event) => this.handleChange(event, "name")}/>
          </FormGroup>
          <FormGroup controlId="formControlsTextarea">
            <ControlLabel>Rasse</ControlLabel>
            <FormControl componentClass="textarea" placeholder="textarea" value={this.state.race}
                         onChange={(event) => this.handleChange(event, "race")}/>
          </FormGroup>
          <FieldGroup
            id="formControlsPrice"
            type="number"
            label="Price"
            placeholder="Enter text"
            value={this.state.price} onChange={(event) => this.handleChange(event, "price")}
          />
          <FieldGroup
            id="formControlsText"
            type="number"
            label="Age"
            placeholder="Enter text"
            value={this.state.age} onChange={(event) => this.handleChange(event, "age")}
          />

          <FieldGroup
            id="formControlsFile"
            type="file"
            label="Image"
            help="Example block-level help text here."
          />

          <Button type="submit" onClick={() => this.handleSubmit()}>
            Submit
          </Button>

        </form>
      </div>
    )

  }
}

export default AddOtte;
/**
 * Created by Julian on 21.06.2017.
 */
