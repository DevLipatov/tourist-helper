import React, {Component} from 'react';
import {compose} from "redux";
import {connect} from 'react-redux';
import withDataService from "../hoc/with-data-service";
import {shortInfoLoaded, shortInfoLoadedError} from "../../actions";
import CustomSpinner from "../custom-spinner";
import ErrorIndicator from "../error-indicator";
import CountryCardList from "./country-card-list";

class CountryCardListContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {selectedCategory: props.selectedCategory}
    }

    componentDidUpdate() {
        if (this.state.selectedCategory !== this.props.selectedCategory)  this.updateList();
    }

    componentWillMount() {this.updateList()}

    updateList() {
        const {dataService, selectedCategory, shortInfoLoaded, shortInfoLoadedError} = this.props;
        dataService.getCountriesByCategory(selectedCategory)
            .then((info) => {
                this.setState({selectedCategory: selectedCategory});
                shortInfoLoaded(info)
            })
            .catch((err) => shortInfoLoadedError(err));
    };

    render() {
        const {shortInfo, shortInfoLoading, shortInfoError, selectedCategory} = this.props;

        if (shortInfoLoading) return <CustomSpinner/>;

        if (shortInfoError) return <ErrorIndicator/>;

        const sortedInfo = shortInfo.filter((el) => el.category === selectedCategory);

        return <CountryCardList data={sortedInfo}/>
    }
}

const mapStateToProps = ({shortInfo, selectedCategory, shortInfoLoading, shortInfoError}) => {
    return {shortInfo, selectedCategory, shortInfoLoading, shortInfoError}
};

const mapDispatchToProps = {shortInfoLoaded, shortInfoLoadedError};

export default compose(withDataService(), connect(mapStateToProps, mapDispatchToProps)
)(CountryCardListContainer);