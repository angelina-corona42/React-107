import './Contact.css';

function Contact(){
    return (
        <div className="contact-page">

            <section className="contact-header">
                <h1>Contact Us</h1>
                <p>Have a question? Send us a message and we will be happy to help. </p>

            </section>

            <section className="contact-section">
                <div className="contact-info">
                    <h2>Get In Touch</h2>

                    <p> We would love to hear from you.</p>
                    <p> Email: example@email.com</p>
                    <p> Phone: (555) 555-5555</p>
                    <p> Monday - Friday</p>

                </div>


                <form className="contact-form">

                    <label>Name</label>

                    <input
                        type="text"
                        placeholder="Enter your name"
                    />


                    <label>Email</label>

                    <input
                        type="email"
                        placeholder="Enter your email"
                    />


                    <label>Message</label>

                    <textarea
                        placeholder="Enter your message"
                        rows="5"
                    ></textarea>


                    <button type="submit">
                        Send Message
                    </button>

                </form>

            </section>

        </div>
    )
}

export default Contact;