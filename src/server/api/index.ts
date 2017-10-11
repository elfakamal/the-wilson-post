import { create, router } from 'json-server';
import * as path from 'path';

const server = create();
const apiEndpoints = router(path.join(__dirname, 'posts.json'));

server.use(apiEndpoints);

export default server;
