import express from 'express';

const app = express();
app.get("*", (req, res, next) => {
  // accept only html / no api route
  if (req.accepts("html") && !req.path.startsWith("/api/") &&
    // no vite internal
    !req.path.startsWith("/@") &&
    // no file extension
    req.path.split("/").pop().indexOf(".") < 0 ) {
    res.redirect("/vite/index.html");
  } else {
    next();
  }
});

export const handler = app;