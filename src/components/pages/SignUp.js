import { useState, useEffect } from "react"
import './Log1.css';

export default function SignUp(props){
    const initialValues = { fullname: "", phone: "", address: "", where: "", guest: "", arrivals: "", leaving: "", email: "", password: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        const { name, value } =e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    };

    useEffect(()=>{
        console.log(formErrors);
        if(Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues);
        }
    },[formErrors])

    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.fullname){
          errors.fullname = "Full name is required";
        }
        if (!values.phone){
        errors.phone = "Phone Number is required";
        }
        if (!values.address){
          errors.address = "Address is required";
          }
        if (!values.where){
          errors.where = "Place to visit is required";
          }
        if (!values.arrivals){
          errors.arrivals = "Arrival date is required";
          }
        if (!values.leaving){
        errors.leaving = "Leaving date is required";
        }
        if (!values.guest){
          errors.guest = "Number of guests is required";
          }
        if (!values.email){
            errors.email = "Email is required!";
        }else if (!regex.test(values.email)) {
            errors.email = "This is not a valid email format";
        }
        return errors;
    };

    
    return( 
        <center>
        <div className="auth-form-container">
            {Object.keys(formErrors).length === 0 && isSubmit ? (
            <div className="ui message success">{alert('Submitted Successfully')}</div>) : (
            <div className="ui message success"></div>)}
            <h1>Book Your Trip</h1>
        <form className="login-form" onSubmit={handleSubmit}>
            <label for="fullname">Full Name</label>
            <input type="text" 
                   placeholder="Enter your full name" 
                   id="fullname" 
                   name="fullname" 
                   value={formValues.fullname} 
                   onChange={handleChange}/>
            <p style={{color: 'red'}}>{ formErrors.fullname }</p>
            <label for="phone">Phone</label>
            <input type="number" 
                   placeholder="Enter your phone" 
                   id="phone" 
                   name="phone" 
                   value={formValues.phone} 
                   onChange={handleChange}/>
            <p style={{color: 'red'}}>{ formErrors.phone }</p>
            <label for="email">email</label>
            <input type="email" 
                   placeholder="youremail@gmail.com" 
                   id="email" 
                   name="email" 
                   value={formValues.email} 
                   onChange={handleChange}/>
            <p style={{color: 'red'}}>{ formErrors.email }</p>
            <label for="address">Address</label>
            <input type="text" 
                   placeholder="Enter your address" 
                   id="address" 
                   name="address" 
                   value={formValues.address} 
                   onChange={handleChange}/>
            <p style={{color: 'red'}}>{ formErrors.address }</p>
            <label for="where">Where to</label>
            <input type="text" 
                   placeholder="Place you want to visit" 
                   id="where" 
                   name="where" 
                   value={formValues.where} 
                   onChange={handleChange}/>
            <p style={{color: 'red'}}>{ formErrors.where }</p>
            <label for="guest">How Many Guests</label>
            <input type="text" 
                   placeholder="Number of guest" 
                   id="guest" 
                   name="guest" 
                   value={formValues.guest} 
                   onChange={handleChange}/>
            <p style={{color: 'red'}}>{ formErrors.guest }</p>
            <label for="arrivals">Arrivals</label>
            <input type="date" 
                   placeholder="dd-mm-yyyy" 
                   id="arrivals" 
                   name="arrivals" 
                   value={formValues.arrivals} 
                   onChange={handleChange}/>
            <p style={{color: 'red'}}>{ formErrors.arrivals }</p>
            <label for="leaving">Leaving</label>
            <input type="date" 
                   placeholder="dd-mm-yyyy" 
                   id="leaving" 
                   name="leaving" 
                   value={formValues.leaving} 
                   onChange={handleChange}/>
            <p style={{color: 'red'}}>{ formErrors.leaving }</p>
          
            <button>SUBMIT</button>
        </form>
    </div>
    </center>
    )
}