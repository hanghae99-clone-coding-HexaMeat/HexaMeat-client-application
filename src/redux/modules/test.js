import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";

const SET_TEST = "SET_TEST";
const ADD_TEST = "ADD_TEST";
const EDIT_TEST = "EDIT_TEST";
const DELETE_TEST = "DELETE_TEST";

const setTest = createAction(SET_TEST, (post_list) => ({ post_list }));
const addTest = createAction(ADD_TEST, (test) => ({ test }));
const editTest = createAction(EDIT_TEST, (post_id, post) => ({
  post_id,
  post,
}));
const deleteTest = createAction(DELETE_TEST, (id) => ({ id }));

const initialState = {
  t_list: [],
  list: [{ id: 0, title: "title" }],
};

const addPostAX = (post) => {
  return function (dispatch, getState, { history }) {
    // now upload
    // const headers = {
    //   // "Content-Type": "multipart/form-data",
    //   "Content-Type": "application/json",
    //   "Access-Control-Allow-Origin": "*",
    // };

    let form = new FormData();
    form.append("multipartFile", post.image);
    form.append("title", post.title);
    form.append("content", post.content);
    form.append("categoryId", post.category);
    form.append("userName", post.userName);
    form.append("postPassword", post.postPassword);

    axios
      .post(
        "http://52.79.137.166/api/posts",
        // {
        //   title: post.title,
        //   multipartFile: post.image,
        //   content: post.content,
        //   categoryId: post.category,
        //   userName: post.userName,
        //   postPassword: post.postPassword,
        // }
        form
        // { headers: headers }
      )
      .then(function (res) {
        // const posts = {
        //   title: res.data.title,
        //   content: res.data.content,
        //   id: res.data.postId,
        //   image: res.data.imgUrl,
        //   categoryId: res.data.categoryId,
        //   is_open: res.data.is_open,
        //   score: res.data.score,
        //   userName: res.data.userName,
        //   postPassword: res.data.password,
        // };
        const posts = {
          title: res.data.title,
          content: res.data.content,
          id: res.data.id,
          image: res.data.imgUrl,
          categoryId: res.data.categoryId,
          userName: res.data.userName,
          postPassword: res.data.password,
        };
        dispatch(addTest(posts));
        window.alert("게시글 작성 완료!");
        // history.replace("/");
        window.location.replace('/');
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

const getPostAX = () => {
  return function (dispatch, getState, { history }) {

    // const headers = {
    //   // "Content-Type": `application/json`,
    //   "Content-Type": "multipart/form-data",
    //   "Access-Control-Allow-Origin": "*",
    // };

    axios
      .get("http://52.79.137.166/api/posts")
      .then((res) => {
        let post_list = [];
        res.data.forEach((_post) => {
          // 실제 서버 연결 했을 때,
          let post = {
            id: _post.postId,
            title: _post.title,
            image: _post.imgUrl,
            content: _post.content,
            categoryId: _post.categoryId,
            userName: _post.userName,
            postPassword: _post.password,
          };
          post_list.push(post);
        });
        dispatch(setTest(post_list));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const editPostAX = (post_id = null, post) => {
  return function (dispatch, getState, { history }) {
    if (!post_id) {
      window.alert("게시물 정보가 없습니다.");
      return;
    }

    const edit_image = post.image;
    const old_review_idx = getState().test.t_list.findIndex(
      (p) => p.id === parseInt(post_id)
    );
    const old_review = getState().test.t_list[old_review_idx];

    if (edit_image === old_review.image) {
      let form = new FormData();
      form.append("title", post.title);
      form.append("content", post.content);
      form.append("categoryId", post.category);
      form.append("userName", post.userName);
      form.append("password", post.postPassword);

      axios
        .put(`http://52.79.137.166/api/posts/${post_id}`,
          form,
          // { headers: headers }
        )
        .then(function (res) {
          const posts = {
            title: res.data.title,
            content: res.data.content,
            id: res.data.id,
            categoryId: res.data.categoryId,
            userName: res.data.userName,
            postPassword: res.data.password,
          };
          dispatch(editTest(post_id, posts));
          window.alert("게시글 수정 완료!");
          history.replace(`/post/${post_id}`);
        })
        .catch(function (error) {
          window.alert("이미지 수정에 에러가 났어요");
          console.log(error);
        });
    } else {
      // const headers = {
      //   // "Content-Type": "multipart/form-data",
      //   "Content-Type": "application/json",
      //   "Access-Control-Allow-Origin": "*",
      // };
      let form = new FormData();
      form.append("multipartFile", post.image);
      form.append("title", post.title);
      form.append("content", post.content);
      form.append("categoryId", post.category);
      form.append("userName", post.userName);
      form.append("password", post.postPassword);
      // form.append("id", post_id);

      axios
        .put(
          `http://52.79.137.166/api/posts/${post_id}`,
          form,
          // { headers: headers }
        )
        .then(function (res) {
          const posts = {
            title: res.data.title,
            content: res.data.content,
            id: res.data.id,
            image: res.data.imgUrl,
            categoryId: res.data.categoryId,
            userName: res.data.userName,
            postPassword: res.data.password,
          };
          dispatch(editTest(post_id, posts));
          window.alert("게시글 수정 완료!");
          history.replace(`/post/${post_id}`);
        })
        .catch(function (error) {
          window.alert("이미지 수정에 에러가 났어요");
          console.log(error);
        });
    }
  };
};

const deleteTestAX = (id) => {
  return function (dispatch, getState, { history }) {
    axios
      .delete(`http://52.79.137.166/api/posts/${id}`)
      .then((res) => {
        dispatch(deleteTest(id));
        window.alert("삭제 완료!");
        history.replace("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export default handleActions(
  {
    [SET_TEST]: (state, action) =>
      produce(state, (draft) => {
        draft.t_list.push(...action.payload.post_list);

        draft.t_list = draft.t_list.reduce((acc, cur) => {
          if (acc.findIndex((a) => a.id === cur.id) === -1) {
            return [...acc, cur];
          } else {
            acc[acc.findIndex((a) => a.id === cur.id)] = cur;
            return acc;
          }
        }, []);
      }),

    [ADD_TEST]: (state, action) =>
      produce(state, (draft) => {
        draft.t_list.unshift(action.payload.test);
      }),
    [EDIT_TEST]: (state, action) =>
      produce(state, (draft) => {
        let idx = draft.t_list.findIndex(
          (p) => p.id === parseInt(action.payload.post_id)
        );
        draft.t_list[idx] = { ...draft.t_list[idx], ...action.payload.post };
      }),
    [DELETE_TEST]: (state, action) =>
      produce(state, (draft) => {
        let idx = draft.t_list.findIndex((p) => p.id === action.payload.id);

        if (idx !== -1) {
          // 배열에서 idx 위치의 요소 1개를 지웁니다.
          draft.t_list.splice(idx, 1);
          draft.t_list = draft.t_list.reduce((acc, cur) => {
            if (acc.findIndex((a) => a.id === cur.id) === -1) {
              return [...acc, cur];
            } else {
              acc[acc.findIndex((a) => a.id === cur.id)] = cur;
              return acc;
            }
          }, []);
        }
      }),
  },
  initialState
);

const actionCreators = {
  setTest,
  addTest,
  deleteTest,
  addPostAX,
  getPostAX,
  editPostAX,
  deleteTestAX,
};

export { actionCreators };
