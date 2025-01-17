import React from 'react';

class Welcome extends React.Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row vertical-center">
                        <h1>I'm your personal assistant - 'Genie!'</h1>
                        <h3>Ask me a question...</h3>
                        <div className="row top-margin">
                            <h5>Below questions are supported for now..</h5>
                            <div>Hey Genie.. Show me hints?</div>
                            <div>Show me level1 hints?</div>
                            <div>Show me hints of level2?</div>
                            <div>Clear the screen</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Welcome;
