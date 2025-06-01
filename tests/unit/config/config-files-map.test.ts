import { configFilesMap } from '@/config/config-files-map'

describe('configFilesMap', () => {

    it('instance should have "local" key', () => {
        expect(configFilesMap.has('local')).toBe(true)
    })

    it('instance should have "production" key', () => {
        expect(configFilesMap.has('production')).toBe(true)
    })
})