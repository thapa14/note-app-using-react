export const addNote = (data) => {
  return {
    type: "ADD_NOTE",
    payload: {
      id: new Date().getTime().toString(),
      data: data,
    },
  };
};

export const deleteNote = (id) => {
  return {
    type: "DELETE_NOTE",
    id: id,
  };
};

export const openNote = (id) => {
  return {
    type: "OPEN_NOTE",
    payload: {
      id: id,
    },
  };
};
export const updateNote = (id, data) => {
  return {
    type: "UPDATE_NOTE",
    payload: {
      id: id,
      data: data,
    },
  };
};
