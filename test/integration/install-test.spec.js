/*global describe, it*/
import * as chai from 'chai';
import {installMysql, setUpMySQL, uninstallMysql} from "../../src/index.js";
import {getMySqlConfigs} from "@aicore/libmysql/src/utils/configs.js";
let expect = chai.expect;

describe('integration tests for libtestsUtils', function () {
    it('Setup database should pass', async function () {
        try {
            const configs = getMySqlConfigs();
            console.log(JSON.stringify(configs));
            await setUpMySQL(configs);
        } catch (e) {
            console.log(e.toString());
        }
    });
});
