/*global describe, it*/
import * as chai from 'chai';
import {setUpMySQL} from "../../src/index.js";

let expect = chai.expect;

describe('integration tests for lib-testsUtils', function () {
    it('Setup database should pass', async function () {
        let isExceptionOccurred = false;
        try {
            const configs = await setUpMySQL();
            console.log(`${JSON.stringify(configs)}`);
            expect(configs.port).to.eq('3306');

            expect(configs.host).to.eq('localhost');
        } catch (e) {
            console.log(e.toString());
            isExceptionOccurred = true;
        }
        expect(isExceptionOccurred).to.eq(false);
    });
});
