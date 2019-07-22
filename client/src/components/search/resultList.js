import React, { Component } from "react";
import { Link } from "react-router-dom";

 class ResultList extends Component {
     render() {
         return (
             <div class="results">
                <ul class="collection with-header">
                {/* <li class="collection-header"><h1>Recipes</h1></li> */}
                    {this.props.results && this.props.results.hits.map(result => (
                            <li class="collection-item" key={result.id}>
                                <h4>{result.recipe.label}</h4>
                                <img alt={result.recipe.label} className="img-fluid" src={result.recipe.image} />
                                <br></br>
                                <a href={result.recipe.url}>View Recipe</a>
                                <br></br>
                                <ul class="health-labels">
                                    <li>
                                        {result.recipe.healthLabels.map((item) => (<li>{item}</li>))}
                                    </li>
                                </ul>
                                <a class="btn-floating btn-large waves-effect waves-light red"><i class="material-icons">add</i></a>
                            </li>
                    ))}
                    {this.props.results && console.log(this.props.results)}
                </ul>
             </div>
         );
     }
 }


export default ResultList;