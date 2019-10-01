import {withListData} from "../hoc-helpers";
import { ItemList } from "./index";
import SwapiService from "../../services/SwapiService";

const { getAllStarships } = new SwapiService();

const StarshipList = withListData(ItemList, getAllStarships);

export default StarshipList;