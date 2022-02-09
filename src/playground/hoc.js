// higer order component

import ReactDOM from 'react-dom';
import React from 'react';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>the info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>this is a private info pls dont share</p>}
            <WrappedComponent {...props} />
        </div>
    );
};

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>            
            {props.isAuthenticated ? <WrappedComponent {...props} /> : <p>plz login</p>}
        </div>
    );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

//ReactDOM.render(<AdminInfo isAdmin={true} info="Dtalles" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info="666" />, document.getElementById('app'));