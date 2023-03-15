const app = require('../src/server');
const request = require('supertest');
//const agent = session(app);


describe("test de RUTAS", () => {
    describe("GET rickandmorty/${id}", () => {
        //-----------------------------------------------------------------
        //este choclo se encarga de abrir y cerrar el server para que no rompa las pelotas jest
        beforeEach((done) => {
            server = app.listen(4000, (err) => {
                if (err) return done(err);
                agent = request.agent(server); // since the application is already listening, it should use the allocated port
                done();
            });
        });
        afterEach((done) => {
            return  server && server.close(done);
        });
        //-----------------------------------------------------------------
        it("responde con status: 200", () => {
            agent.get('/rickandmorty/detail/1').expect(200);
        });
        it("manda los datos que corresponden", async () => {
            const data = await agent.get('/rickandmorty/detail/1');
                expect(Object.keys(data.body)).toContain("name");
                expect(Object.keys(data.body)).toContain("id");
                expect(Object.keys(data.body)).toContain("species");
                expect(Object.keys(data.body)).toContain("gender");
                expect(Object.keys(data.body)).toContain("image");
        });
        it("responde con status: 500 en caso de error", () => {
            agent.get('/rickandmorty/detail/IDqueNoExiste').expect(500);
        });
    })
})

