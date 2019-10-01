import {withChildFunction, withListData} from "../hoc-helpers";
import { ItemList } from "./index";
import SwapiService from "../../services/SwapiService";

const { getAllPlanets } = new SwapiService();

const renderListItem = ({name}) => `${name}`;

const PlanetList = withListData(withChildFunction(ItemList, renderListItem), getAllPlanets);

export default PlanetList;