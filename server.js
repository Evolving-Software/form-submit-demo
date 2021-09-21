const server = require('fastify')({ logger: true });
const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || '3000';

server.register(require('fastify-cors'), {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Accept'],
});


server.post('/:id', async (req,reply) => {
    console.log(req.body)
    reply.send({
        message: 'It Worked'
    });
});

server.listen(PORT, HOST, (err, address) => {
    if (err) {
        server.log.error(err)
        process.exit(1)
      }
    console.log(`Producer running at http://${HOST}:${PORT}`);
})
