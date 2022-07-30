import { TypedUseSelectorHook, useSelector } from "react-redux";
import { State } from "../Store/store";


export const useTypedSelector: TypedUseSelectorHook<State> = useSelector;