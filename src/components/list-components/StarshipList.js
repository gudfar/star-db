import {withChildFunction, withListData} from "../hoc-helpers";
import { ItemList } from "./index";
import SwapiService from "../../services/SwapiService";

const { getAllStarships } = new SwapiService();

const renderListItem = ({name, model}) => `${name} (${model})`;

const StarshipList = withListData(withChildFunction(ItemList, renderListItem), getAllStarships);

export default StarshipList;