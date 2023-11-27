type State = {
  hasChild: boolean;
  hasSon: boolean;
  hasDaughter: boolean;
  hasFather: boolean;
  hasMother: boolean;
  hasTrueGrandfather: boolean;
  hasTrueGrandmother: boolean;
  hasWife: boolean;
  hasHusband: boolean;
};
type Action = {
  type: string;
};

function reducer(state: State, action: Action) {
  switch (action.type) {
    case "husband": {
      return {
        ...state,
        hasHusband: state.hasWife === true ? false : !state.hasHusband,
      };
    }
    case "wife": {
      return {
        ...state,
        hasWife: state.hasHusband === true ? false : !state.hasWife,
      };
    }
    case "son": {
      return {
        ...state,
        hasSon: !state.hasSon,
        hasChild: state.hasSon || state.hasDaughter ? true : false,
      };
    }
    case "daughter": {
      return {
        ...state,
        hasDaughter: !state.hasDaughter,
        hasChild: state.hasSon || state.hasDaughter ? true : false,
      };
    }
    case "father": {
      return {
        ...state,
        hasFather: !state.hasFather,
      };
    }
    case "mother": {
      return {
        ...state,
        hasMother: !state.hasMother,
      };
    }
    case "grandfather": {
      return {
        ...state,
        hasTrueGrandfather: !state.hasTrueGrandfather,
      };
    }
    case "grandmother": {
      return {
        ...state,
        hasTrueGrandmother: !state.hasTrueGrandmother,
      };
    }
    default:
      return state;
  }
}

export default reducer;
