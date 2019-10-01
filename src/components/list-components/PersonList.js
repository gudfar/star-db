import {withListData} from "../hoc-helpers";
import SwapiService from "../../services/SwapiService";
import { ItemList } from "./index";

const { getAllPeople } = new SwapiService();

const PersonList = withListData(ItemList, getAllPeople);

export default PersonList;