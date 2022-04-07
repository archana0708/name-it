import React from 'react';
import Header from '../Header/Header';
import Resultbox from '../Resultbox/Resultbox';
import Search from '../searchbox/Search';
import './App.css';



const name = require('@rstacruz/startup-name-generator');


class App extends React.Component
{

    state = {
        headerText: "Name It!!",
        headerExpanded: true,
        headerTextExpanded: true,
        suggestednames: [],
    };

    handleInputChange = (inputText) =>
    {
        // alert("hello");
        // console.log('input--',!(inputText));
        name(inputText);
        this.setState({ headerExpanded: !inputText });
        this.setState({
            headerTextExpanded: !inputText,
            suggestednames: inputText ? name(inputText) : [],
        });
        // this.setState({ suggestednames: name(inputText) });


    };

    render()
    {
        console.log(name(this.state.suggestednames));
        return (
            <div>
                <Header headerExpanded={ this.state.headerExpanded }
                    headTitle={ this.state.headerText } headerTextExpanded={ this.state.headerTextExpanded } />
                <Search onInputChange={ this.handleInputChange } />
                <Resultbox suggestednames={ this.state.suggestednames } />
            </div>
            //    <h1> This is Archana first react project.</h1>
        );
    }
}

export default App;