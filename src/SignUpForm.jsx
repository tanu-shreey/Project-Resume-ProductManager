import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import image from './depositphotos.jpg'
import { useFormik } from 'formik';
import Login from './Login';
import { Link } from "react-router-dom";

const validate = values => {

    const errors = {};
    if (!values.firstName) {
        errors.firstName = 'Required';
    }
    else if (values.firstName.length > 15) {
        errors.firstName = 'Must be 20 characters or less';
    }

    if (!values.LastName) {
        errors.LastName = 'Required';
    }
    else if (values.LastName.length > 15) {
        errors.LastName = 'Must be 20 characters or less';
    }


    if (!values.email) {
        errors.email = 'Required';
    }
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    if (!values.Password) {
        errors.Password = 'Required';
    }
    else if (values.Password.length > 15) {
        errors.Password = 'Must be 20 characters or less';
    }

    if (!values.Address ) {
        errors.Address = 'Required';
    }
  

    if (!values.Address2) {
        errors.Address2 = 'Required';
    }
   
    if (!values.Country) {
        errors.Country = 'Required';
    }


        return errors;
    };

const SignUpForm = () => {


    const formik = useFormik({
        initialValues: {
            firstName: '', LastName: '',
            email: '', Password: '', Address: '', Address2: ''
            , Country:''
        },

        validate,

        onSubmit: values => {

            alert(JSON.stringify(values, null, 2));
        },


    });
    return (

        <div className='form-container2  p-5  ' style={{ backgroundColor: '#cab394' }}>
            <div className='form-container  d-flex flex-row  '>
                <div className='bg-white wm-50 p-2 '>
                    <div className='p-3 ms-5'><h3>Registration Form</h3></div>
                    <form onSubmit={formik.handleSubmit}>

                        <div className="form-row d-flex flex-row  ms-5 p-2 ">
                            <div className="form-group   ms-2 col-md-5">
                                <input type="text" 
                                class="form-control" 
                                placeholder="First name"
                                id='firstName' 
                                name='firstName'
                                onChange={formik.handleChange}
                                value={formik.values.firstName} />
             {formik.touched.firstName && formik.errors.firstName ? ( <div className='text-danger small'>{formik.errors.firstName}</div> ) : null}

                            </div>



                            <div className="form-group  ms-5 col-md-5">
                            

                                <input type="text" 
                                class="form-control" 
                                placeholder="Last name" 
                                id='LastName'
                                name='LastName' 
                                value={formik.values.LastName} 
                               onChange={formik.handleChange}
                               onBlur={formik.handleBlur}
                               />
             {formik.touched.LastName && formik.errors.LastName? ( <div className='text-danger small'>{formik.errors.LastName}</div> ) : null}

                            </div>
                        </div>
                        <div className="form-row d-flex   flex-row  ms-5 p-2">
                            <div className="form-group ms-2 col-md-5">
                           

                                <input type="email" class="form-control" 
                                placeholder="Email" 
                                id='email' 
                                name='email' 
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email} 
                                />
            {formik.touched.email && formik.errors.email?(<div className='text-danger small'>{formik.errors.email}</div>):null}

                            </div>
                            <div className="form-group ms-5 col-md-5">
                        

                                <input type="password" 
                                class="form-control" 
                                placeholder="Passowrd" 
                                id='Password' 
                                name='Password' 
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.Password} />
                { formik.touched.Password && formik.errors.Password?(<div className='text-danger small'>{formik.errors.Password}</div>): null}
                
                            </div>
                        </div>
                        <div className='form-row ms-5 p-2'>

                            <div className="form-group  ms-2 col-md-11">
                           

                                <input type="Address" 
                                class="form-control" 
                                placeholder="Address"
                                id='Address'
                                name='Address'
                               onChange={formik.handleChange}
                                 onBlur={formik.handleBlur}
                                value={formik.values.Address} />
            {formik.touched.Address && formik.errors.Address?(<div className='text-danger small'>{formik.errors.Address}</div>):null}
                            </div>
                            <div className="form-group  mt-3 ms-2 col-md-11">
                          

                                <input type="Address2" 
                                class="form-control" 
                                placeholder="Address2" 
                                id='Address2' 
                                name='Address2' 
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.Address2} />
            {formik.touched.Address2 && formik.errors.Address2?(<div className=' text-danger small'>{formik.errors.Address2}</div>):null}

                            </div>
                        </div>
                        <div className="form-row d-flex   flex-row  ms-5 p-2">
                            <div className="form-group ms-2 col-md-6">
                          

                                <input type="text" 
                                class="form-control" 
                                placeholder="Country" 
                                id='Country'  
                                 name='Country'
                               onChange={formik.handleChange}
                               onBlur={formik.handleBlur}
                                value={formik.values.Country} />
                          {formik.touched.Country && formik.errors.Country?(<div className='text-danger small'> {formik.errors.Country}</div>):null}



                            </div>
                            <div className="form-group ms-5 col-md-4">
                            

                                <select className='form-control ' 
                                id='state' 
                               name='state'
                               onChange={formik.handleChange}
                               onBlur={formik.handleBlur}
                                value={formik.values.state}>

                                    <option >State choose...</option>
                                    <option>....</option>
                                    <option>....</option>
                                    <option>....</option>
                                </select>
                          {formik.touched.state && formik.errors.state?(<div className='text-danger small'> {formik.errors.state}</div>):null}

                            </div>

                        </div>

                        <div className='form-row ms-5 p-2 d-flex flex-row'>
                            <div className='ms-2'>Gender :</div>
                            <div className="custom-control custom-radio ms-3 ">
                                <input type="radio" 
                                name='customRadio' 
                                className='custom-control-input' 
                                id='male' 
                                checked="checked" value='True'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                               
                                />
                                <label className=' custom-control-label ms-2' >
                                    Male
                                </label>
                            </div>
                            <div className="custom-control custom-radio ms-5  ">
                                <input type="radio" 
                                name='customRadio' 
                                className='custom-control-input' 
                                id='female' 
                               checked="checked" value='True'
                               onChange={formik.handleChange}
                               onBlur={formik.handleBlur}
                              
                              
                                />
                                <label className='custom-control-label ms-2' >Female</label>
                             </div>

                            </div>
                             <div className='form-row ms-5 p-2'>

                            <div className="form-check ms-2 col-md-11">
                                <input type="checkbox" class="form-check-input border" />
                                <label className='form-check-label ms-2'> Agree to terms and conditions</label>
                            </div>

                            </div>

                             <div className='form-row ms-5 p-2 d-flex flex-row'>

                            <button className=' btn  m-2 ms-0' type='submit' style={{ backgroundColor: '#885f43', color: 'white' }}>Submit</button>
                             <div className='small mt-3 ms-3'> Already have an account ? Login

                        </div>

                         </div>
                    </form>

                </div>
                <div ><img src={image} style={{ width: '75%', height: '100%' }} /></div>
            </div>
        </div>

    )
}

export default SignUpForm

