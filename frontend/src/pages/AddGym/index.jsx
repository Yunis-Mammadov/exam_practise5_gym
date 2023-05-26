import React, { useState } from 'react'
import Navbar from '../../components/Header/Navbar'
import { useFormik } from "formik"
import * as Yup from "yup"
import { postGym } from '../../api/request'
import styles from "../AddGym/index.module.css"
import Footer from '../../components/Footer'
import { Helmet } from 'react-helmet'

const AddGym = () => {
  const [gym, setGym] = useState({
    imageURL: "",
    name: "",
    description: ""
  })

  const formik = useFormik({
    initialValues: {
      imageURL: "",
      name: "",
      description: ""
    },
    validationSchema: Yup.object({
      imageURL: Yup.string().required("Please select a Image Url"),
      name: Yup.string().required("Please select a Image Url"),
      description: Yup.string().required("Please select a Image Url"),
    }),
    onSubmit: async(values) => {
      await postGym(values);
      setGym({ imageURL: "", name:"", description:""})
    }
  })


  return (
    <>
     <Helmet>
        <title>Add Gym</title>
      </Helmet>
      <Navbar />
      <div className={styles.parentAddGym}>
        <h1>Add Gym</h1>
        <form className={styles.form} onSubmit={formik.handleSubmit}>
          <div className={styles.inputParent}>
        <label>Image URL: </label>
        <input className={styles.inputField} type="text" name="imageURL" value={formik.values.imageURL} onChange={formik.handleChange} />
        {formik.touched.imageURL && formik.errors.imageURL && <div style={{color:"black"}}>{formik.errors.imageURL}</div>}
          </div>
          <div className={styles.inputParent}>
        <label>Name: </label>
        <input className={styles.inputField} type="text" name="name" value={formik.values.name} onChange={formik.handleChange} />
        {formik.touched.name && formik.errors.name && <div style={{color:"black"}}>{formik.errors.name}</div>}
          </div>
          <div className={styles.inputParent}>
        <label>Description: </label>
        <input className={styles.inputField} type="text" name="description" value={formik.values.description} onChange={formik.handleChange} />
        {formik.touched.description && formik.errors.description && <div style={{color:"black"}}>{formik.errors.description}</div>}
          </div>
          <button className={styles.buttonAdd} type='submit'>Add Gym</button>
        </form>
      </div>
      <Footer/>

    </>
  )
}

export default AddGym
