// import the Config interface

import type { ConfigInterface } from '@/config/Config.interface'
// import a reference to the confiFilesMap
import { configFilesMap } from '@/config/config-files-map'

describe('config: production', () => {
    const config: ConfigInterface = configFilesMap.get('production') as ConfigInterface

    it('instance should have "global" section', () => {
        expect(config).toHaveProperty('global')
    })

    describe('global', () => {
        const section = config.global
        it('section should have "version" property', () => {
            expect(section).toHaveProperty('version')
            expect(typeof section.version).toBe('number')
            expect(section.version).toBeGreaterThan(0)
        })
    })
})