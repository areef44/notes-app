const CollaborationHandler = require("./handler");
const routes = require('./routes')

module.exports = {
    name: 'collaborations',
    version: '1.0.0',
    register: async(server, { collaborationsService, notesService, validator }) => {
        const collaborationsHandler = new CollaborationHandler(
            collaborationsService, notesService, validator,
        );
        
        server.route(routes(collaborationsHandler));
    },
};