import './App.css';
import {useFormik} from "formik";
import { signupSchema } from './schemas';

const initialValues={
  firstName:"",
  lastName:"",
  email:"",
  password:"",
}

function App() {
  const {values ,errors, touched, handleBlur,handleChange,handleSubmit }=useFormik({
    initialValues:initialValues,
    validationSchema:signupSchema,
    onSubmit:(values,action)=>{
      console.log(values)
      action.resetForm();
    }
  }) 
  return (
   <>
    <div className='main'>
        <div className='about'>
              <div id='content'>
                  <h1>Learn to paint by watching others</h1>
                  <p>See how experienced painters create art in real-time.
                    Watching scripted tutorials is great, but understanding how artists think is invaluable.</p>
              </div>
        </div>
        <div className='form-detail'>
              <div className='trial'><pre><b>Try it free for 7 days then</b> $20/mo there after</pre></div>
                <form className='form-box' onSubmit={handleSubmit }>
                <div className='input' ><input type="text" placeholder='First Name' id='input-1'
                 name='firstName'
                value={values.firstName}
                onChange={handleChange}
                onBlur={handleBlur}/>
                { errors.firstName && touched.firstName ? (
                  <p className='error'>{errors.firstName}</p>
                ):null}
                </div>
                <div className='input'><input type="text" placeholder='Last Name' 
                name='lastName'
                value={values.lastName}
                onChange={handleChange}
                onBlur={handleBlur}/>
                { errors.lastName && touched.lastName ? (
                  <p className='error'>{errors.lastName}</p>
                ):null}
                </div>
                <div className='input'><input type="email" placeholder='Email Address' 
                name='email'
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}/>
                { errors.email && touched.email ? (
                  <p className='error'>{errors.email}</p>
                ):null}
                </div>
                <div className='input'><input type="password" placeholder='Passowrd' 
                name='password'
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}/>
                { errors.password && touched.password ? (
                  <p className='error'>{errors.password}</p>
                ):null}
                </div>
                <div className='input'><button id='btn' type='submit'>CLAIM YOUR FREE TRAIL</button></div>
                <div id='condition'>By clicking the button you are accepting <b>Terms & Conditions</b></div>
                </form>
        </div>
    </div>
   </>
  );
}

export default App;
