import {withChildFunction, withListData} from "../hoc-helpers";
import { ItemList } from "./index";

const renderListItem = ({name}) => `${name}`;

const PlanetList = withListData(withChildFunction(ItemList, renderListItem), "getAllPlanets");

export default PlanetList;