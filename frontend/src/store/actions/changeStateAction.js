import { setSidebarShow, setSidebarUnfoldable } from '../reducers/changeState';
// debugger
export const toggleSidebarShow = (visible) => (dispatch) => {
  dispatch(setSidebarShow(visible));
};

export const toggleSidebarUnfoldable = (unfoldable) => (dispatch) => {
  dispatch(setSidebarUnfoldable(unfoldable));
};