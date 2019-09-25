import React from 'react'

function About() {
    return (
       <React.Fragment>
           <h2 className='about-title'>How its made </h2>
           <div class="article">
            <p>
                To make the polynomial regression model, I used the Python machine learning library "Sci-kit Learn".&nbsp;
                The data I used to train the model was gathered from the work timer "Toggl".
            </p>
            <p>
                This web app is running on an EC2 instance of Ubuntu with an NGINX webserver.&nbsp;
            The front end was build in React and the backend is PHP.&nbsp;
            The PHP executes the python script and returns a JSON object.
        
            </p>
           
           </div>
        </React.Fragment>
    )
}
export default About;