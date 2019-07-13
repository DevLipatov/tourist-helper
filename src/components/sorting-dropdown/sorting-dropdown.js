import React from 'react';
import {connect} from 'react-redux';
import {Dropdown, DropdownButton} from "react-bootstrap";
import {changeSelectedCategory} from "../../actions";

import './sorting-dpopdown.css';

const SortingDropdown = ({categories, changeSelectedCategory}) => {

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
        <DropdownButton
            id="dropdown-basic-button"
            title="Select country climate"
            drop="left">
            {dropdownItems}
        </DropdownButton>
    )


};

const mapStateToProps = ({categories}) => {
    return {categories}
};

const mapDispatchToProps = {changeSelectedCategory};

export default connect(mapStateToProps, mapDispatchToProps)(SortingDropdown);