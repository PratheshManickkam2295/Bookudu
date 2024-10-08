const FilesRouter = require("express").Router();
const fs = require("fs/promises");

async function createFile(data = null) {
  try {
    const content = new Date().toString();
    await fs.writeFile("./files/test.txt", data ? data : content);
  } catch (err) {
    console.log(err);
  }
}
createFile();

// HTTP METHODS = GET, POST, PUT, DELETE

FilesRouter.get("/createDefaultFile", (request, response, next) => {
  console.log("REQUEST HIT");
  createFile();
  return response.status(200).json({
    message: "Request Hit",
  });
});

FilesRouter.get("/createCustomFile/:content", (request, response, next) => {
  const { content } = request.params;
  createFile(content);
  return response.status(200).json({
    message: "Request Hit",
  });
});

FilesRouter.post("/createCustomFile", async (request, response, next) => {
  const { content } = request.body;
  await createFile(content);
  console.log(request.body);
  return response.status(200).json({
    message: "File created",
  });
});

module.exports = FilesRouter;
