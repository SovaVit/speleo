import React from "react";
import { Form, Field } from "react-final-form";
import { Button, FormGroup, Label, Input } from "reactstrap";
import {Select} from '../../SelectInput/SelectInput'

export default class AddExpeditionForm extends React.Component {
     handleValidate = values => {
        const errors = {};

       if(!values.date){
        errors.date = "Required";
       }
       if(!values.number){
        errors.number = "Required";
       }
       if(!values.cave){
        errors.cave = "Required";
       }
        return errors;
      }
  render() {
    return (
      <div className="col-sm-12 col-md-12 col-lg-12">
        <Form
          onSubmit={this.props.handleSubmit}
          validate={this.handleValidate}
          render={({ handleSubmit, submitting, submitError }) => (
            <form onSubmit={handleSubmit}>

              <Field name="number">
                {({ input, meta }) => (
                  <FormGroup>
                    <Label>№ Експедиції</Label>
                    <Input
                      {...input}
                      type="text"
                      placeholder="номер експедиції"
                    />
                    {meta.error && meta.touched && (
                      <span className="text-danger">{meta.error}</span>
                    )}
                  </FormGroup>
                )}
              </Field>
              <Field name="date">
                {({ input, meta }) => (
                  <FormGroup>
                    <Label>Дата проведення</Label>
                    <Input {...input} type="text" placeholder="дд-мм-рр" />
                    {meta.error && meta.touched && (
                      <span className="text-danger">{meta.error}</span>
                    )}
                  </FormGroup>
                )}
              </Field>
              <Field name="cave">
                {({ input, meta }) => (
                  <FormGroup>
                    <Label>Печера</Label>
                    
                    <Select {...input} type="select" placeholder="печера"/>                  
                    {meta.error && meta.touched && (
                      <span className="text-danger">{meta.error}</span>
                    )}
                  </FormGroup>
                )}
              </Field>
              <div>
                <Button
                  color="primary"
                  size="sm"
                  type="submit"
                  disabled={submitting}
                >
                  Submit
                </Button>{" "}
                {submitError && (
                  <span className="text-danger">{submitError}</span>
                )}
              </div>
            </form>
          )}
        />
      </div>
    );
  }
}
