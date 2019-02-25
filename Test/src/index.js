import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class FoodForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = 
	{
		location: '',
		cuisineType: 'No Preference'
	
	};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    /*TO DO*/
  }

  handleSubmit(event) {
    /*TO DO*/
  }

  render() {
    return (
	<div align="center">
      <form onSubmit={this.handleSubmit}>
        <label>
          Your Location: 
		  <br/>
          <input name="location" type="text" value={this.state.location} onChange={this.handleChange} />
        </label>
		
		<br/>
		<br/>
		<label>
		  Food Preference:
			<br/>
			<select name="cuisineType" value={this.state.cuisineType} onChange={this.handleChange}>
				<option value="No Preference">No Preference</option>
				<option value="American">American</option>
				<option value="Bakery">Bakery</option>
				<option value="Chinese">Chinese</option>
				<option value="Thai">Thai</option>
			</select>
		</label>
		<br/>
		<br/>
		<label>
		  Walking Time:
			<br/>
			<select name="cuisineType" value={this.state.cuisineType} onChange={this.handleChange}>
				<option value="<5">Under 5 Minutes</option>
				<option value="5-10">5-10 Minutes</option>
				<option value="10-15">10-15 Minutes</option>
				<option value="15-20">15-20 Minutes</option>
				<option value=">20">Over 20 Minutes</option>
			</select>
		</label>
		<br/>
		<br/>
        <input type="submit" value="Submit" />
      </form>
	  </div>
    );
  }
}

ReactDOM.render(
  <FoodForm/>,
  document.getElementById('root')
);