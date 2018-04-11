require('../css/style.css')

import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router.jsx'

const mapping = {
    '#profile' : <div>Profile(<a href="#">Home</a>)</div>,
    '#accounts' : <div>Accounts(<a href="#">Home</a>)</div>,
    '*':      <div>Dashboard <br/>
                <a href="#profile">profile</a><br/>
                <a href="#accounts">accounts</a><br/>
            </div>
}

ReactDOM.render(<Router mapping={mapping} />,document.getElementById("root"));

