import React from "react";
import './Namecard.css';

const nameCheapUrl = 'https://www.namecheap.com/domains/registration/results/?domain=%27%3B';

const Namecard = ({ sname }) =>
{
    return (
        <a className='card_link' href={ `${nameCheapUrl}${sname}` }>
            <div className="result_name_card">
                <p className="result_name">{ sname }</p>
            </div>
        </a>
    );
};

export default Namecard;