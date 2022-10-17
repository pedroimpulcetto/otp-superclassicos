import cors from "cors";
import express from "express";

import Routes from "./Routes";

const app = express();
app.use(cors());
app.use(express.json());

const port = 3001;

new Routes(app);

app.listen(port, () => {
    console.log(`⚡️⚡️⚡️⚡️⚡️ [server]: Server is running at https://localhost:${port}`);
});
