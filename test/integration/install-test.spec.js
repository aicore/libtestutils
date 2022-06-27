/*global describe, it*/
import * as chai from 'chai';
import {installMysql, uninstallMysql} from "../../src/index.js";

let expect = chai.expect;

describe('integration tests for libtestsUtils',function (){
    it('install mysql test', async function () {
        const retVal = await installMysql();
        expect(retVal.length).gt(0);
    });
    it('uninstall mysql test', async function () {
        const retVal = await uninstallMysql();
        expect(retVal.length).gt(0);
    });

});
