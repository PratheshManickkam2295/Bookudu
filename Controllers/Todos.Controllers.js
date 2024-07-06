const TodosRouter = require("express").Router();

// HTTP METHODS = GET, POST, PUT, DELETE

TodosRouter.get("/:id", (request, response, next) => {
  const { id } = request.params;
  const data = Array.from(require("../mocks/todos.json"));
  const filteredData = data.filter((item) => Number(item.id) === Number(id));
  return response.status(200).json({
    result: filteredData,
    length: filteredData.length,
  });
});

module.exports = TodosRouter;
