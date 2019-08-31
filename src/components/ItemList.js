import React, { Component } from 'react';

import './styles/css/item-list.css';
import SwapiService from "../services/SwapiService";
import {Spinner} from "./index";

export default class ItemList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            peopleList: []
        };
    };

    fetchPeopleList () {
        const swapiService = new SwapiService();
        swapiService.getAllPeople()
            .then((peopleList) => {
                peopleList = peopleList.map((p) => ({name: p.name}));
                this.setState({peopleList});
            });
    }

    componentDidMount() {
        this.fetchPeopleList();
    }

    render() {
        const { peopleList } = this.state;
        if (!peopleList) {
            return (<Spinner/>)
        }
        return (
            <ul className="item-list list-group">
                {peopleList.map(({name}, index) => (
                    <li
                        key={index + 1}
                        className="list-group-item"
                        onClick={() => this.props.onPersonSelected(index + 1)}
                    >{name}</li>))}
            </ul>
        );
    }
}
