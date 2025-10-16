import PhoneInput from "react-phone-input-2"
import "react-phone-input-2/lib/style.css"
import "./contactUs.css"

import { useState } from "react"
import { FaFacebook } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { MdOutlineEmail } from "react-icons/md";
import { GiPostOffice } from "react-icons/gi";
import { MdOutlineLocationOn } from "react-icons/md";
import { FaRegClock } from "react-icons/fa";

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

             {/* Company Contacts */}
              <div className="contact-contacts">
                <h3>Get in Touch</h3>
                
                <div className="contact-details">
                  <HiOutlineDevicePhoneMobile/>
                  <div className="info-text">
                    <p> <strong>Mobile:</strong></p>
                    <p>+254 700 000 000</p>
                  </div>
                </div>

                <div className="contact-details">
                  <MdOutlineEmail/>
                  <div className="info-text">
                    <p><strong>Email:</strong></p>
                    <p>archetypum@example.com</p>
                  </div>  
                </div>

                <div className="contact-details">
                  <GiPostOffice/>
                  <div className="info-text">
                    <p><strong>Post Office:</strong></p>
                    <p>123 Archetypum P.O. Box, Nairobi, Kenya</p>
                  </div>
                </div>

                <div className="contact-details">
                  <MdOutlineLocationOn/>
                  <div className="info-text">
                    <p><strong>Location:</strong></p>
                    <p>123 Archetypum Street, Nairobi, Kenya</p>
                    <a 
                      href="https://maps.app.goo.gl/PNKmRW3ZBdFcnxjp8" 
                      target="_blank" 
                      rel="noopener noreferrer"
                     >View on Map
                    </a>
                  </div>
                </div>

                 <div className="contact-details">
                  <FaRegClock /> 
                  <div className="info-text">
                    <p><strong>Working Hours:</strong></p>
                    <p>Mon - Sat: 9:00 AM - 5:00 PM</p>
                  </div>
                </div>

                <div className="contact-details social-icons">
                  <p><strong>Follow Us:</strong></p>
                  <a href="https://www.facebook.com/archetypum" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                  <a href="https://twitter.com/archetypum" target="_blank" rel="noopener noreferrer"><FaSquareXTwitter /></a>
                  <a href="https://www.linkedin.com/company/archetypum" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                  <a href="https://www.instagram.com/archetypum" target="_blank" rel="noopener noreferrer"><FaInstagramSquare /></a>
                </div>

              </div>  

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

             

           </div>

        </div>
    )
}

export default ContactUs