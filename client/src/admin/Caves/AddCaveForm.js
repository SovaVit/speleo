import React from "react";
import { Form, Field } from "react-final-form";
import { Button, FormGroup, Label, Input } from "reactstrap";
import { Select } from "../../SelectInput/SelectInput";

export default class AddCaveForm extends React.Component {
  handleValidate = values => {
    const errors = {};

    if (!values.name) {
      errors.name = "Required";
    }
    if (!values.typeCave) {
      errors.typeCave = "Required";
    }
    if (!values.lengthCave) {
      errors.lengthCave = "Required";
    }
    return errors;
  };
  render() {
    return (
      <div className="col-sm-12 col-md-12 col-lg-12">
        <Form
          onSubmit={this.props.handleSubmit}
          validate={this.handleValidate}
          render={({ handleSubmit, submitting, submitError }) => (
            <form onSubmit={handleSubmit}>
              <Field name="name">
                {({ input, meta }) => (
                  <FormGroup>
                    <Label>Печера</Label>
                    <Select {...input} type="select" placeholder="печера" />
                    {meta.error && meta.touched && (
                      <span className="text-danger">{meta.error}</span>
                    )}
                  </FormGroup>
                )}
              </Field>
              <Field name="typeCave">
                {({ input, meta }) => (
                  <FormGroup>
                    <Label>Тип печери</Label>
                    <Input {...input} type="text" placeholder="верт\гориз" />
                    {meta.error && meta.touched && (
                      <span className="text-danger">{meta.error}</span>
                    )}
                  </FormGroup>
                )}
              </Field>
              <Field name="lengthCave">
                {({ input, meta }) => (
                  <FormGroup>
                    <Label>Довжина печери</Label>
                    <Input {...input} type="text" placeholder="" />
                    {meta.error && meta.touched && (
                      <span className="text-danger">{meta.error}</span>
                    )}
                  </FormGroup>
                )}
              </Field>
              <Field name="address">
                {({ input, meta }) => (
                  <FormGroup>
                    <Label>Адреса</Label>
                    <Input {...input} type="text" placeholder="с./р-н" />
                    {meta.error && meta.touched && (
                      <span className="text-danger">{meta.error}</span>
                    )}
                  </FormGroup>
                )}
              </Field>
              <Field name="numberRegion">
                {({ input, meta }) => (
                  <FormGroup>
                    <Label>Регіон</Label>
                    <Input {...input} type="text" placeholder="№ регіону" />
                    {meta.error && meta.touched && (
                      <span className="text-danger">{meta.error}</span>
                    )}
                  </FormGroup>
                )}
              </Field>
              <Field name="square">
                {({ input, meta }) => (
                  <FormGroup>
                    <Label>Площа</Label>
                    <Input {...input} type="text" placeholder="м.кв" />
                    {meta.error && meta.touched && (
                      <span className="text-danger">{meta.error}</span>
                    )}
                  </FormGroup>
                )}
              </Field>
              <Field name="volume">
                {({ input, meta }) => (
                  <FormGroup>
                    <Label>Об'єм</Label>
                    <Input {...input} type="text" placeholder="м.куб" />
                    {meta.error && meta.touched && (
                      <span className="text-danger">{meta.error}</span>
                    )}
                  </FormGroup>
                )}
              </Field>
              <Field name="amplitude">
                {({ input, meta }) => (
                  <FormGroup>
                    <Label>Амплітуда</Label>
                    <Input {...input} type="text" placeholder="м." />
                    {meta.error && meta.touched && (
                      <span className="text-danger">{meta.error}</span>
                    )}
                  </FormGroup>
                )}
              </Field>
              <Field name="coordinateX">
                {({ input, meta }) => (
                  <FormGroup>
                    <Label>КоординатиХ</Label>
                    <Input {...input} type="text" placeholder="number" />
                    {meta.error && meta.touched && (
                      <span className="text-danger">{meta.error}</span>
                    )}
                  </FormGroup>
                )}
              </Field>
              <Field name="coordinateY">
                {({ input, meta }) => (
                  <FormGroup>
                    <Label>КоординатиY</Label>
                    <Input {...input} type="text" placeholder="number" />
                    {meta.error && meta.touched && (
                      <span className="text-danger">{meta.error}</span>
                    )}
                  </FormGroup>
                )}
              </Field>
              <Field name="typeRock">
                {({ input, meta }) => (
                  <FormGroup>
                    <Label>Тип породи</Label>
                    <Input {...input} type="text" placeholder="тип породи" />
                    {meta.error && meta.touched && (
                      <span className="text-danger">{meta.error}</span>
                    )}
                  </FormGroup>
                )}
              </Field>
              <Field name="cadastralNumber">
                {({ input, meta }) => (
                  <FormGroup>
                    <Label>Кадастровий номер</Label>
                    <Input {...input} type="text" placeholder="" />
                    {meta.error && meta.touched && (
                      <span className="text-danger">{meta.error}</span>
                    )}
                  </FormGroup>
                )}
              </Field>
              <Field name="depthCave">
                {({ input, meta }) => (
                  <FormGroup>
                    <Label>Глибина</Label>
                    <Input {...input} type="text" placeholder="number" />
                    {meta.error && meta.touched && (
                      <span className="text-danger">{meta.error}</span>
                    )}
                  </FormGroup>
                )}
              </Field>
              <Field name="createdAt">
                {({ input, meta }) => (
                  <FormGroup>
                    <Label>Дата відкриття</Label>
                    <Input {...input} type="text" placeholder="дд-мм-рр" />
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
