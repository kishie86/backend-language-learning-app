import React from "react";

class SearchBar extends React.Component {
  render(){
  return (

    <div className="ui large fluid icon input">
      <input onChange={(e) => this.props.theSearch(e.target.value)}
        type="text"
        placeholder= {"Search Event Type"}
       
      />
      <i className="circular search link icon"></i>
      
    </div>
  );

};
}

export default SearchBar