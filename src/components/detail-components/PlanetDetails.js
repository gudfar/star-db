import React from "react";
import {withDetailsData} from "../hoc-helpers";
import {ItemDetails} from "./index";
import {DetailRow} from "../index";

const withDetailsChildFunction = (Wrapped) =>{
    return (props) => {
        return (
            <Wrapped {...props}>
                <DetailRow field={'population'} label={'Population'}/>
                <DetailRow field={'rotationPeriod'} label={'Rotation Period'}/>
                <DetailRow field={'diameter'} label={'Diameter'}/>
            </Wrapped>
        );
    }
};

const PlanetDetails = withDetailsData(withDetailsChildFunction(ItemDetails), "getPlanet", "getPlanetImage");

export default PlanetDetails;