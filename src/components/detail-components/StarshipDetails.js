import React from "react";
import {withDetailsData} from "../hoc-helpers";
import {ItemDetails} from "./index";
import {DetailRow} from "../index";
import SwapiService from "../../services/SwapiService";
import ImageService from "../../services/ImageService";

const { getStarship } = new SwapiService();
const { getStarshipImage } = new ImageService();

const withDetailsChildFunction = (Wrapped) =>{
    return (props) => {
        return (
            <Wrapped {...props} imageUrl={getStarshipImage}>
                <DetailRow field={'model'} label={'Model'}/>
                <DetailRow field={'length'} label={'Length'}/>
                <DetailRow field={'costInCredits'} label={'Cost'}/>
            </Wrapped>
        );
    }
};

const StarshipDetails = withDetailsData(withDetailsChildFunction(ItemDetails), getStarship);

export default StarshipDetails;