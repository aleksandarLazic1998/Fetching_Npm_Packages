import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootReducer } from "../rootReducer";

export const useGlobalSelector: TypedUseSelectorHook<RootReducer> = useSelector;
