/**** front end code****/
const response = await fetch("https://example.org/post", {
  method: "POST",
  body: JSON.stringify({ username: "Ahmad" }),
  headers: {
    "Content-Type": "application/json",
  },
});
/**** ends *****/
