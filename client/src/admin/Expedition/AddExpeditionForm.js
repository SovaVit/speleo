import React from "react";
import { Form, Field } from "react-final-form";
import { Button, FormGroup, Label, Input } from "reactstrap";
import { Select, CavesOptions } from "../../SelectInput/SelectInput";
import { required } from "../../utilities/helpers/validate";

export default class AddExpeditionForm extends React.Component {
  render() {
    return (
      <div className="col-sm-12 col-md-12 col-lg-12">
        <Form
          onSubmit={this.props.handleSubmit}
          initialValues={this.props.initialValues}
          render={({ handleSubmit, submitting, submitError }) => (
            <form onSubmit={handleSubmit}>
              <Field name="numberExpedition" validate={required}>
                {({ input, meta }) => (
                  <FormGroup>
                    <Label>№ Експедиції</Label>
                    <Input {...input} type="text" placeholder="№ експедиції" />
                    {meta.error && meta.touched && (
                      <span className="text-danger">{meta.error}</span>
                    )}
                  </FormGroup>
                )}
              </Field>
              <Field name="dateExpedition" validate={required}>
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
              <Field name="caveName" validate={required}>
                {({ input, meta }) => (
                  <FormGroup>
                    <Label>Печера</Label>

                    <Select {...input} type="select" options={CavesOptions} />
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
