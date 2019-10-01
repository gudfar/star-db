import {withChildFunction, withListData} from "../hoc-helpers";
import SwapiService from "../../services/SwapiService";
import { ItemList } from "./index";

const { getAllPeople } = new SwapiService();

const renderListItem = ({name, gender, birthYear}) => `${name} (${gender} ${birthYear})`;

const PersonList = withListData(withChildFunction(ItemList, renderListItem), getAllPeople);

export default PersonList;