import React from "react";
import styled from "styled-components";

import { Grid, Image, Text } from "../elements";
import { history } from "../redux/configureStore";

const Post = (props) => {
  return (
    <React.Fragment>
    </React.Fragment>
  );
};

Post.defaultProps = {
  user_info: {
    user_name: "frankie",
    user_profile: "https://mean0images.s3.ap-northeast-2.amazonaws.com/4.jpeg",
  },
  image_url: "https://mean0images.s3.ap-northeast-2.amazonaws.com/4.jpeg",
  title: "제목",
  contents: "고양이네요!",
  like_cnt: 0,
  comment_cnt: 0,
  insert_dt: "2021-02-27 10:00:00",
  is_me: true,
};


export default Post;
