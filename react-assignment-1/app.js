import axios from "axios";

async function getData(userId) {
  if (typeof userId === "number" && !isNaN(userId)) {
    const { data: User } = await axios(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    const { data: Posts } = await axios(
      `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
    );

    const mergedData = {
      user: User,
      posts: Posts,
    };

    console.log(mergedData);
  } else {
    console.log("An error occured.");
  }
}

export default getData;
