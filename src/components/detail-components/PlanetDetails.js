import React from "react";
import {withDetailsData} from "../hoc-helpers";
import SwapiService from "../../services/SwapiService";
import {ItemDetails} from "./index";
import {DetailRow} from "../index";
import ImageService from "../../services/ImageService";

const { getPlanet } = new SwapiService();
const { getPlanetImage } = new ImageService();

const withDetailsChildFunction = (Wrapped) =>{
    return (props) => {
        return (
            <Wrapped {...props} imageUrl={getPlanetImage}>
                <DetailRow field={'population'} label={'Population'}/>
                <DetailRow field={'rotationPeriod'} label={'Rotation Period'}/>
                <DetailRow field={'diameter'} label={'Diameter'}/>
            </Wrapped>
        );
    }
};

const PlanetDetails = withDetailsData(withDetailsChildFunction(ItemDetails), getPlanet);

export default PlanetDetails;