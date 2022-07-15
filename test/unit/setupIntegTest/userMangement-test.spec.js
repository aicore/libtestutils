/*global describe, it*/
import * as chai from 'chai';
import {installMysql, uninstallMysql} from "../../../src/setupIntegrationTest/install.js";
import child_process from "child_process";
import {setUpMySQL} from "../../../src/index.js";
import {getMySqlConfigs} from "@aicore/libmysql/src/utils/configs.js";
let expect = chai.expect;

describe('This will test src/setupIntegrationTest/userMangement.js', function () {
    it('setUpMySQL should pass', async function () {
        const savedExec = child_process.exec;
        child_process.exec = function (cmd, callback) {
            callback(null, 'success', null);
        };
        let exceptionOccurred = false;
        try {
            const  configs = getMySqlConfigs();
            const newVar = await setUpMySQL(configs);
            expect(configs.host).to.eql('localhost');
            expect(configs.port).to.eql('3306');

        } catch (e) {
            exceptionOccurred = true;
        }
        expect(exceptionOccurred).to.eql(false);

        child_process.exec = savedExec;
    });
});
