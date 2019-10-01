import React, { Component } from 'react';
import {Spinner} from "../index";

const withDetailsData = (View, getItemDetails) => {

    return class extends Component {
        constructor(props) {
            super(props);
            this.state = {
                item: null,
                loading: true
            };
        };

        fetchItem () {
            const { itemId } = this.props;
            if (!itemId) {
                return;
            }

            getItemDetails(itemId)
                .then((item) => {
                    this.setState({item, loading: false});
                });
        }

        componentDidMount() {
            this.fetchItem();
        }

        componentDidUpdate(prevProps) {
            if (this.props.itemId !== prevProps.itemId) {
                this.setState({loading: true});
                this.fetchItem();
            }
        }

        render() {

            if (this.state.loading) {
                return <Spinner/>
            }

            const { item } = this.state;
            return <View {...this.props} item={item}/>
        }
    };
};

export default withDetailsData;