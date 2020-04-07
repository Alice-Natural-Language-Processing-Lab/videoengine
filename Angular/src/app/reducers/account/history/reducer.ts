/* -------------------------------------------------------------------------- */
/*                          Product Name: VideoEngine                         */
/*                            Author: Mediasoftpro                            */
/*                       Email: support@mediasoftpro.com                      */
/*       License: Read license.txt located on root of your application.       */
/*                     Copyright 2007 - 2020 @Mediasoftpro                    */
/* -------------------------------------------------------------------------- */

import { HistoryAPIAction, HistoryAPIActions, HistoryBLL } from "./actions";
import { IHistory, ACCOUNT_HISTORY_INITIAL_STATE } from "./model";
import { tassign } from "tassign";
import { Action } from "redux";

export function createAccountHistoryReducer() {
  return function accountHistoryReducer(
    state: IHistory = ACCOUNT_HISTORY_INITIAL_STATE,
    a: Action
  ): IHistory {
    const action = a as HistoryAPIAction;

    const bll = new HistoryBLL();
    /*if (!action.meta) {
      return state;
    }*/
    switch (action.type) {
      case HistoryAPIActions.LOAD_STARTED:
        return tassign(state, { loading: true, error: null });

      case HistoryAPIActions.LOAD_SUCCEEDED:
        return bll.loadSucceeded(state, action);

      case HistoryAPIActions.LOAD_FAILED:
        return tassign(state, { loading: false, error: action.error });
    }

    return state;
  };
}
