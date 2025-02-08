const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  console.log("new request", method);

  if (url == "/") {
    res.setHeader("Content-Type", "text/html");
    res.write('<form method="POST" action="/create-user">');
    res.write(
      '<input name="create-user" type="text"> <button type="submit">Create User</button>'
    );
    res.write("</form>");
    return res.end();
  }

  if (url === "/create-user" && method === "POST") {
    const userNameUnparsed = [];
    req.on("data", (chunk) => {
      userNameUnparsed.push(chunk);
    });
    return req.on("end", () => {
      const parsedUserName = Buffer.concat(userNameUnparsed).toString();
      const userName = parsedUserName.split("=")[1];
      console.log(userName);
      res.statusCode = 301;
      res.setHeader("Location", "/");
      return res.end();
    });
  }

  if (url === "/users") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<body>");
    res.write("<ul>Users list</ul>");
    res.write("<li>John Doe</li>");
    res.write("<li>Lorem Ipsum</li>");
    res.write("<li>Sherlock Holmes</li>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  }

  res.setHeader("Content-Type", "text/html");
  res.write("<html><body><h1>home</h1></body></html>");
  res.end();
};

module.exports = requestHandler;
