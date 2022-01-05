import app from './app.js';
import conf from './src/config/index.js';
const server = app.listen(conf.PORT, () => {
    console.log(`[OK]Server started on port ${conf.PORT}`);
});
//# sourceMappingURL=server.js.map