import React from "react";
import PropTypes from "prop-types";
import deburr from "lodash/deburr";
import Downshift from "downshift";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Popper from "@material-ui/core/Popper";
import Paper from "@material-ui/core/Paper";
import MenuItem from "@material-ui/core/MenuItem";
import Chip from "@material-ui/core/Chip";

const suggestions = [
  { label: "No Preference" },
  { label: "Afghan" },
  { label: "African" },
  { label: "American" },
  { label: "Armenian" },
  { label: "Asian" },
  { label: "Australian" },
  { label: "Bagels/Pretzels" },
  { label: "Bakery" },
  { label: "Bangladeshi" },
  { label: "Barbecue" },
  { label: "Basque" },
  { label: "Bottled Beverages " },
  { label: "Brazilian" },
  { label: "Cafe/Coffee/Tea" },
  { label: "Cajun" },
  { label: "Californian" },
  { label: "Caribbean" },
  { label: "Chicken" },
  { label: "Chilean" },
  { label: "Chinese" },
  { label: "Chinese/Cuban" },
  { label: "Chinese/Japanese " },
  { label: "Continental" },
  { label: "Creole" },
  { label: "Creole/Cajun" },
  { label: "Czech" },
  { label: "Delicatessen" },
  { label: "Donuts" },
  { label: "Eastern European " },
  { label: "Egyptian" },
  { label: "English" },
  { label: "Ethiopian" },
  { label: "Filipino" },
  { label: "French" },
  { label: "Fruits/Vegetables " },
  { label: "German" },
  { label: "Greek" },
  { label: "Hamburgers" },
  { label: "Hawaiian" },
  { label: "Hotdogs" },
  { label: "Hotdogs/Pretzels " },
  { label: "Ice Cream/Gelato/Yogurt/Ices " },
  { label: "Indian" },
  { label: "Indonesian" },
  { label: "Iranian" },
  { label: "Irish" },
  { label: "Italian" },
  { label: "Japanese" },
  { label: "Jewish/Kosher" },
  { label: "Juice/Smoothies/Fruit Salads " },
  { label: "Korean" },
  { label: "Latin" },
  { label: "Mediterranean" },
  { label: "Mexican" },
  { label: "Middle Eastern" },
  { label: "Moroccan" },
  { label: "Not Listed/Not Applicable " },
  { label: "Nuts/Confectionary " },
  { label: "Other" },
  { label: "Pakistani" },
  { label: "Pancakes/Waffles " },
  { label: "Peruvian" },
  { label: "Pizza" },
  { label: "Pizza/Italian" },
  { label: "Polish" },
  { label: "Polynesian" },
  { label: "Portuguese" },
  { label: "Russian" },
  { label: "Salads" },
  { label: "Sandwiches" },
  { label: "Sandwiches/Salads/Mixed Buffet " },
  { label: "Scandinavian" },
  { label: "Seafood" },
  { label: "Soul Food" },
  { label: "Soups" },
  { label: "Soups & Sandwiches " },
  { label: "Southwestern" },
  { label: "Spanish" },
  { label: "Steak" },
  { label: "Tapas" },
  { label: "Tex-Mex" },
  { label: "Thai" },
  { label: "Turkish" },
  { label: "Vegetarian" },
  { label: "Vietnamese/Cambodian/Malaysia" }
];

function renderInput(inputProps) {
  const { InputProps, classes, ref, ...other } = inputProps;

  return (
    <TextField
      InputProps={{
        inputRef: ref,
        classes: {
          root: classes.inputRoot,
          input: classes.inputInput
        },
        ...InputProps
      }}
      {...other}
    />
  );
}

function renderSuggestion({
  suggestion,
  index,
  itemProps,
  highlightedIndex,
  selectedItem
}) {
  const isHighlighted = highlightedIndex === index;
  const isSelected = (selectedItem || "").indexOf(suggestion.label) > -1;

  return (
    <MenuItem
      {...itemProps}
      key={suggestion.label}
      selected={isHighlighted}
      component="div"
      style={{
        fontWeight: isSelected ? 500 : 400
      }}
    >
      {suggestion.label}
    </MenuItem>
  );
}
renderSuggestion.propTypes = {
  highlightedIndex: PropTypes.number,
  index: PropTypes.number,
  itemProps: PropTypes.object,
  selectedItem: PropTypes.string,
  suggestion: PropTypes.shape({ label: PropTypes.string }).isRequired
};

function getSuggestions(value) {
  const inputValue = deburr(value.trim()).toLowerCase();
  const inputLength = inputValue.length;
  let count = 0;

  return inputLength === 0
    ? []
    : suggestions.filter(suggestion => {
        const keep =
          count < 5 &&
          suggestion.label.slice(0, inputLength).toLowerCase() === inputValue;

        if (keep) {
          count += 1;
        }

        return keep;
      });
}

class DownshiftMultiple extends React.Component {
  state = {
    inputValue: "",
    selectedItem: []
  };

