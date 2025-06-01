import type { ConfigInterface } from './Config.interface'
import { configFilesMap } from './config-files-map'
import { getAppConfigKey } from './utils'

if (!configFilesMap.has(getAppConfigKey())) {
    throw Error(`Could not find config for VITE_APP_CONFIG key "${getAppConfigKey()}"`)
}

export const config = configFilesMap.get(getAppConfigKey()) as ConfigInterface