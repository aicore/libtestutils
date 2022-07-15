import {execShell} from "../utils/shellUtils.js";
import {getMySqlConfigs} from "@aicore/libmysql/src/utils/configs.js";

export async function setUpMySQL() {
    const configs = getMySqlConfigs();
    let cmd = `mysql -uroot -h127.0.0.1 -e 'CREATE DATABASE ${configs.database};'`;
    await execShell(cmd);
    cmd =
        `mysql -uroot -h127.0.0.1 -e  "CREATE USER '${configs.user}'@'localhost' IDENTIFIED BY '${configs.password}'";`;
    await execShell(cmd);
    cmd = `mysql -uroot -h127.0.0.1 -e "GRANT ALL ON ${configs.database}.* TO '${configs.user}'@'localhost'";`;
    await execShell(cmd);
    cmd = `mysql -uroot -h127.0.0.1 -e "FLUSH PRIVILEGES";`;
    await execShell(cmd);
    return configs;
}
