import express, { Express, Request, Response } from "express";
const port = 8000;

const app: Express = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Yo! Express with TS here :)");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
