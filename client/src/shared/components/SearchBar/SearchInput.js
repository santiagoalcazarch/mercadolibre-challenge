
import React from 'react'
import PropTypes from 'prop-types'
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useNavigate } from "react-router-dom";

import SearchImg from '../../assets/icons/ic_Search@2x.png'
import { LIST_ITEM } from '../../../routes/routes';


const SearchInput = ({ serachInitValue = "" }) => {

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: { search: serachInitValue },
    enableReinitialize: true,
    validationSchema: Yup.object().shape({
      search: Yup.string()
        .max(100, '¡Ingresaste demasidos valores!')
        .required('¿Estas buscando algo? ¡Ingresalo!'),
    }),
    onSubmit: values => {
      navigate(`${LIST_ITEM}?search=${values.search}`);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="input-group my-3 search-input ml-4">
        <input 
          type="text"
          id="search"
          name="search"
          onChange={formik.handleChange}
          value={formik.values.search ?? ""}
          className="form-control" 
          placeholder="Nunca dejes de buscar" 
          aria-label="serach-action"
          aria-labelledby='serach-action'
        />
        <span className="input-group-text m-0 p-0" id="serach-action">
          <button 
            className="search-btn" 
            id="search-btn"
            type="submit"
          >
            <img src={SearchImg} alt="Search" />
          </button>
        </span>
      </div>
      { formik.errors.search && formik.touched.search && 
        <div className="ml-4 mb-2">
          <span className="invalid-msg">{formik.errors.search}</span>
        </div>
      }
    </form>
      
  )
}

SearchInput.propTypes = {
  serachInitValue: PropTypes.string
}

export default SearchInput