import React from "react";
import ReactDOM from "react-dom";
import { createServer, Model } from "miragejs";
import { App } from "./App";

//miragejs uso em dev//
createServer({
  //banco miragejs
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "Freelance de website",
          type: "deposit",
          category: "dev",
          amount: 7000,
          createdAt: new Date("2022-04-08 19:45:00"),
        },
        {
          id: 2,
          title: "Aluguel",
          type: "withdraw",
          category: "Ponto comercial",
          amount: 2000,
          createdAt: new Date("2022-04-01 08:35:00"),
        },
      ],
    });
  },
  routes() {
    this.namespace = "api";

    this.get("/transactions", () => {
      return this.schema.all("transaction");
    });

    this.post("/transactions", (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create("transaction", data);
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
