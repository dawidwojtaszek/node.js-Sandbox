const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/users") {
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
  res.write("<h1>Home</h1>");
  res.end();
};

module.exports = requestHandler;
