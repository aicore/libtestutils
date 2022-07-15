import child_process from 'child_process';
import {isString} from "@aicore/libcommonutils";

/** This function helps to execute shell command
 * @param {String} cmd - shell command to be executed
 * @return {Promise}  - promise to get result of shell command execution
 *
 **/
export function execShell(cmd) {
    if (!isString(cmd)) {
        return Promise.reject(`Please provide valid string as command`);
    }
    return new Promise((resolve, reject) => {
        child_process.exec(cmd, (error, stdout, stderr) => {
            if (error) {
                const errorMessage = `error: ${error.message}`;
                console.log(errorMessage);
                reject(errorMessage);
                return;
            }
            if (stderr) {
                const errorMessage = `stderr: ${stderr}`;
                console.log(errorMessage);
                reject(errorMessage);
                return;
            }
            const successMessage = `stdout: ${stdout}`;
            resolve(successMessage);
        });
    });
}
