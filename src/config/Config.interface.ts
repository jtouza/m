

/**
 * @Name ConfigInterface
 * @description
 * Describes the structure of a configuration file
 */
export interface ConfigInterface {
    global: {
        version: number
    }
    http :{
        timeout: number
        headers: {
            [key: string]: string
        }
    }
    localization: {
        locales: string[]
        localStorageCache: { enabled: boolean, expirationInMinutes: number }
    }
}