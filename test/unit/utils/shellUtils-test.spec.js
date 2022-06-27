/*global describe, it, before*/

import * as chai from 'chai';
import {execShell} from "../../../src/utils/shellUtils.js";

let expect = chai.expect;
describe('unit  for src/utils/shellUtils.js', function () {
    it('should execute echo hello successfully', async function () {
        const result = await execShell('echo hello');
        expect(result).to.equal('stdout: hello\n');
    });
    it('Should fail for non sting commands', async function () {
        let isExceptionOccurred = false;
        try {
            await execShell(1);
        } catch (e) {
            expect(e).to.eql('Please provide valid string as command');
            isExceptionOccurred = true;
        }
        expect(isExceptionOccurred).to.eql(true);
    });
    it('Should fail show stderr in case of command not found', async function () {

        let isExceptionOccurred = false;
        try {
            const result = await execShell('commandNotFound');
        } catch (e) {
            isExceptionOccurred = true;
            console.log(e);
            const pattern = /^error: Command failed: commandNotFound/;
            const isErrorMatch = pattern.test(e.toString());
            expect(isErrorMatch).to.eql(true);
        }
        expect(isExceptionOccurred).to.eql(true);
    });
    it('Should fail in care of find in files in wrong path', async function () {
        let isExceptionOccurred = false;
        try {
            const result = await execShell('find /wrongPath');
        } catch (e) {
            isExceptionOccurred = true;
            console.log(e);
            const pattern = /^error: Command failed: find/;
            const isErrorMatch = pattern.test(e.toString());
            expect(isErrorMatch).to.eql(true);
        }
        expect(isExceptionOccurred).to.eql(true);
    });
    it('Should fail if echo to stderr', async function () {
        let isExceptionOccurred = false;
        try {
            const result = await execShell('echo "hello" >&2');
        } catch (e) {
            isExceptionOccurred = true;
            console.log(e);
            const pattern = /^stderr: hello/;
            const isErrorMatch = pattern.test(e.toString());
            expect(isErrorMatch).to.eql(true);
        }
        expect(isExceptionOccurred).to.eql(true);
    });

});
