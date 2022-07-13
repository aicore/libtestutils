import {execShell} from "../utils/shellUtils.js";
import {isString} from "@aicore/libcommonutils";

export async function setUpMySQL(configs) {
    if (!isString(configs.database)) {
        throw new Error('Please provide valid Database Name');
    }
    if (!isString(configs.user)) {
        throw new Error('Please provide valid Database user');
    }
    if (!isString(configs.password)) {
        throw new Error('Please provide valid password for database');
    }
    await execShell(`sudo mysql -u root -e 'CREATE DATABASE ${configs.database};'`);
    await execShell(
        `sudo mysql -u root -e "CREATE USER '${configs.user}'@'localhost' IDENTIFIED BY '${configs.password}'";`);
    await execShell(`sudo mysql -u root -e "GRANT ALL ON ${configs.database}.* TO '${configs.user}'@'localhost'";`);
    await execShell(`sudo mysql -u root -e "FLUSH PRIVILEGES;";`);
}
