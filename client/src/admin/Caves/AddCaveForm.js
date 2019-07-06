import React from "react";
import { Form, Field } from "react-final-form";
import { Button, FormGroup, Label, Input, Col, Row } from "reactstrap";
import {
  Select,
  CavesOptions,
  typeCaves,
  region,
  typeRock
} from "../../SelectInput/SelectInput";
import {
  required,
  notEmpty,
  notNumber,
  isDate,
  composeValidators
} from "../../utilities/helpers/validate";

export default class AddCaveForm extends React.Component {
  render() {
    return (
      <div className="col-sm-12 col-md-12 col-lg-12">
        <Form
          onSubmit={this.props.handleSubmit}
          initialValues={this.props.initialValues}
          render={({ handleSubmit, submitting, submitError }) => (
            <form onSubmit={handleSubmit}>
              <Row>
                <Col md="4">
                  <Field
                    name="name"
                    validate={composeValidators(required, notEmpty)}
                  >
                    {({ input, meta }) => (
                      <FormGroup>
                        <Label>Печера</Label>
                        <Select
                          {...input}
                          type="select"
                          options={CavesOptions}
                        />
                        {meta.error && meta.touched && (
                          <span className="text-danger">{meta.error}</span>
                        )}
                      </FormGroup>
                    )}
                  </Field>
                  <Field
                    name="typeCave"
                    validate={composeValidators(required, notEmpty)}
                  >
                    {({ input, meta }) => (
                      <FormGroup>
                        <Label>Тип печери</Label>
                        <Select {...input} type="select" options={typeCaves} />
                        {meta.error && meta.touched && (
                          <span className="text-danger">{meta.error}</span>
                        )}
                      </FormGroup>
                    )}
                  </Field>
                  <Field
                    name="lengthCave"
                    validate={composeValidators(required, notNumber)}
                  >
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
                  <Field name="address" validate={required}>
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
                  <Field
                    name="numberRegion"
                    validate={composeValidators(required, notEmpty)}
                  >
                    {({ input, meta }) => (
                      <FormGroup>
                        <Label>Регіон</Label>
                        <Select {...input} type="select" options={region} />
                        {meta.error && meta.touched && (
                          <span className="text-danger">{meta.error}</span>
                        )}
                      </FormGroup>
                    )}
                  </Field>
                </Col>
                <Col md="4">
                  <Field
                    name="square"
                    validate={composeValidators(required, notNumber)}
                  >
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
                  <Field
                    name="volume"
                    validate={composeValidators(required, notNumber)}
                  >
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
                  <Field
                    name="amplitude"
                    validate={composeValidators(required, notNumber)}
                  >
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
                  <Field
                    name="coordinateX"
                    validate={composeValidators(required, notNumber)}
                  >
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
                  <Field
                    name="coordinateY"
                    validate={composeValidators(required, notNumber)}
                  >
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
                </Col>
                <Col md="4">
                  <Field
                    name="typeRock"
                    validate={composeValidators(required, notEmpty)}
                  >
                    {({ input, meta }) => (
                      <FormGroup>
                        <Label>Тип породи</Label>
                        <Select {...input} type="select" options={typeRock} />
                        {meta.error && meta.touched && (
                          <span className="text-danger">{meta.error}</span>
                        )}
                      </FormGroup>
                    )}
                  </Field>
                  <Field name="cadastralNumber" validate={required}>
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
                  <Field
                    name="depthCave"
                    validate={composeValidators(required, notNumber)}
                  >
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
                  <Field
                    name="createdAt"
                    validate={composeValidators(required, isDate)}
                  >
                    {({ input, meta }) => (
                      <FormGroup>
                        <Label>Дата відкриття</Label>
                        <Input {...input} type="text" placeholder="дд.мм.ррpp" />
                        {meta.error && meta.touched && (
                          <span className="text-danger">{meta.error}</span>
                        )}
                      </FormGroup>
                    )}
                  </Field>
                  <div className="text-center pt-4">
                    <Button
                      color="primary"
                      size="md"
                      type="submit"
                      disabled={submitting}
                    >
                      Submit
                    </Button>{" "}
                  </div>
                  {submitError && (
                    <span className="text-danger">{submitError}</span>
                  )}
                </Col>
              </Row>
            </form>
          )}
        />
      </div>
    );
  }
}
