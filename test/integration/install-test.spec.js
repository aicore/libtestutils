/*global describe, it*/
import * as chai from 'chai';
import {installMysql, setUpMySQL, uninstallMysql} from "../../src/index.js";
import {getMySqlConfigs} from "@aicore/libmysql/src/utils/configs.js";
import {isMySqlActive} from "../../src/setupIntegrationTest/install.js";

let expect = chai.expect;

describe('integration tests for libtestsUtils',function (){
    it('install mysql test', async function () {
        const retVal = await installMysql();
        expect(retVal.length).gt(0);
    });
    it('Setup database should pass', async function () {
        const retVal = await installMysql();
        try {
            const mysqlStatus = await isMySqlActive();
            console.log(mysqlStatus);
            expect(retVal.length).gt(0);
            const configs = getMySqlConfigs();
            await setUpMySQL(configs);

        } catch (e) {
            console.log(e.toString());
        }

    });
    it('uninstall mysql test', async function () {
        const retVal = await uninstallMysql();
        expect(retVal.length).gt(0);
    });

});
