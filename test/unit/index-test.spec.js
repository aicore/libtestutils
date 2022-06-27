/*global describe, it*/
import * as chai from 'chai';
import {install_mysql,uninstall_mysql} from "../../src/index.js";
import child_process from "child_process";
let expect = chai.expect;


describe('This will test index.js', function () {

    it('install mysql should pass', async function () {
        const savedExec = child_process.exec;
        child_process.exec = function (cmd, callback) {
            callback(null, 'success', null);
        };
        const newVar = await install_mysql();
        expect(newVar).to.eql('stdout: success');
        child_process.exec = savedExec;

    });

    it('uninstall mysql should pass', async function () {
        const savedExec = child_process.exec;
        child_process.exec = function (cmd, callback) {
            callback(null, 'success', null);
        };
        const newVar = await uninstall_mysql();
        expect(newVar).to.eql('stdout: success');
        child_process.exec = savedExec;

    });

});
