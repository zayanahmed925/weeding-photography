import React from 'react';
import './Blogs.css';
const Blogs = () => {
    return (
        <div className='container my-5 question-container'>
            <div className="question-1">
                <h2>Q1. Difference between authorization and authentication</h2>
                <p>
                    <ul>Authentication:
                        <li>Authentication confirms your identity to grant access to the system.</li>
                        <li>It is the process of validating user credentials to gain user access.</li>
                        <li>It determines whether user is what he claims to be.</li>
                    </ul>
                    <ul>Authorization:
                        <li>Authorization determines whether you are authorized to access the resources.</li>
                        <li>It is the process of verifying whether access is allowed or not.</li>
                        <li>It determines what user can and cannot access.</li>
                    </ul>
                </p>
            </div>
            <div className="question-2">
                <h2>Q2. Why are you using firebase? What other options do you have to implement authentication?</h2>
                <p>Indeed, Firebase is a less technical and time-saving alternative to writing full-fledged backend code for dynamic apps.With Firebase, it's pretty simple to connect and use built-in third-party authentication providers, including Google, Facebook, Twitter, among others. And if you want to use a pre-built authentication UI, you have it at your disposal as well.
                    <br />
                    <li>Okta</li>
                    <li>Duo</li>
                    <li>ESET</li>
                </p>
            </div>
            <div className="question-3">
                <h2>Q3.What other services does firebase provide other than authentication?</h2>
                <li>Hosting</li>
                <li>Storage</li>
                <li>Cloud Messaging</li>
                <li>Notifications</li>
            </div>
        </div>
    );
};

export default Blogs;