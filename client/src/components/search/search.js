import React, { Component } from "react";
import { Link } from "react-router-dom";

class SearchForm extends Component {
  render() {
    return (
        <form>
            <div class="row">
                <div class="col s12">
                    <input
                    onChange={this.props.handleInputChange}
                    value={this.props.search}
                    name="search"
                    type="text"
                    className="form-control"
                    placeholder="Search Ingredients"
                    id="search"
                    />
                    <label htmlFor="search"></label>
                    <button onClick={this.props.handleFormSubmit} className="btn btn-large waves-effect waves-light hoverable red accent-3">
                    Search
                    </button>
                </div>
            </div>
      </form>
    );
  }
}

export default SearchForm;