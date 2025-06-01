// import a reference to our Config interface:
import type { ConfigInterface } from './Config.interface'

// individual environments configs:

import configLocal from './config-files/local.json'
import configProduction from './config-files/production.json'

// example with javascript Map()
export const configFilesMap: Map<string, ConfigInterface> = new Map<string, ConfigInterface>([
    ['local', configLocal as ConfigInterface],
    ['production', configProduction as ConfigInterface]
])