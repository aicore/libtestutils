import {execShell} from '../utils/shellUtils.js';
// @INCLUDE_IN_API_DOCS

/** This function helps to install mysql in debian based operating systems
    * @return {Promise}  - promise to get result of shell command execution]
    *
*/

export function installMysql() {
    return execShell('sudo apt-get install mysql-server -y');
}

/** This function helps to uninstall mysql in debian based operating systems
    *@return {Promise}  - promise to get result of shell command execution
    *
*/

export function uninstallMysql() {
    return execShell('sudo apt-get remove mysql-server -y');
}
