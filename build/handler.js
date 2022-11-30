import express from "express";
const app = express();
app.get("*", (req, res, next) => {
  if (req.accepts("html") && !req.path.startsWith("/api/") && !req.path.startsWith("/@") && req.path.split("/").pop().indexOf(".") < 0) {
    res.redirect("/vitstro/index.html");
  } else {
    next();
  }
});
const handler = app;
export {
  handler
};
