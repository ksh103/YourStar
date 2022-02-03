import produce from 'immer';
const initialState = {
  loadFaqsLoading: false,
  loadFaqsDone: false,
  loadFaqsError: null,
  page: 1,
  size: 10,
  faqs: [],
};
export const LOAD_FAQS_REQUEST = 'LOAD_FAQS_REQUEST';
export const LOAD_FAQS_SUCCESS = 'LOAD_FAQS_SUCCESS';
export const LOAD_FAQS_FAILURE = 'LOAD_FAQS_FAILURE';

const reducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_FAQS_REQUEST:
        draft.loadFaqsLoading = true;
        draft.loadFaqsDone = false;
        draft.loadFaqsError = null;
        break;
      case LOAD_FAQS_SUCCESS: {
        draft.loadFaqsLoading = false;
        draft.loadFaqsDone = true;
        draft.faqs = action.data;
        break;
      }
      case LOAD_FAQS_FAILURE:
        draft.loadFaqsLoading = false;
        draft.loadFaqsError = action.error;
        break;
      default:
        break;
    }
  });
export default reducer;
