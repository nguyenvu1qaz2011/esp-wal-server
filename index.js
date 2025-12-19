const express = require("express");
const app = express();

app.use(express.json());

let data = {
  key: "Pr1wquseA7CMoHK", // key 15 số (đổi sau)
  cmd: "NONE",
  time: 0
};

// T1 gửi lệnh
app.post("/send", (req, res) => {
  const { key, cmd } = req.body;
  if (key !== data.key) {
    return res.status(403).json({ error: "WRONG KEY" });
  }
  data.cmd = cmd;
  data.time = Date.now();
  res.json({ status: "OK", cmd });
});

// T2 đọc lệnh
app.get("/get", (req, res) => {
  res.json(data);
});

// Test nhanh
app.get("/", (req, res) => {
  res.send("ESP SERVER OK");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
