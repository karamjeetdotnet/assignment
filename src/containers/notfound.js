import React from 'react';

const NotFound = ({ location }) => {
    return (<div>
        <h3>
            Page not found for location<code>{location.pathname}</code>
        </h3>
    </div>);
}

export default NotFound;