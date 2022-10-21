const osu = require('node-osu');

module.exports = class Osu {
    ApiInit() {
        const api = new osu.Api(process.env.OSU_API_KEY, {
            notFoundAsError: true,
            completeScores: false,
            parseNumeric: false
        });
        return api;
    }
}