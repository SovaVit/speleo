import React from "react";
import { Form, Field } from "react-final-form";
import { Button, FormGroup, Label, Input, Jumbotron, Container } from 'reactstrap';


export class User extends React.Component {
  render() {
    return (
      <Jumbotron fluid>
      <Container className="col-sm-12 col-md-6 offset-md-3 col-lg-4 offset-lg-4">
        <Form
          onSubmit={this.props.handleSubmit}
          validate={values => {
            const errors = {};
            errors.username = (!values.username)? "Required": undefined;
            errors.password = (!values.password)? "Required": undefined;
            
            return errors;
          }}
          render={({
            handleSubmit,
            reset,
            submitting,
            pristine,
            submitError
          }) => (
            <form onSubmit={handleSubmit}>
              <Field name="username">
                {({ input, meta }) => (
                  <FormGroup>
                    <Label>Username</Label>
                    <Input {...input} type="text" placeholder="username" />
                    {meta.error && meta.touched && <span className="text-danger">{meta.error}</span>}
                  </FormGroup>
                )}
              </Field>
              <Field name="password">
                {({ input, meta }) => (
                  <FormGroup>
                    <Label>Password</Label>
                    <Input {...input} type="text" placeholder="password" />
                    {meta.error && meta.touched && <span className="text-danger">{meta.error}</span>}
                  </FormGroup>
                )}
              </Field>
              <div>
                <Button color="primary" size="sm" type="submit" disabled={submitting}>
                  Submit
                </Button>{' '}
                <Button color="primary" size="sm"
                  type="button"
                  onClick={reset}
                  disabled={submitting || pristine}
                >
                   Reset...
                </Button>
                {submitError && <span className="text-danger">{submitError}</span>}
                
              </div>
            </form>
          )}
        />
        {this.props.Error!=null && <p className="text-danger">Incorrect username or password!</p>}
        </Container>
      </Jumbotron>
    );
  }
}
