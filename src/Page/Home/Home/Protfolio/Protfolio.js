import React from 'react';
import './Protfolio.css';
const Protfolio = () => {
    return (
        <div>
            <section className="container my-5">
                <h1 className="text-center my-5 fw-bold orchid-title-color">Frequently Asked Questions</h1>
                <div className="row">
                    <div className="col-lg-6 order-lg-last">
                        <div className="">

                            <img src="images/Question1.jpg" className="rounded-3 w-100 pb-3" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6 ">
                        <div className="accordion accordion-flush" id="accordionFlushExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingOne">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseOne" aria-expanded="false"
                                        aria-controls="flush-collapseOne">
                                        Where should I focus my budget?
                                    </button>
                                </h2>
                                <div id="flush-collapseOne" className="accordion-collapse collapse"
                                    aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body"> "This depends on what's important to you and your groom. Do
                                        you want the decor to be outstanding? Then find an amazing designer who can help
                                        identify the overall look and creative elements. Do you want a roaring party with a
                                        lively band? Put your money towards a spectacular band and bar list. Before putting
                                        together your budget, sit down with your planner, fiancé, and parents and discuss
                                        how you envision the day going and what is going to bring your vision to life," says
                                        Sikaffy.</div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseTwo" aria-expanded="false"
                                        aria-controls="flush-collapseTwo">How many people on your staff will be work for
                                        wedding?
                                    </button>
                                </h2>
                                <div id="flush-collapseTwo" className="accordion-collapse collapse"
                                    aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">Find out how many assistants, coordinators and event
                                        stylists your planner will bring on the day of, so you can rest assured that
                                        everything will be handled. The final size of the day-of team depends on your
                                        wedding's specific logistics, but they should tell you the number of staff members
                                        needed for the typical wedding they work on.</div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseThree" aria-expanded="false"
                                        aria-controls="flush-collapseThree">
                                        Is there a venue that will let us dance until 2 a.m.?
                                    </button>
                                </h2>
                                <div id="flush-collapseThree" className="accordion-collapse collapse"
                                    aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">Your wedding day is one of the most important days of your
                                        life, and, understandably, you want it to last forever. But all good things, even
                                        weddings, must come to an end. Six to seven hours is plenty of time to wine and dine
                                        your guests and dance the night away (start your event by 5 p.m. and have it end by
                                        midnight). The affair should end with a bang (and with your guests wanting more),
                                        rather than with a fizzle. Plus, you'll spend extra money on overtime staffing fees
                                        so that your handful of raging friends can stay out late, and that's just not worth
                                        it!" notes Baab.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Protfolio;