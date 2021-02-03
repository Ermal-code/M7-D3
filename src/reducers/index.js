export default function (state = {}, action) {
  switch (action.type) {
    case "ADD_JOB_TO_FAVORITE":
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case "REMOVE_JOB_FROM_FAVORITE":
      return {
        ...state,
        favorites: [
          ...state.favorites.filter((job) => job.id !== action.payload.id),
        ],
      };
    case "TO_DETAILS":
      return {
        ...state,
        job: { ...action.payload },
      };
    case "SET_ERROR": {
      return {
        ...state,
        error: action.payload,
      };
    }
    default:
      return state;
  }
}
