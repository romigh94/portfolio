import { useState } from "react"
import axios from "axios"

const Contact = () => {

    const [formvalues, setformValues] = useState({
        name: "",
        email: "",
        message: ""
    })

    const [errorMsg, setErrorMsg] = useState(false)
    const [success, setSuccess] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            if(!formvalues.email || !formvalues.name || !formvalues.message) {
                setErrorMsg("All fields are required!")
            } else if (!formvalues.email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i)) {
                setErrorMsg("The email is not valid")
            } else {
                setSuccess("Message sent!")

                const response = await axios.post("/api/contact", formvalues)
                console.log(response)
            }   
        } catch(error) {
            console.log(error)
            setErrorMsg("Error, try again later!")
        }
    }

    const handleChange = (e) => {
        setformValues({
            ...formvalues,
            [e.target.name]: e.target.value
        })
        setErrorMsg(null)
        setSuccess(null)
    }


  return (
    <div className='contact-container' id="/Contact">

        <h1 className='text-center'>Contact me here</h1>

        <p className="text-center pb-5">Feel free to Contact me by submitting this form below OR <br/>
         <a className="ps-1" href="mailto:rominaa.ghaderi94@gmail.com">e-mail me</a> and I will get back to you as soon as possible</p>

        <div className='contact-inner-container'>
            <form className='inside-inner-container' onSubmit={handleSubmit}>

                {errorMsg ?
                <div className="alert alert-danger p-3">
                    <p>{errorMsg}</p>
                </div> 
                :
                ""
                }

                {success ?
                <div className="alert alert-success p-3">
                    <p>{success}</p>
                </div> 
                :
                ""
                }
                
                <div className='pb-3'>
                    <input 
                        type="text" 
                        placeholder='Enter your name here' 
                        name="name"
                        value={formvalues.name}
                        onChange={handleChange}/>
                </div>

                <div className='pb-3'>
                    <input 
                        type="text" 
                        placeholder='Enter your e-mail here' 
                        name="email"
                        value={formvalues.email}
                        onChange={handleChange}/>
                </div>
                <div>
                    <textarea 
                        type="text" 
                        rows="8" 
                        placeholder='Enter your message here' 
                        name="message"
                        value={formvalues.message}
                        onChange={handleChange}
                    />
                </div>

                <div className='text-center pt-3'>
                    <button className='primary-button'>Send message</button>
                </div>

            </form>
        </div>
</div>
  )
}

export default Contact