import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import PropTypes from 'prop-types'

const Form_card = ({setNew}) => {

  const styleError = {
    border: 'solid 1px red'
  }

  const loginSchema = Yup.object().shape(
    {
      cardholder: Yup.string()
                  .required('El nombre es requerido')
                  .min(10, 'Nombre de usuario demasiado corto')
                  .max(29, 'Nombre de usuario demasiado largo'),
      card_number: Yup.number('El formato es incorrecto solo numeros')
                  .required('El campo es requerido'),
      month: Yup.number()
                  .required('Campo Requerido')
                  .min(2, 'Valor faltante en el campo'),
      year: Yup.number()
                  .required('El campo es requerido')
                  .min(2, 'Valor faltante en el campo'),
      cvc: Yup.number()
                  .required('El campo es requerido')
                  .min(3, 'Valores faltantes en el campo')
    }
  )

  const initialCredentials = {
    cardholder: '',
    card_number: '',
    month: '',
    year: '',
    cvc: '',
  }

  function actualizar(e) {
      const valor = e.target.value
      setNew(valor)
  }

  return (
    <div className='form-container'> 
      <Formik
        initialValues={initialCredentials}
        validationSchema={loginSchema}
      >
      {({
              touched,
              errors }) => (
                <Form className='form-main'>
                  <label htmlFor='cardholder'>CARDHOLDER NAME</label>
                  <Field onKeyUp={actualizar} id='cardholder' type='text' name='cardholder' placeholder='e.g. Jane Appleseed' style={ errors.cardholder && styleError}/>
                  {
                    errors.cardholder &&
                    (
                      <ErrorMessage name='cardholder' component='span'></ErrorMessage>
                    )
                  }
                  <label htmlFor='card_number'>CARD NUMBER</label>
                  <Field id='card_number' type='number' name='card_number' placeholder='e.g. 1234 5678 9123 0000' style={ errors.card_number && styleError }/>
                  {
                    errors.card_number && touched.card_number &&
                    (
                      <ErrorMessage name='card_number' component='span'></ErrorMessage>
                    )
                  }
                  <div className='container-date'>
                    <div className='container-labels'>
                      <label htmlFor='date'>EXP. DATE</label>
                      <label>(MM/YY)</label>
                      <label htmlFor='cvc'>CVC</label>
                    </div>
                    <div className='exp-date'>
                      <Field id='date' type='number' name='month' placeholder='MM' style={ errors.month && styleError} />
                      {
                        errors.month && touched.month &&
                        (
                          <ErrorMessage name='month' component='span'></ErrorMessage>
                        )
                      }
                      <Field  id='year' type='number' name='year' placeholder='YY' style={ errors.year && styleError}/>
                      {
                        errors.year && touched.year && 
                        (
                          <ErrorMessage name='year' component='span'></ErrorMessage>
                        )
                      }
                      <Field type='number' id='cvc' name='cvc' placeholder='e.g. 123' style={ errors.cvc && styleError } />
                      {
                        errors.cvc && touched.cvc && 
                        (
                          <ErrorMessage name='cvc' component='span' ></ErrorMessage>
                        )
                      }
                    </div>
                  </div>
                    <button type='submit'>Confirm</button>
                </Form>
              )
            }

      </Formik>
    </div>
  )
}

Form_card.propTypes = {
  setNew: PropTypes.func
}

export default Form_card