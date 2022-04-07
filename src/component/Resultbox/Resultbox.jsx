import React from 'react';
import Namecard from '../Namecard/Namecard';
import './Resultbox.css';
const Resultbox = ({ suggestednames }) =>
{
    const suggnamejsx = suggestednames.map((sname) =>
    {
        return <Namecard sname={ sname } />;
    });
    return (
        <div className='result_box'><p>{ suggnamejsx }</p>
        </div>
    );
};

export default Resultbox;