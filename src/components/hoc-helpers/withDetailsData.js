import React, { Component } from 'react';
import {Spinner} from "../index";
import {ServiceContext} from "../../services/context";

const withDetailsData = (View, getItemDetails, getImageUrl) => {

    return class extends Component {
        static contextType = ServiceContext;
        constructor(props) {
            super(props);
            this.state = {
                item: null,
                loading: true
            };
        };

        fetchItem () {
            const { itemId } = this.props;
            const swapiService =  this.context.swapiService;
            if (!itemId) {
                return;
            }
            swapiService[getItemDetails](itemId)
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
            return <View
                {...this.props}
                item={item}
                imageUrl={this.context.imageService[getImageUrl]}
            />
        }
    };
};

export default withDetailsData;