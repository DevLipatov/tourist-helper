import React, {Component} from 'react';
import {compose} from "redux";
import {connect} from 'react-redux';
import withDataService from "../hoc/with-data-service";
import {shortInfoLoaded, shortInfoLoadedError} from "../../actions";
import CustomSpinner from "../custom-spinner";
import ErrorIndicator from "../error-indicator";
import CountryList from "./country-list";

class CountryListContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {selectedCategory: props.selectedCategory}
    }

    componentDidUpdate() {
        if (this.state.selectedCategory !== this.props.selectedCategory) this.updateList();
    }

    componentWillMount() {this.updateList()}

    updateList() {
        const {dataService, selectedCategory, shortInfoLoaded, shortInfoLoadedError} = this.props;
        dataService.getCountriesByCategory(selectedCategory)
            .then((info) => shortInfoLoaded(info))
            .catch((err) => shortInfoLoadedError(err));
        this.setState({selectedCategory: selectedCategory});
    };

    render() {
        const {shortInfo, shortInfoLoading, shortInfoError, selectedCategory} = this.props;

        return shortInfoError ? <ErrorIndicator/> :
            shortInfoLoading ? <CustomSpinner/> :
                <CountryList data={shortInfo.filter((el) => el.category === selectedCategory)}/>
    }
}

const mapStateToProps = ({shortInfo, selectedCategory, shortInfoLoading, shortInfoError}) => {
    return {shortInfo, selectedCategory, shortInfoLoading, shortInfoError}
};

const mapDispatchToProps = {shortInfoLoaded, shortInfoLoadedError};

export default compose(withDataService(), connect(mapStateToProps, mapDispatchToProps)
)(CountryListContainer);