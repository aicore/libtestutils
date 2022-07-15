/*global describe, it*/
import * as chai from 'chai';
import {installMysql, uninstallMysql} from "../../../src/setupIntegrationTest/install.js";
import child_process from "child_process";

let expect = chai.expect;
describe('This will test src/setupIntegrationTest/install.js', function () {
    it('install mysql should pass', async function () {
        const savedExec = child_process.exec;
        child_process.exec = function (cmd, callback) {
            callback(null, 'success', null);
        };
        const newVar = await installMysql();
        expect(newVar).to.eql('stdout: success');
        child_process.exec = savedExec;
    });
    it('Uninstall should pass', async function () {
        const savedExec = child_process.exec;
        child_process.exec = function (cmd, callback) {
            callback(null, 'success', null);
        };
        const newVar = await uninstallMysql();
        expect(newVar).to.eql('stdout: success');
        child_process.exec = savedExec;

    });

});
