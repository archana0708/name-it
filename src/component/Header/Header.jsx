import React from 'react';
import headimg from "./header.png";
import "./Header.css";

const Header = ({ headTitle,headerExpanded,headerTextExpanded }) =>
{
    return (
        <div className="head_container">
            <img src={ headimg }
                className={ `head_image ${headerExpanded ? `head_image_expanded` : `head_image_contracted`}` }
                alt="headerImage" />
            <h1 className={ `head_text ${headerTextExpanded ? `head_text_expanded` : `head_text_contracted`} ` }> { headTitle }</h1>

        </div >

    );
};

export default Header;
