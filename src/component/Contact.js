import React from 'react'
import '../support/css/Contactstyle.css'


class Contact extends React.Component{
    render(){
        return(
            <div className="main-contact-container">
                <div className="contact-header">
                    <div className="container">
                        <p>Contact Us</p>
                    </div>
                </div>
                <div className="container contact-content">
                    <div className="contact-content-1">
                        <p>Enquiry</p>
                        <form className="contact-form">
                            <label>Name :</label>
                            <input type="text"></input>
                            
                            <label>Email :</label>
                            <input type="text"></input>

                            <label>Subject :</label>
                            <input type="text"></input>

                            <label>Message :</label>
                            <textarea rows="7"></textarea>

                            <button>Send Message</button>
                        </form>
                    </div>
                    <div className="contact-content-2">
                        <div className="address">
                            <p>Head Office</p>
                            <p className="info">Kawasan Pergudangan & Industri Tunas Bitung Blok A2 No. 15, Pasir Jaya, Cikupa, Tangerang, Banten 15710</p>
                            <p className="info">Telephones : 021-22028999</p>
                            <p className="info">Email : ats@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact