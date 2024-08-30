import React,{useState} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from 'react';

const Total = ({ cartCount }) => {
    const [msg,setMsg]=useState();

    const generateTransactionId = () => {
        return Math.floor(Math.random() * 1000000000);
      };


  const gst = 55.55;
  console.log("total,", cartCount);
  const res = cartCount.map((tot) => tot.price * tot.quantity);
  console.log("res", res);
  const totalSum = res.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);

  const re = totalSum + gst;

  const [formData, setFormData] = useState({
    email: '',
  });
  const handlePlaceOrder = () => {
    const transactionId = generateTransactionId();
    const message = `You paid ${re.toFixed(2)}. Your Order is successfully placed... Your transaction Id is ${transactionId}.`;
    setMsg(message);
    if(formData.email){
        toast.success('Order successfully placed!', {
          autoClose: 5000,
        });
    }else{
        toast.success("please fill email",{
            autoClose:3000,
        });
    }
  };



  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };
  

  const handleSubmit = (e) => {
    console.log("formadata.....",formData);
    e.preventDefault();

    emailjs.sendForm(
      'service_5fkzb1b', // Replace with your EmailJS service ID
      'template_5bldvmp', // Replace with your EmailJS template ID
      e.target,
      'lZ2OTpKbbkpC3lr98-avE' // Replace with your EmailJS user ID
    ).then((result) => {
      console.log(result.text);
    //   alert('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    }, (error) => {
      console.log(error.text);
      alert('Failed to send message.');
    });
    e.target.reset();
  };

  return (
    <>
    {
        cartCount.length>0 ? 
        <>
            <div
      style={{
        position: 'fixed',
        right: '20px',
        top: '50%',
        transform: 'translateY(-50%)',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        width: '300px',
        backgroundColor: '#fff',
        zIndex: 1000
    }}
    >
      <h2 style={{ margin: '0 0 10px 0' }}>Total Sum: ${totalSum.toFixed(2)}</h2>
      <h3 style={{ margin: '0 0 10px 0' }}>GST: ${gst.toFixed(2)}</h3>
      <h3 style={{ margin: '0' }}>Pay: ${re.toFixed(2)}</h3>

      <br></br>
      <form onSubmit={handleSubmit}>

      <div className="form-group">
        {/* <label htmlFor="email">Email</label> */}
        <input 
          type="email"
          id="email"
          name="email"
          placeholder='enter your email'
          value={formData.email}
          onChange={handleChange}
          required
          />
      </div>
      <div className="form-group">
        <textarea hidden
          id="message"
          name="message"
          value={msg}
          />
      </div>

      <button
      type="submit"
      onClick={handlePlaceOrder}
      style={{
          marginTop: '20px',
          padding: '10px 20px',
          backgroundColor: '#28a745',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
        >
        Place Order
      </button>
    </form>
      <ToastContainer />
    </div>
        </>
        : 
        <div style={{border:'1px solid red',padding:'15px',margin:'100px'}}>
            <h1>NO Data.........</h1>
        </div>
    }

    </>
  );
};

export default Total;
