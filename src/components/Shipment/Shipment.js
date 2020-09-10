import React from 'react';
import { useForm } from 'react-hook-form';
import './Shipment.css'
import { useContext } from 'react';
import { userContext } from '../../App';

const Shipment = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);
    const [loggedInUser, setLoggedInUser] = useContext(userContext)
    console.log(watch("example")); // watch input value by passing the name of it

    return (
        <form className='ship-form' onSubmit={handleSubmit(onSubmit)}>
            <input name="name" defaultValue={loggedInUser.name} placeholder="Your Name" ref={register({ required: true })} />
            {errors.name && <span className="error">name is required</span>}
            <input name="email" defaultValue={loggedInUser.email} placeholder="Your Email" ref={register({ required: true })} />
            {errors.name && <span className="error">email is required</span>}
            <input name="phone" placeholder="Your Phone Number" ref={register({ required: true })} />
            {errors.name && <span className="error">phone number is required</span>}
            <input name="address" placeholder="Your Address" ref={register({ required: true })} />
            {errors.name && <span className="error">address is required</span>}
            <input name="zip" placeholder="Your Zip Code" ref={register({ required: true })} />
            {errors.name && <span className="error">Zip Code is required</span>}
            <input type="submit" />
        </form>
    );
};

export default Shipment;