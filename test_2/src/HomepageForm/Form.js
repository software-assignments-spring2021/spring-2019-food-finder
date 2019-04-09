import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import {
  InputLabel,
  Select,
  TextField,
  Button,
  MenuItem,
  FormHelperText,
  FormControl,
  MuiThemeProvider,
  Paper,
  Grid
} from "@material-ui/core";
bodyParser = require('body-parser')
request = require('request')
const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 200
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2
  },
  paper: {
    padding: 50
  }
});

class Form extends React.Component {
  state = {
    location: "",
    foodPreference: "",
    walkingTime: ""
  };

  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    this.props.onSubmit(this.state);
  };

  render() {
    const { classes } = this.props;
    return (
      <MuiThemeProvider>
        <Paper className={classes.paper}>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            spacing={24}
          >
            <form className={classes.root}>
              <Grid item xs={12}>
                <FormControl className={classes.formControl}>
                  <InputLabel htmlFor="location">Your Zipcode</InputLabel>
                  <Select
                    name="location"
                    margin="normal"
                    value={this.state.location}
                    onChange={e => this.change(e)}
                  >
                    
                    <MenuItem value="10000">10000</MenuItem>
                    <MenuItem value="10001">10001</MenuItem>
					<MenuItem value="10002">10002</MenuItem>
					<MenuItem value="10003">10003</MenuItem>
					<MenuItem value="10004">10004</MenuItem>
					<MenuItem value="10005">10005</MenuItem>
					<MenuItem value="10006">10006</MenuItem>
					<MenuItem value="10007">10007</MenuItem>
					<MenuItem value="10009">10009</MenuItem>
					<MenuItem value="10010">10010</MenuItem>
					<MenuItem value="10011">10011</MenuItem>
					<MenuItem value="10012">10012</MenuItem>
					<MenuItem value="10013">10013</MenuItem>
					<MenuItem value="10014">10014</MenuItem>
					<MenuItem value="10016">10016</MenuItem>
					<MenuItem value="10017">10017</MenuItem>
					<MenuItem value="10018">10018</MenuItem>
					<MenuItem value="10019">10019</MenuItem>
					<MenuItem value="10020">10020</MenuItem>
					<MenuItem value="10021">10021</MenuItem>
					<MenuItem value="10022">10022</MenuItem>
					<MenuItem value="10023">10023</MenuItem>
					<MenuItem value="10024">10024</MenuItem>
					<MenuItem value="10025">10025</MenuItem>
					<MenuItem value="10026">10026</MenuItem>
					<MenuItem value="10027">10027</MenuItem>
					<MenuItem value="10028">10028</MenuItem>
					<MenuItem value="10029">10029</MenuItem>
					<MenuItem value="10030">10030</MenuItem>
					<MenuItem value="10031">10031</MenuItem>
					<MenuItem value="10032">10032</MenuItem>
					<MenuItem value="10033">10033</MenuItem>
					<MenuItem value="10034">10034</MenuItem>
					<MenuItem value="10035">10035</MenuItem>
					<MenuItem value="10036">10036</MenuItem>
					<MenuItem value="10037">10037</MenuItem>
					<MenuItem value="10038">10038</MenuItem>
					<MenuItem value="10039">10039</MenuItem>
					<MenuItem value="10040">10040</MenuItem>
					<MenuItem value="10041">10041</MenuItem>
					<MenuItem value="10044">10044</MenuItem>
					<MenuItem value="10048">10048</MenuItem>
					<MenuItem value="10055">10055</MenuItem>
					<MenuItem value="10065">10065</MenuItem>
					<MenuItem value="10069">10069</MenuItem>
					<MenuItem value="10075">10075</MenuItem>
					<MenuItem value="10080">10080</MenuItem>
					<MenuItem value="10103">10103</MenuItem>
					<MenuItem value="10105">10105</MenuItem>
					<MenuItem value="10106">10106</MenuItem>
					<MenuItem value="10107">10107</MenuItem>
					<MenuItem value="10110">10110</MenuItem>
					<MenuItem value="10111">10111</MenuItem>
					<MenuItem value="10112">10112</MenuItem>
					<MenuItem value="10115">10115</MenuItem>
					<MenuItem value="10118">10118</MenuItem>
					<MenuItem value="10119">10119</MenuItem>
					<MenuItem value="10121">10121</MenuItem>
					<MenuItem value="10123">10123</MenuItem>
					<MenuItem value="10128">10128</MenuItem>
					<MenuItem value="10153">10153</MenuItem>
					<MenuItem value="10154">10154</MenuItem>
					<MenuItem value="10155">10155</MenuItem>
					<MenuItem value="10158">10158</MenuItem>
					<MenuItem value="10165">10165</MenuItem>
					<MenuItem value="10167">10167</MenuItem>
					<MenuItem value="10168">10168</MenuItem>
					<MenuItem value="10169">10169</MenuItem>
					<MenuItem value="10170">10170</MenuItem>
					<MenuItem value="10171">10171</MenuItem>
					<MenuItem value="10172">10172</MenuItem>
					<MenuItem value="10173">10173</MenuItem>
					<MenuItem value="10174">10174</MenuItem>
					<MenuItem value="10176">10176</MenuItem>
					<MenuItem value="10177">10177</MenuItem>
					<MenuItem value="10178">10178</MenuItem>
					<MenuItem value="10179">10179</MenuItem>
					<MenuItem value="10271">10271</MenuItem>
					<MenuItem value="10279">10279</MenuItem>
					<MenuItem value="10280">10280</MenuItem>
					<MenuItem value="10281">10281</MenuItem>
					<MenuItem value="10282">10282</MenuItem>
					<MenuItem value="10285">10285</MenuItem>
					<MenuItem value="10301">10301</MenuItem>
					<MenuItem value="10302">10302</MenuItem>
					<MenuItem value="10303">10303</MenuItem>
					<MenuItem value="10304">10304</MenuItem>
					<MenuItem value="10305">10305</MenuItem>
					<MenuItem value="10306">10306</MenuItem>
					<MenuItem value="10307">10307</MenuItem>
					<MenuItem value="10308">10308</MenuItem>
					<MenuItem value="10309">10309</MenuItem>
					<MenuItem value="10310">10310</MenuItem>
					<MenuItem value="10312">10312</MenuItem>
					<MenuItem value="10314">10314</MenuItem>
					<MenuItem value="10451">10451</MenuItem>
					<MenuItem value="10452">10452</MenuItem>
					<MenuItem value="10453">10453</MenuItem>
					<MenuItem value="10454">10454</MenuItem>
					<MenuItem value="10455">10455</MenuItem>
					<MenuItem value="10456">10456</MenuItem>
					<MenuItem value="10457">10457</MenuItem>
					<MenuItem value="10458">10458</MenuItem>
					<MenuItem value="10459">10459</MenuItem>
					<MenuItem value="10460">10460</MenuItem>
					<MenuItem value="10461">10461</MenuItem>
					<MenuItem value="10462">10462</MenuItem>
					<MenuItem value="10463">10463</MenuItem>
					<MenuItem value="10464">10464</MenuItem>
					<MenuItem value="10465">10465</MenuItem>
					<MenuItem value="10466">10466</MenuItem>
					<MenuItem value="10467">10467</MenuItem>
					<MenuItem value="10468">10468</MenuItem>
					<MenuItem value="10469">10469</MenuItem>
					<MenuItem value="10470">10470</MenuItem>
					<MenuItem value="10471">10471</MenuItem>
					<MenuItem value="10472">10472</MenuItem>
					<MenuItem value="10473">10473</MenuItem>
					<MenuItem value="10474">10474</MenuItem>
					<MenuItem value="10475">10475</MenuItem>
					<MenuItem value="11001">11001</MenuItem>
					<MenuItem value="11004">11004</MenuItem>
					<MenuItem value="11005">11005</MenuItem>
					<MenuItem value="11040">11040</MenuItem>
					<MenuItem value="11101">11101</MenuItem>
					<MenuItem value="11102">11102</MenuItem>
					<MenuItem value="11103">11103</MenuItem>
					<MenuItem value="11104">11104</MenuItem>
					<MenuItem value="11105">11105</MenuItem>
					<MenuItem value="11106">11106</MenuItem>
					<MenuItem value="11109">11109</MenuItem>
					<MenuItem value="11201">11201</MenuItem>
					<MenuItem value="11203">11203</MenuItem>
					<MenuItem value="11204">11204</MenuItem>
					<MenuItem value="11205">11205</MenuItem>
					<MenuItem value="11206">11206</MenuItem>
					<MenuItem value="11207">11207</MenuItem>
					<MenuItem value="11208">11208</MenuItem>
					<MenuItem value="11209">11209</MenuItem>
					<MenuItem value="11210">11210</MenuItem>
					<MenuItem value="11211">11211</MenuItem>
					<MenuItem value="11212">11212</MenuItem>
					<MenuItem value="11213">11213</MenuItem>
					<MenuItem value="11214">11214</MenuItem>
					<MenuItem value="11215">11215</MenuItem>
					<MenuItem value="11216">11216</MenuItem>
					<MenuItem value="11217">11217</MenuItem>
					<MenuItem value="11218">11218</MenuItem>
					<MenuItem value="11219">11219</MenuItem>
					<MenuItem value="11220">11220</MenuItem>
					<MenuItem value="11221">11221</MenuItem>
					<MenuItem value="11222">11222</MenuItem>
					<MenuItem value="11223">11223</MenuItem>
					<MenuItem value="11224">11224</MenuItem>
					<MenuItem value="11225">11225</MenuItem>
					<MenuItem value="11226">11226</MenuItem>
					<MenuItem value="11228">11228</MenuItem>
					<MenuItem value="11229">11229</MenuItem>
					<MenuItem value="11230">11230</MenuItem>
					<MenuItem value="11231">11231</MenuItem>
					<MenuItem value="11232">11232</MenuItem>
					<MenuItem value="11233">11233</MenuItem>
					<MenuItem value="11234">11234</MenuItem>
					<MenuItem value="11235">11235</MenuItem>
					<MenuItem value="11236">11236</MenuItem>
					<MenuItem value="11237">11237</MenuItem>
					<MenuItem value="11238">11238</MenuItem>
					<MenuItem value="11239">11239</MenuItem>
					<MenuItem value="11241">11241</MenuItem>
					<MenuItem value="11242">11242</MenuItem>
					<MenuItem value="11249">11249</MenuItem>
					<MenuItem value="11354">11354</MenuItem>
					<MenuItem value="11355">11355</MenuItem>
					<MenuItem value="11356">11356</MenuItem>
					<MenuItem value="11357">11357</MenuItem>
					<MenuItem value="11358">11358</MenuItem>
					<MenuItem value="11360">11360</MenuItem>
					<MenuItem value="11361">11361</MenuItem>
					<MenuItem value="11362">11362</MenuItem>
					<MenuItem value="11363">11363</MenuItem>
					<MenuItem value="11364">11364</MenuItem>
					<MenuItem value="11365">11365</MenuItem>
					<MenuItem value="11366">11366</MenuItem>
					<MenuItem value="11367">11367</MenuItem>
					<MenuItem value="11368">11368</MenuItem>
					<MenuItem value="11369">11369</MenuItem>
					<MenuItem value="11370">11370</MenuItem>
					<MenuItem value="11372">11372</MenuItem>
					<MenuItem value="11373">11373</MenuItem>
					<MenuItem value="11374">11374</MenuItem>
					<MenuItem value="11375">11375</MenuItem>
					<MenuItem value="11377">11377</MenuItem>
					<MenuItem value="11378">11378</MenuItem>
					<MenuItem value="11379">11379</MenuItem>
					<MenuItem value="11385">11385</MenuItem>
					<MenuItem value="11411">11411</MenuItem>
					<MenuItem value="11412">11412</MenuItem>
					<MenuItem value="11413">11413</MenuItem>
					<MenuItem value="11414">11414</MenuItem>
					<MenuItem value="11415">11415</MenuItem>
					<MenuItem value="11416">11416</MenuItem>
					<MenuItem value="11417">11417</MenuItem>
					<MenuItem value="11418">11418</MenuItem>
					<MenuItem value="11419">11419</MenuItem>
					<MenuItem value="11420">11420</MenuItem>
					<MenuItem value="11421">11421</MenuItem>
					<MenuItem value="11422">11422</MenuItem>
					<MenuItem value="11423">11423</MenuItem>
					<MenuItem value="11426">11426</MenuItem>
					<MenuItem value="11427">11427</MenuItem>
					<MenuItem value="11428">11428</MenuItem>
					<MenuItem value="11429">11429</MenuItem>
					<MenuItem value="11430">11430</MenuItem>
					<MenuItem value="11432">11432</MenuItem>
					<MenuItem value="11433">11433</MenuItem>
					<MenuItem value="11434">11434</MenuItem>
					<MenuItem value="11435">11435</MenuItem>
					<MenuItem value="11436">11436</MenuItem>
					<MenuItem value="11691">11691</MenuItem>
					<MenuItem value="11692">11692</MenuItem>
					<MenuItem value="11693">11693</MenuItem>
					<MenuItem value="11694">11694</MenuItem>
					<MenuItem value="11697">11697</MenuItem>
					<MenuItem value="12345">12345</MenuItem>
					<MenuItem value="N/A">N/A</MenuItem>

					
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl className={classes.formControl}>
                  <InputLabel htmlFor="foodPreference">
                    Your Food Preference
                  </InputLabel>
                  <Select
                    name="foodPreference"
                    margin="normal"
                    value={this.state.foodPreference}
                    onChange={e => this.change(e)}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value="No Preference">No Preference</MenuItem>
                    <MenuItem value="Afghan">Afghan</MenuItem>
					<MenuItem value="African">African</MenuItem>
					<MenuItem value="American">American</MenuItem>
					<MenuItem value="Armenian">Armenian</MenuItem>
					<MenuItem value="Asian">Asian</MenuItem>
					<MenuItem value="Australian">Australian</MenuItem>
					<MenuItem value="Bagels/Pretzels">Bagels/Pretzels</MenuItem>
					<MenuItem value="Bakery">Bakery</MenuItem>
					<MenuItem value="Bangladeshi">Bangladeshi</MenuItem>
					<MenuItem value="Barbecue">Barbecue</MenuItem>
					<MenuItem value="Basque">Basque</MenuItem>
					<MenuItem value="Bottled Beverages">Bottled Beverages</MenuItem>
					<MenuItem value="Brazilian">Brazilian</MenuItem>
					<MenuItem value="Cafe/Coffee/Tea">Cafe/Coffee/Tea</MenuItem>
					<MenuItem value="Cajun">Cajun</MenuItem>
					<MenuItem value="Californian">Californian</MenuItem>
					<MenuItem value="Caribbean">Caribbean</MenuItem>
					<MenuItem value="Chicken">Chicken</MenuItem>
					<MenuItem value="Chilean">Chilean</MenuItem>
					<MenuItem value="Chinese">Chinese</MenuItem>
					<MenuItem value="Chinese/Cuban">Chinese/Cuban</MenuItem>
					<MenuItem value="Chinese/Japanese">Chinese/Japanese</MenuItem>
					<MenuItem value="Continental">Continental</MenuItem>
					<MenuItem value="Creole">Creole</MenuItem>
					<MenuItem value="Creole/Cajun">Creole/Cajun</MenuItem>
					<MenuItem value="Czech">Czech</MenuItem>
					<MenuItem value="Delicatessen">Delicatessen</MenuItem>
					<MenuItem value="Donuts">Donuts</MenuItem>
					<MenuItem value="Eastern European">Eastern European</MenuItem>
					<MenuItem value="Egyptian">Egyptian</MenuItem>
					<MenuItem value="English">English</MenuItem>
					<MenuItem value="Ethiopian">Ethiopian</MenuItem>
					<MenuItem value="Filipino">Filipino</MenuItem>
					<MenuItem value="French">French</MenuItem>
					<MenuItem value="Fruits/Vegetables">Fruits/Vegetables</MenuItem>
					<MenuItem value="German">German</MenuItem>
					<MenuItem value="Greek">Greek</MenuItem>
					<MenuItem value="Hamburgers">Hamburgers</MenuItem>
					<MenuItem value="Hawaiian">Hawaiian</MenuItem>
					<MenuItem value="Hotdogs">Hotdogs</MenuItem>
					<MenuItem value="Hotdogs/Pretzels">Hotdogs/Pretzels</MenuItem>
					<MenuItem value="Ice Cream/Gelato/Yogurt/Ices">Ice Cream/Gelato/Yogurt/Ices</MenuItem>
					<MenuItem value="Indian">Indian</MenuItem>
					<MenuItem value="Indonesian">Indonesian</MenuItem>
					<MenuItem value="Iranian">Iranian</MenuItem>
					<MenuItem value="Irish">Irish</MenuItem>
					<MenuItem value="Italian">Italian</MenuItem>
					<MenuItem value="Japanese">Japanese</MenuItem>
					<MenuItem value="Jewish/Kosher">Jewish/Kosher</MenuItem>
					<MenuItem value="Juice/Smoothies/Fruit Salads">Juice/Smoothies/Fruit Salads</MenuItem>
					<MenuItem value="Korean">Korean</MenuItem>
					<MenuItem value="Latin">Latin</MenuItem>
					<MenuItem value="Mediterranean">Mediterranean</MenuItem>
					<MenuItem value="Mexican">Mexican</MenuItem>
					<MenuItem value="Middle Eastern">Middle Eastern</MenuItem>
					<MenuItem value="Moroccan">Moroccan</MenuItem>
					<MenuItem value="Not Listed/Not Applicable">Not Listed/Not Applicable</MenuItem>
					<MenuItem value="Nuts/Confectionary">Nuts/Confectionary</MenuItem>
					<MenuItem value="Other">Other</MenuItem>
					<MenuItem value="Pakistani">Pakistani</MenuItem>
					<MenuItem value="Pancakes/Waffles">Pancakes/Waffles</MenuItem>
					<MenuItem value="Peruvian">Peruvian</MenuItem>
					<MenuItem value="Pizza">Pizza</MenuItem>
					<MenuItem value="Pizza/Italian">Pizza/Italian</MenuItem>
					<MenuItem value="Polish">Polish</MenuItem>
					<MenuItem value="Polynesian">Polynesian</MenuItem>
					<MenuItem value="Portuguese">Portuguese</MenuItem>
					<MenuItem value="Russian">Russian</MenuItem>
					<MenuItem value="Salads">Salads</MenuItem>
					<MenuItem value="Sandwiches">Sandwiches</MenuItem>
					<MenuItem value="Sandwiches/Salads/Mixed Buffet">Sandwiches/Salads/Mixed Buffet</MenuItem>
					<MenuItem value="Scandinavian">Scandinavian</MenuItem>
					<MenuItem value="Seafood">Seafood</MenuItem>
					<MenuItem value="Soul Food">Soul Food</MenuItem>
					<MenuItem value="Soups">Soups</MenuItem>
					<MenuItem value="Soups & Sandwiches">Soups & Sandwiches</MenuItem>
					<MenuItem value="Southwestern">Southwestern</MenuItem>
					<MenuItem value="Spanish">Spanish</MenuItem>
					<MenuItem value="Steak">Steak</MenuItem>
					<MenuItem value="Tapas">Tapas</MenuItem>
					<MenuItem value="Tex-Mex">Tex-Mex</MenuItem>
					<MenuItem value="Thai">Thai</MenuItem>
					<MenuItem value="Turkish">Turkish</MenuItem>
					<MenuItem value="Vegetarian">Vegetarian</MenuItem>
					<MenuItem value="Vietnamese/Cambodian/Malaysia">Vietnamese/Cambodian/Malaysia</MenuItem>		
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl className={classes.formControl}>
                  <InputLabel htmlFor="walkingTime">Walking Time</InputLabel>
                  <Select
                    name="walkingTime"
                    margin="normal"
                    value={this.state.walkingTime}
                    onChange={e => this.change(e)}
                  >
                    <MenuItem value="No Preference">No Preference</MenuItem>
					// for the below option, search for restaurants in the user's zipcode area                   
				    <MenuItem value="Nearby">Nearby</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <Button
                  onClick={() => this.onSubmit()}
                  color="primary"
                  margin="large"
                  size="large"
                  variant="raised"
                >
                  Submit
                </Button>
              </Grid>
            </form>
          </Grid>
        </Paper>
      </MuiThemeProvider>
    );
  }
}

//Form.get('/query', function(req, res) {
    //res.sendFile('query.html', {
    //    'root': __dirname + '/public/query'
  //  });
//});
Form.post('/query', function(req, resp) {
var _zipcode = req.body.location;
var _foodPref = req.body.foodPreference;

});
Form.use(bodyParser.urlencoded({
	extended: true
}));
var options = {
	url: 'http://127.0.0.1:5000/user/',
	method: 'GET',
	auth: {
			user: 'admin',
			password: 'admin'
	},
	formData: {
			zipcode: _zipcode,
			cuisine_type: _foodPref,
			
	}
}
request(options, function(err, res, body) {
	if (err) {
			console.log(err);
			return;
	}
	console.log('Response: ', res)
	console.log('Returned data: ', body)
})
Form.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Form);
