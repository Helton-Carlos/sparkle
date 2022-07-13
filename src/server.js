import { createServer } from "miragejs"

export function makeServer({ environment = "development" } = {}) {
  let server = createServer({
    environment,
    routes() {
      this.namespace = "api"

      this.get("/users", (schema) => {
        return {
          users: [
            {email: 'helton@g', password:"12345"},
            {email: 'talita@g', password:"77777"},
          ]
        }
      });

      this.post("/users", (schema,request) => {
        let attrs = JSON.parse(request.requestBody)
        return { users: attrs }
      });
    },
  })

  return server
}