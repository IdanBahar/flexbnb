export const SET_SEARCH_TXT = 'SET_SEARCH_TXT'

const initialState = {
  filterBy: {
    txt: '',
    checkIn: null,
    checkOut: null,
    guests: 1,
  }
}


export function searchReducer (state = initialState, action){
    switch(action.type)
    {
        case SET_SEARCH_TXT:
            return{
                ...state,
                filterBy: {...state.filterBy, txt: action.txt}
            }

        case 'SET_FILTER_BY':
            return {
                ...state,
                filterBy: { ...state.filterBy, ...action.filterBy }
            }

            default: return state
    }
}