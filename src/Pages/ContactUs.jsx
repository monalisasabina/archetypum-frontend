import PhoneInput from "react-phone-input-2"
import "react-phone-input-2/lib/style.css"
import "./contactUs.css"
import { useState } from "react"

function ContactUs(){

    const [phone, setPhone] = useState("");


    const handleSubmit = (e) =>{
        e.preventDefault();
        // Handle form submission logic here
        console.log("Form submitted");
    };

    return(
        <div className="contact-container">

           {/* Header */}
           <div className="contact-header">
              <h1 >Let's Connect</h1>
              <p>We're always open to feedback and new opportunities.</p>
           </div>

           {/* Contact-Content */}
           <div className="contact-content">
              
            
             {/* Contact Form */}
              <div className="contact-form">

                <form onSubmit={handleSubmit}>
                    <h3>Send Us a Message</h3>

                    {/* First Name */}
                    <input
                         type="text"
                         placeholder="Enter Your First Name"
                    />

                    {/* Last Name */}
                    <input 
                          type="text"
                          placeholder="Enter Your Last Name"
                    />

                    {/* Email */}
                    <input
                          type="email"
                          placeholder="Enter Your Email Address"
                    />

                    {/* Mobile Number */}
                    <div className="contact-mobile">

                       <PhoneInput
                            country={"ke"}
                            onlyCountries={["ke", "ug", "tz"]}
                            enableSearch={true}
                            value={phone}
                            onChange={setPhone}
                            placeholder="Enter Your Mobile Number"
                            inputProps={{
                                name: "phone",
                                required: true,
                                autoFocus: false
                            }}
    
                       />
                    </div>

                    {/* Message */}
                    <textarea
                            placeholder="Enter Your Message"
                    >
                    </textarea>

                    {/* Send Message */}
                    <button>Send Message</button>

                </form>

              </div>

              {/* Company Contacts */}
              <div className="contact-contacts">
                <h3>Company Contacts come on this side</h3>

              </div>

           </div>

        </div>
    )
}

export default ContactUs