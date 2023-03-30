import {useState}from 'react'
import { handlePayment } from '../paystackinterface';
import "./FormControl.css"


const FormControl = () => {

    const [data, setData] = useState({})

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);
        handlePayment(data.email, parseFloat(data.amount))
    }

    const handleChange = (e) =>{
        setData(
            {
                ...data,
                [e.target.name]: e.target.value
            }
        )
    }
  return (
    <>




<div class="login-box">
<h3>Paystack Integration</h3>
 <form onSubmit={handleSubmit}>
     <label className='label1'>Email</label>
   <div class="user-box">
     <input type="email" required name='email' onChange={handleChange} />
   </div>
     <label>Amout</label>
   <div class="user-box">
   <input type="number" required name='amount' onChange={handleChange}/>
   </div><center>
      <button type='submit'>Submit</button>
  
   </center>
 </form>
</div>



        {/* <div className="form-area">
            <h3>Paystack Integration</h3>
            <form onSubmit={handleSubmit}>
                <div className="input-control">
                    <label>Email</label>
                    <input type="email" required name='email' onChange={handleChange} />
                </div>
                <div className="input-control">
                    <label>Amount</label>
                    <input type="number" required name='amount' onChange={handleChange}/>
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div> */}


    </>
  )
}

export default FormControl