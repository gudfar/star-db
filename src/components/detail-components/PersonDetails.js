import React from "react";
import {withDetailsData} from "../hoc-helpers";
import {ItemDetails} from "./index";
import {DetailRow} from "../index";

const withDetailsChildFunction = (Wrapped) =>{
    return (props) => {
        return (
            <Wrapped {...props}>
                <DetailRow field={'gender'} label={'Gender'}/>
                <DetailRow field={'birthYear'} label={'Birth Year'}/>
                <DetailRow field={'eyeColor'} label={'Eye Color'}/>
            </Wrapped>
        );
    }
};

const PersonDetails = withDetailsData(withDetailsChildFunction(ItemDetails), "getPerson", "getPersonImage");

export default PersonDetails;