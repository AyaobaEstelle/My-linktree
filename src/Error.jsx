import React from 'react';

const Error = () => {
    return (
        <div className="404">
            <p>404 error</p>
            <h1>we cant find the page</h1>
            <p>sorry the page you are looking for doesn't exist.</p>
            <a href="">
                <button>Go back</button>
            </a>
            <a href="">
                <button>Take me home</button>
            </a>

        </div>
    );
}
 
export default Error