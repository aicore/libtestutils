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

        } catch (e) {
            exceptionOccurred = true;
        }
        expect(exceptionOccurred).to.eql(false);

        child_process.exec = savedExec;
    });
    it('setUpMySQL should fail for invalid user', async function () {
        const savedExec = child_process.exec;
        child_process.exec = function (cmd, callback) {
            callback(null, 'success', null);
        };
        let exceptionOccurred = false;
        try {
            let  configs = getMySqlConfigs();
            configs.user = null;
            const newVar = await setUpMySQL(configs);

        } catch (e) {
            expect(e.toString()).to.eql('Error: Please provide valid Database user');
            exceptionOccurred = true;
        }
        expect(exceptionOccurred).to.eql(true);

        child_process.exec = savedExec;

    });

    it('setUpMySQL should fail for invalid db', async function () {
        const savedExec = child_process.exec;
        child_process.exec = function (cmd, callback) {
            callback(null, 'success', null);
        };
        let exceptionOccurred = false;
        try {
            let  configs = getMySqlConfigs();
            configs.database = null;
            const newVar = await setUpMySQL(configs);

        } catch (e) {
            expect(e.toString()).to.eql('Error: Please provide valid Database Name');
            exceptionOccurred = true;
        }
        expect(exceptionOccurred).to.eql(true);

        child_process.exec = savedExec;

    });
    it('setUpMySQL should fail for invalid password', async function () {
        const savedExec = child_process.exec;
        child_process.exec = function (cmd, callback) {
            callback(null, 'success', null);
        };
        let exceptionOccurred = false;
        try {
            let  configs = getMySqlConfigs();
            configs.password = null;
            const newVar = await setUpMySQL(configs);

        } catch (e) {
            expect(e.toString()).to.eql('Error: Please provide valid password for database');
            exceptionOccurred = true;
        }
        expect(exceptionOccurred).to.eql(true);

        child_process.exec = savedExec;

    });

});
