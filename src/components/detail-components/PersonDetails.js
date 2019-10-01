import React from "react";
import {withDetailsData} from "../hoc-helpers";
import SwapiService from "../../services/SwapiService";
import {ItemDetails} from "./index";
import {DetailRow} from "../index";
import ImageService from "../../services/ImageService";

const { getPerson } = new SwapiService();
const { getPersonImage } = new ImageService();

const withDetailsChildFunction = (Wrapped) =>{
    return (props) => {
        return (
            <Wrapped {...props} imageUrl={getPersonImage}>
                <DetailRow field={'gender'} label={'Gender'}/>
                <DetailRow field={'birthYear'} label={'Birth Year'}/>
                <DetailRow field={'eyeColor'} label={'Eye Color'}/>
            </Wrapped>
        );
    }
};

const PersonDetails = withDetailsData(withDetailsChildFunction(ItemDetails), getPerson);

export default PersonDetails;