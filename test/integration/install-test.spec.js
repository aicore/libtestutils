/*global describe, it*/
import * as chai from 'chai';
import {installMysql, setUpMySQL, uninstallMysql} from "../../src/index.js";
import {getMySqlConfigs} from "@aicore/libmysql/src/utils/configs.js";
import {isMySqlActive, startMySql} from "../../src/setupIntegrationTest/install.js";
import {execShell} from "../../src/utils/shellUtils.js";

let expect = chai.expect;

describe('integration tests for libtestsUtils',function (){
   /* describe('install test', function (){
        it('install mysql test', async function () {
            const retVal = await installMysql();
            const pwd= await execShell('grep -oP \'temporary password(.*): \\K(\\S+)\' /var/log/mysqld.log');
            console.log(`pwd is ${pwd}`);
            expect(retVal.length).gt(0);
        });
        it('uninstall mysql test', async function () {
            const retVal = await uninstallMysql();
            expect(retVal.length).gt(0);
        });

    });

    */
    it('Setup database should pass', async function () {
        //const retVal = await installMysql();
        try {
            //const mysqlStatus = await isMySqlActive();
            // console.log(mysqlStatus);
            const activateStatus = await startMySql();
            console.log(activateStatus);
          //  expect(retVal.length).gt(0);
            const configs = getMySqlConfigs();
            console.log(JSON.stringify(configs));
            await setUpMySQL(configs);

        } catch (e) {
            console.log(e.toString());
        }
      //  await uninstallMysql();
    });


});
