import colors from "colors";

const logger = (req, res, next) => {
  const methodColors = {
    GET: "green",
    POST: "blue",
    PUT: "yellow",
    PATCH: "yellow",
    DELETE: "red",
  };
  const colors = methodColors[req.method] || "white";
  console.log(
    req.method[colors] +
      " " +
      req.protocol[colors] +
      "//"[colors] +
      req.get("host")[colors] +
      req.originalUrl[colors]
  );
  next();
};

export default logger;
