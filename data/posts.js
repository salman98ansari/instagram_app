import { USERS } from "./users";

export const POSTS = [
  {
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/e/ea/Spring_Lake%2C_New_Jersey_Beach_at_Sunrise.jpg",
    user: USERS[0].user,
    likes: 350,
    caption: "Beautiful Sunrise..",
    profile_picture: USERS[0].image,
    comments: [
      {
        user: "mobin12",
        comments: "WOoooah ...",
      },
      {
        user: "xyz12",
        comments: "Beach Day",
      },
      {
        user: "xyz12",
        comments: "Beach Day",
      },
    ],
  },
  {
    imageUrl:
      "https://www.simplilearn.com/ice9/free_resources_article_thumb/React_Native_Tutorial.jpg",
    user: USERS[2].user,
    likes: 400,
    caption: "Learning react nativeeee.",
    profile_picture: USERS[0].image,
    comments: [
      {
        user: "mobin12",
        comments: "WOoooah ...",
      },
      {
        user: "xyz12",
        comments: "lovely",
      },
    ],
  },
];
