    
import React, { Component } from "react";
import { connect } from "react-redux";
//change the route for this
import { addUser } from "../../store/actions/userActions";
import { withRouter, Link } from "react-router-dom";
import { getIngredients } from "../../store/actions/ingredActions";
// import { deleteRecipe } from "../../store/actions/recipeActions";

import "./recipes.css";
import "./recipebook.css";
import "../alarms/myAlarms.css";

class Recipe extends Component {
  render() {
    return (
      <div className="recipebook-card-kcb">
        <div className="recipebook-text-kcb"
         onClick={() => this.props.history.push(`/recipe/${this.props.id}`)}>           
           
                <div className="recipebook-name-kcb">
                    <p>{this.props.name}</p>

            </div>
        
                <div className="recipebook-calories-kcb">
                    <p>Calories: {this.props.calories}</p>
                
                </div>
           
                <button className="alarm-btn delete"
                onClick={() =>
                    this.props.deleteRecipe(
                      this.props.id,
                      localStorage.getItem("user_id")
                    )
                  }> Delete </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

export default connect(
  mapStateToProps,
  { addUser }
)(withRouter(Recipe));