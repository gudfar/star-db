import React, { Component } from 'react';
import {Spinner} from "../index";
import { ServiceContext } from "../../services/context";

const withListData = (View, getItemList) => {
  return class extends Component {
      static contextType = ServiceContext;
      constructor(props) {
          super(props);
          this.state = {
              itemList: null,
              loading: true
          };
      };

      fetchItemList () {
          const swapiService =  this.context.swapiService;
          swapiService[getItemList]()
              .then((itemList) => {
                  this.setState({itemList, loading: false});
              });
      }

      componentDidMount() {
          this.fetchItemList();
      }

      render() {
          const { itemList, loading } = this.state;
          if (loading) {
              return (<Spinner/>)
          }
          return <View {...this.props} itemList={itemList}/>
      }
  }
};

export default withListData;