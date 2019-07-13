import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Badge, Dropdown, DropdownButton} from "react-bootstrap";
import {changeSelectedCategory} from "../../actions";

import './sorting-dpopdown.css';

class SortingDropdown extends Component {

    render() {
        const {categories, changeSelectedCategory} = this.props;

        const dropdownItems = categories.map(
            (el) => {
                return (
                    <Dropdown.Item
                        onClick={() => changeSelectedCategory(el)}
                        key={el}>
                        {el}
                    </Dropdown.Item>
                )
            }
        );

        return (
            <div className="sorting-dropdown">
                <div><h3>
                    <Badge variant="secondary">Temp: +25 - +30 </Badge>
                </h3></div>
                <DropdownButton id="dropdown-basic-button"
                                title="Select country climate"
                                drop="left">
                    {dropdownItems}
                </DropdownButton>
            </div>
        )
    }
}

const mapStateToProps = ({categories, selectedCategory}) => {
    return {categories, selectedCategory}
};

const mapDispatchToProps = {changeSelectedCategory};

export default connect(mapStateToProps, mapDispatchToProps)(SortingDropdown);