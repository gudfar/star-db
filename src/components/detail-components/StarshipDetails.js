import React from "react";
import {withDetailsData} from "../hoc-helpers";
import {ItemDetails} from "./index";
import {DetailRow} from "../index";


const withDetailsChildFunction = (Wrapped) =>{
    return (props) => {
        return (
            <Wrapped {...props}>
                <DetailRow field={'model'} label={'Model'}/>
                <DetailRow field={'length'} label={'Length'}/>
                <DetailRow field={'costInCredits'} label={'Cost'}/>
            </Wrapped>
        );
    }
};

const StarshipDetails = withDetailsData(withDetailsChildFunction(ItemDetails), "getStarship", "getStarshipImage");

export default StarshipDetails;