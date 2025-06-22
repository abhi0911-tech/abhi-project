fetch("https://www.googleapis.com/blogger/v3/blogs/byurl?url=https://myhotelblog.blogspot.com&key=AIzaSyDksaX4GKZ5oT_CGCMqzVuQ1djplCCCe5I")
  .then(res => res.json())
  .then(data => console.log("Blog ID:", data.id));

