import React, { Component } from 'react';
import {Spinner} from "../index";

const withListData = (View, getItemList) => {
  return class extends Component {
      constructor(props) {
          super(props);
          this.state = {
              itemList: null
          };
      };

      fetchItemList () {
          getItemList()
              .then((itemList) => {
                  this.setState({itemList});
              });
      }

      componentDidMount() {
          this.fetchItemList();
      }

      render() {
          const { itemList } = this.state;
          if (!itemList) {
              return (<Spinner/>)
          }
          return <View {...this.props} itemList={itemList}/>
      }
  }
};

export default withListData;