import {execShell} from "../utils/shellUtils.js";
import {isString} from "@aicore/libcommonutils";
import {getMySqlConfigs} from "@aicore/libmysql/src/utils/configs.js";

export async function setUpMySQL() {
    const  configs = getMySqlConfigs();
    await execShell(`mysql -uroot -h127.0.0.1 -e 'CREATE DATABASE ${configs.database};'`);
    await execShell(
        `mysql -uroot -h127.0.0.1 -e  "CREATE USER '${configs.user}'@'localhost' IDENTIFIED BY '${configs.password}'";`);
    await execShell(`mysql -uroot -h127.0.0.1 -e "GRANT ALL ON ${configs.database}.* TO '${configs.user}'@'localhost'";`);
    await execShell(`mysql -uroot -h127.0.0.1 -e "FLUSH PRIVILEGES;";`);
    return configs;
}
