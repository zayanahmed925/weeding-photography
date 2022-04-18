import React from 'react';
import './Question.css';
const Question = () => {
    return (
        <div>
            <section className="container  my-5">
                <div className="row question-container">
                    <div className="col-lg-6 order-lg-last">
                        <div className="map">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14607.596821740068!2d90.373582!3d23.7509735!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x603d2d083289b4a3!2sDhanmondi%2032%20Road%20Bridge%2C%20Dhanmondi%20Bridge%2C%20Dhaka%201209!5e0!3m2!1sen!2sbd!4v1650279331720!5m2!1sen!2sbd" width="550" height="300" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                    <div className="col-lg-6 accordion-container order-first">
                        <h3 className="text-center my-2 fw-bold accordion-title ">Frequently Asked Questions</h3>
                        <div className="accordion accordion-flush" id="accordionFlushExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingOne">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseOne" aria-expanded="false"
                                        aria-controls="flush-collapseOne">
                                        Will You Edit My Pictures?
                                    </button>
                                </h2>
                                <div id="flush-collapseOne" className="accordion-collapse collapse"
                                    aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body"> Yes,dont worry because my all packages are included editing.</div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseTwo" aria-expanded="false"
                                        aria-controls="flush-collapseTwo">
                                        When Will My Photos Be Ready?
                                    </button>
                                </h2>
                                <div id="flush-collapseTwo" className="accordion-collapse collapse"
                                    aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">I always try to delivery as soon as possible.it's take time about 7 working days.</div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseThree" aria-expanded="false"
                                        aria-controls="flush-collapseThree">
                                        Which camera you use for your photography?
                                    </button>
                                </h2>
                                <div id="flush-collapseThree" className="accordion-collapse collapse"
                                    aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">
                                        I always try to use latest camera.and i am not compromise my work Quality.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Question;