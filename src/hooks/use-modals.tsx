import {useContext} from "react";
import {ModalsContext} from "../contexts/context";

export function useModals() {
    return useContext(ModalsContext);
}
