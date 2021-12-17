import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import "./chip.css";
import SiIcon from "../../assets/img/si.png";
export default class Chips extends React.Component {
  state = {
    items: [],
    value: "",
    error: null,
    emailState: [],
    emailError: null,
  };

  handleKeyDown = (evt) => {
    if (["Enter", "Tab", ","].includes(evt.key)) {
      evt.preventDefault();

      var value = this.state.value.trim();

      if (value && this.isValid(value)) {
        this.setState({
          items: [...this.state.items, this.state.value],
          value: "",
        });
      }
    }
  };

  handleChange = (evt) => {
    this.setState({
      value: evt.target.value,
      error: null,
    });
  };
  handleEmailChange = (evt) => {
    this.setState({
      emailState: evt.target.value,
    });
    console.log(this.state.emailState);
  };

  checkEmail = (evt)=>{
    let error =null;
console.log('SFDGHFJGKHLÑ');
console.log(evt.target.value);
if (!this.isEmail(evt.target.value)) {
  error = `${evt.target.value} is not a valid email address.`;
}

  if (error) {
    this.setState({ emailError: error });

    return false;
  }
else{
  this.setState({ emailError: null});
}
  }

  handleDelete = (item) => {
    this.setState({
      items: this.state.items.filter((i) => i !== item),
    });
  };

  handlePaste = (evt) => {
    evt.preventDefault();

    var paste = evt.clipboardData.getData("text");
    var emails = paste.match(/[\w\d\.-]+@[\w\d\.-]+\.[\w\d\.-]+/g);

    if (emails) {
      var toBeAdded = emails.filter((email) => !this.isInList(email));

      this.setState({
        items: [...this.state.items, ...toBeAdded],
      });
    }
  };

  isValid(email) {
    let error = null;

    if (this.isInList(email)) {
      error = `${email} has already been added.`;
    }

    if (!this.isEmail(email)) {
      error = `${email} is not a valid email address.`;
    }

    if (error) {
      this.setState({ error });

      return false;
    }

    return true;
  }

  isInList(email) {
    return this.state.items.includes(email);
  }

  isEmail(email) {
    return /[\w\d\.-]+@[\w\d\.-]+\.[\w\d\.-]+/.test(email);
  }

  submitHandler = (event) => {
    let error = null;
    event.preventDefault();
    if (!this.isEmail(this.state.emailState)) {
      error = `${this.state.emailState} is not a valid email address.`;
    }
    if (error) {
      if (error) {
        this.setState({ emailError: error });

        return false;
      }
    }
    console.log("i must not reach here");

    const x = [...this.state.items];
    x.push(this.state.emailState);
    console.log(x);
  };

  render() {
    return (
      <Form onSubmit={this.submitHandler}>
        <FormGroup>
          <Label for="exampleEmail" style={{ fontWeight: "600", size: "14px" }}>
            Enviar a:
          </Label>
          <input
            className={"input " + (this.state.emailError && " has-error")}
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="Enter a email"
            value={this.state.emailState}
            onChange={this.handleEmailChange}
            onBlur={this.checkEmail}
          />
          {this.state.emailError && (
            <p className="error">{this.state.emailError}</p>
          )}
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail" style={{ fontWeight: "600", size: "14px" }}>
            Agregar otro correo:
          </Label>
          {this.state.items.map((item) => (
            <div className="tag-item" key={item}>
              {item}
              <button
                type="button"
                className="button"
                onClick={() => this.handleDelete(item)}
              >
                &times;
              </button>
            </div>
          ))}

          <input
            className={"input " + (this.state.error && " has-error")}
            value={this.state.value}
            placeholder="Type or paste email addresses and press `Enter`..."
            onKeyDown={this.handleKeyDown}
            onChange={this.handleChange}
            onPaste={this.handlePaste}
          />

          {this.state.error && <p className="error">{this.state.error}</p>}
        </FormGroup>
        <div class="text-center">
          <Button
            type="submit"
            style={{
              background: "#1D308E",
              textAlign: "center",
              color: "white",
              width: "296px",
              height: "64px",
              padding: "22px 81px",
            }}
          >
            Enviar Correo &nbsp;
            <img src={SiIcon} />
          </Button>
        </div>
      </Form>
    );
  }
}