  handleKeyDown = event => {
    const { inputValue, selectedItem } = this.state;
    if (
      selectedItem.length &&
      !inputValue.length &&
      event.key === "Backspace"
    ) {
      this.setState({
        selectedItem: selectedItem.slice(0, selectedItem.length - 1)
      });
    }
  };

  handleInputChange = event => {
    this.setState({ inputValue: event.target.value });
  };

  handleChange = item => {
    let { selectedItem } = this.state;

    if (selectedItem.indexOf(item) === -1) {
      selectedItem = [...selectedItem, item];
    }

    this.setState({
      inputValue: "",
      selectedItem
    });
  };

  handleDelete = item => () => {
    this.setState(state => {
      const selectedItem = [...state.selectedItem];
      selectedItem.splice(selectedItem.indexOf(item), 1);
      return { selectedItem };
    });
  };

  render() {
    const { classes } = this.props;
    const { inputValue, selectedItem } = this.state;

    return (
      <Downshift
        id="downshift-multiple"
        inputValue={inputValue}
        onChange={this.handleChange}
        selectedItem={selectedItem}
      >
        {({
          getInputProps,
          getItemProps,
          isOpen,
          inputValue: inputValue2,
          selectedItem: selectedItem2,
          highlightedIndex
        }) => (
          <div className={classes.container}>
            {renderInput({
              fullWidth: true,
              classes,
              InputProps: getInputProps({
                startAdornment: selectedItem.map(item => (
                  <Chip
                    key={item}
                    tabIndex={-1}
                    label={item}
                    className={classes.chip}
                    onDelete={this.handleDelete(item)}
                  />
                )),
                onChange: this.handleInputChange,
                onKeyDown: this.handleKeyDown,
                placeholder: "Select multiple countries"
              }),
              label: "Label"
            })}
            {isOpen ? (
              <Paper className={classes.paper} square>
                {getSuggestions(inputValue2).map((suggestion, index) =>
                  renderSuggestion({
                    suggestion,
                    index,
                    itemProps: getItemProps({ item: suggestion.label }),
                    highlightedIndex,
                    selectedItem: selectedItem2
                  })
                )}
              </Paper>
            ) : null}
          </div>
        )}
      </Downshift>
    );
  }
}

DownshiftMultiple.propTypes = {
  classes: PropTypes.object.isRequired
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: 250
  },
  container: {
    flexGrow: 1,
    position: "relative"
  },
  paper: {
    position: "absolute",
    zIndex: 1,
    marginTop: theme.spacing.unit,
    left: 0,
    right: 0
  },
  chip: {
    margin: `${theme.spacing.unit / 2}px ${theme.spacing.unit / 4}px`
  },
  inputRoot: {
    flexWrap: "wrap"
  },
  inputInput: {
    width: "auto",
    flexGrow: 1
  },
  divider: {
    height: theme.spacing.unit * 2
  }
});

let popperNode;

function IntegrationDownshift(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Downshift id="downshift-simple">
        {({
          getInputProps,
          getItemProps,
          getMenuProps,
          highlightedIndex,
          inputValue,
          isOpen,
          selectedItem
        }) => (
          <div className={classes.container}>
            {renderInput({
              fullWidth: true,
              classes,
              InputProps: getInputProps({
                placeholder: "Search a country (start with a)"
              })
            })}
            <div {...getMenuProps()}>
              {isOpen ? (
                <Paper className={classes.paper} square>
                  {getSuggestions(inputValue).map((suggestion, index) =>
                    renderSuggestion({
                      suggestion,
                      index,
                      itemProps: getItemProps({ item: suggestion.label }),
                      highlightedIndex,
                      selectedItem
                    })
                  )}
                </Paper>
              ) : null}
            </div>
          </div>
        )}
      </Downshift>
      <div className={classes.divider} />
      <DownshiftMultiple classes={classes} />
      <div className={classes.divider} />
      <Downshift id="downshift-popper">
        {({
          getInputProps,
          getItemProps,
          getMenuProps,
          highlightedIndex,
          inputValue,
          isOpen,
          selectedItem
        }) => (
          <div className={classes.container}>
            {renderInput({
              fullWidth: true,
              classes,
              InputProps: getInputProps({
                placeholder: "With Popper"
              }),
              ref: node => {
                popperNode = node;
              }
            })}
            <Popper open={isOpen} anchorEl={popperNode}>
              <div
                {...(isOpen
                  ? getMenuProps({}, { suppressRefError: true })
                  : {})}
              >
                <Paper
                  square
                  style={{
                    marginTop: 8,
                    width: popperNode ? popperNode.clientWidth : null
                  }}
                >
                  {getSuggestions(inputValue).map((suggestion, index) =>
                    renderSuggestion({
                      suggestion,
                      index,
                      itemProps: getItemProps({ item: suggestion.label }),
                      highlightedIndex,
                      selectedItem
                    })
                  )}
                </Paper>
              </div>
            </Popper>
          </div>
        )}
      </Downshift>
    </div>
  );
}

IntegrationDownshift.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(IntegrationDownshift);
