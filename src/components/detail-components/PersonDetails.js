import {withDetailsData} from "../hoc-helpers";
import SwapiService from "../../services/SwapiService";
import {ItemDetails} from "./index";

const { getPerson } = new SwapiService();

const PersonDetails = withDetailsData(ItemDetails, getPerson);

export default PersonDetails;