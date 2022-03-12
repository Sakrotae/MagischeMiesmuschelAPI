const server = require('./app')
const supertest = require('supertest')
const requestSupertest = supertest(server)

describe('Miesmuschel Endpunkt', () => {

    it('GET /api sollte da Parameter q fehlt einen Error und keine frage/antwort senden', async () => {

        const res = await requestSupertest.get('/api');
        expect(res.status).toEqual(400);
        expect(res.type).toEqual(expect.stringContaining('json'));
        expect(res.body).toHaveProperty('error')
        expect(res.body).not.toHaveProperty('frage')
        expect(res.body).not.toHaveProperty('antwort')
    })

    it('GET /api?q=frage sollte JSON mit Properties frage/antwort senden', async () => {

        const res = await requestSupertest.get('/api?q=frage');
        expect(res.status).toEqual(200);
        expect(res.type).toEqual(expect.stringContaining('json'));
        expect(res.body).toHaveProperty('frage')
        expect(res.body).toHaveProperty('antwort')
        expect(res.body).not.toHaveProperty('error')
    })

})