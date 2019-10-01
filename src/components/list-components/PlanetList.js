import {withListData} from "../hoc-helpers";
import { ItemList } from "./index";
import SwapiService from "../../services/SwapiService";

const { getAllPlanets } = new SwapiService();

const PlanetList = withListData(ItemList, getAllPlanets);

export default PlanetList;