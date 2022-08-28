const initialState = {
  list: [],
};
const noteReducer = (state = initialState, action) => {
  const list = state.list;
  let newList;
  switch (action.type) {
    case "ADD_NOTE":
      const { id, data } = action.payload;
      return {
        list: [
          {
            id: id,
            ...data,
          },
          ...state.list,
        ],
      };

    case "DELETE_NOTE":
      newList = list.filter((value) => value.id !== action.id);
      return {
        list: [...newList],
      };

    case "OPEN_NOTE":
      for (let value of list) {
        if (value.id === action.payload.id) {
          document.getElementById("note-title-update").value = value.title;
          document.getElementById("note-content-update").value = value.content;
        }
      }
      return state;

    case "UPDATE_NOTE":
      const { title, content } = action.payload.data;
      newList = list.map((value) => {
        if (value.id === action.payload.id) {
          if (!title && !content) return value;
          else if (!title) {
            console.log("hello00");
            return {
              ...value,
              content: content,
            };
          } else if (!content)
            return {
              ...value,
              title: title,
            };
          else
            return {
              ...value,
              title: title,
              content: content,
            };
        } else return value;
      });

      document.getElementById("editNoteModal").classList.remove("noteEdit");
      return {
        list: [...newList],
      };

    default:
      return initialState;
  }
};

export default noteReducer;
