import React from 'react';

class SearchBar extends React.Component {

    state = { term: '' };

    onChangeHandler = (event) => {
        this.setState({ term: event.target.value })
    };

    formSubmit = event => {
        event.preventDefault();
        this.props.formSubmit(this.state.term);
    }

    render() {
        return (
           <div className="search-bar ui segment">
               <form onSubmit={this.formSubmit} className="ui from">
                   <div className="field">
                      <label>Video Search</label>
                      <input 
                        type="text" 
                        value={this.state.term}
                        //  onChange={(e) => this.setState({ term: e.target.value  })}
                        onChange={this.onChangeHandler} />
                   </div>
               </form>
           </div>
    );
    }
}

export default SearchBar;