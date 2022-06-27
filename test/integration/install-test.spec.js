/*global describe, it*/
import * as chai from 'chai';
import {install_mysql, uninstall_mysql} from "../../src/index.js";

let expect = chai.expect;

describe('integration tests for libtestsUtils',function (){
    it('install mysql test', async function () {
        const retVal = await install_mysql();
        expect(retVal.length).gt(0);
    });
    it('uninstall mysql test', async function () {
        const retVal = await uninstall_mysql();
        expect(retVal.length).gt(0);
    });

});
