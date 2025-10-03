import { useState } from "react";
import "./newsletter.css";
import personNewsletter from "../Pictures/Outdoor Reading Moment.png"

const NewsletterSignup = () => {

    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Send to backend (mocked here)
       const response = await fetch("https://localhost:5555/subscribe", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email }),
        });

        if (response.ok) {
            setMessage("Thank you for subscribing!");
            setEmail("");
        } else {
            setMessage("Subscription failed. Please try again.");
        }
    };

    return(
        <div className="newsletter">

            {/* Newsletter Image */}
            <div className="newsletter-image">
                <img src={personNewsletter} alt="Newsletter" />
            </div>

            {/* Newsletter Text */}
            <h2>Subscribe to our Newsletter</h2>
            <p>Get  the latest blogs straight to your inbox</p>

           <form onSubmit={handleSubmit} className="newsletter-form">
               <input 
                    type="email" 
                    placeholder="Enter your email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
               <button type="submit">Subscribe</button>
           </form>

           <p className="newsletter-privacy">
               We value your privacy. Unsubscribe at any time.
           </p>

           {/* Message */}
              {message && <p className="newsletter-msg">{message}</p>}
        </div>
    )
}

export default NewsletterSignup;