import {withChildFunction, withListData} from "../hoc-helpers";
import { ItemList } from "./index";

const renderListItem = ({name, gender, birthYear}) => `${name} (${gender} ${birthYear})`;

const PersonList = withListData(withChildFunction(ItemList, renderListItem), "getAllPeople");

export default PersonList;