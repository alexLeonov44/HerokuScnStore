import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { setAuth } from '../redux/actions/auth';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const CheckOutForm = () => {

  const dispatch = useDispatch()
  let history = useHistory()
  let {isAuth} = useSelector(({auth}) => auth)

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
      lastName: Yup.string().max(20, 'Must be 20 characters or less').required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
    }),
    onSubmit: (values) => {
      dispatch(setAuth(values))
      localStorage.setItem('scnStore', JSON.stringify(values));
     console.log(values)
    },
  });
  if(isAuth){
    history.push("/cart");
  }
  return (
    <form className="check-out-form" className="check-out-form" onSubmit={formik.handleSubmit}>
      <h2>Sign in</h2>

      <div className="form-block">
        <div className={`form-block__input${formik.touched.firstName && formik.errors.firstName ? '__error' :''}`}>
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            {...formik.getFieldProps('firstName')}
          />
          {formik.touched.firstName && formik.errors.firstName ? (
            <div style={{ color: 'red' }}>{formik.errors.firstName}</div>
          ) : null}
        </div>

        <div className={`form-block__input${formik.touched.lastName && formik.errors.lastName ? '__error' :''}`}>
          <label htmlFor="lastName">Last Name</label>
          <input id="lastName" name="lastName" type="text" {...formik.getFieldProps('lastName')} />
          {formik.touched.lastName && formik.errors.lastName ? (
            <div style={{ color: 'red' }}>{formik.errors.lastName}</div>
          ) : null}
        </div>

        <div className={`form-block__input${formik.touched.email && formik.errors.email ? '__error' :''}`}>
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div style={{ color: 'red' }}>{formik.errors.email}</div>
          ) : null}
        </div>

        <div style={{marginBottom:10}}>
          <input id="saveMe" name="saveMe" type="checkbox" {...formik.getFieldProps('saveMe')} />
          <span>Save Me</span>
        </div>

        <button className="check-out-form__btn" type="submit">
        Sign in
        </button>
      </div>
    </form>
  );
};

export default CheckOutForm;
