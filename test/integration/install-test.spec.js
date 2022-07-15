/*global describe, it*/
import * as chai from 'chai';
import {installMysql, setUpMySQL, uninstallMysql} from "../../src/index.js";

let expect = chai.expect;

describe('integration tests for libtestsUtils', function () {
    it('Setup database should pass', async function () {
        try {
            const configs = await setUpMySQL();
            console.log(`${JSON.stringify(configs)}`);
        } catch (e) {
            console.log(e.toString());
        }
    });
});
