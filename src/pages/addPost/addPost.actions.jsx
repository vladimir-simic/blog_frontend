import axios from "axios";

const addPost = ( { title, content, author }) => async dispatch => {

  const contentId = await axios
    .post("/posts")
    .then(response => {
      if (response && response.status === 200) {
        return response.data.payload.contentId;
      }
    });

  axios
    .post(
      `/posts`,
      {
        contentId,
        title,
        content,
        author
      }
    )
    .then(response => {
      if (response && response.status === 200) {
        dispatch({
          type: "CREATE_POST_SUCCESS",
          payload: response.data.payload
        });
      }
    });
};

export { addPost };