import React, { useEffect, useState } from 'react';

import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { savePayment, saveShipping } from '../actions/cartActions';
import CheckoutSteps from '../components/CheckoutSteps';

function PaymentScreen(props){
    const [paymentMethod,setPaymentMethod]=useState('');
    
    const userRegister= useSelector(state=>state.userRegister);
    const {loading,userInfo,error}=userRegister;
    const dispatch=useDispatch();

  const submitHandler= (e)=>{
      e.preventDefault();
      dispatch(savePayment({paymentMethod}));
      props.history.push('placeorder')
  }
    return <div>
        <CheckoutSteps step1 step2 step3> </CheckoutSteps>
   
       
    <div className="form">
        <form onSubmit={submitHandler}>
            <ul className="form-container">
                <li>
                    <h2>Payment</h2>
                </li>
                <li>
                    {loading && <div>loading...</div>}  
                    {error && <div>{error}</div>}  

                </li>
                <li>
                    <label htmlFor="paymentMethod">
                      Paypal
                    </label>
                    <input type="radio" name="paymentMethod" id="paymentMethod" value="paypal" onChange={(e)=>setPaymentMethod(e.target.value)}>

                    </input>

                </li>
                
                                
                <li>
                    <button type="submit" className="button primary">Continue</button>
                </li>
                
            </ul>
        </form>

    </div>
    </div>
}
export default PaymentScreen;