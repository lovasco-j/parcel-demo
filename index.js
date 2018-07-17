import React from 'react';
import ReactDOM from 'react-dom';

const ParcelDemo = ({content}) => {
    return (
      <React.Fragment>
        <p className='content'>{content}</p>
      </React.Fragment>
    );
}

ReactDOM.render(
    <div className="wrapper">
        <ParcelDemo content="Trying out Parcel" />
    </div>,
    document.getElementById('app-root')
);
