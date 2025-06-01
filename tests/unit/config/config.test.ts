import { describe, it, expect } from 'vitest'
import { configFilesMap } from '@/config/config-files-map'
import configLocal from '@/config/config-files/local.json'
import configProduction from '@/config/config-files/production.json'

describe('Configuration System', () => {
  it('configFilesMap contains the local configuration', () => {
    const localConfig = configFilesMap.get('local')
    expect(localConfig).toBeDefined()
    expect(localConfig?.global.version).toBe(configLocal.global.version)
    expect(localConfig?.http.timeout).toBe(configLocal.http.timeout)
    expect(localConfig?.localization.locales).toEqual(configLocal.localization.locales)
  })

  it('configFilesMap contains the production configuration', () => {
    const productionConfig = configFilesMap.get('production')
    expect(productionConfig).toBeDefined()
    expect(productionConfig?.global.version).toBe(configProduction.global.version)
    expect(productionConfig?.http.timeout).toBe(configProduction.http.timeout)
    expect(productionConfig?.localization.locales).toEqual(configProduction.localization.locales)
  })

  it('local configuration has the expected timeout value', () => {
    const localConfig = configFilesMap.get('local')
    expect(localConfig?.http.timeout).toBe(5000)
  })

  it('production configuration has the expected timeout value', () => {
    const productionConfig = configFilesMap.get('production')
    expect(productionConfig?.http.timeout).toBe(10000)
  })

  it('has the correct structure for local configuration', () => {
    const localConfig = configFilesMap.get('local')

    // Check global section
    expect(localConfig).toHaveProperty('global')
    expect(localConfig?.global).toHaveProperty('version')
    expect(typeof localConfig?.global.version).toBe('number')

    // Check http section
    expect(localConfig).toHaveProperty('http')
    expect(localConfig?.http).toHaveProperty('timeout')
    expect(typeof localConfig?.http.timeout).toBe('number')
    expect(localConfig?.http).toHaveProperty('headers')
    expect(typeof localConfig?.http.headers).toBe('object')

    // Check localization section
    expect(localConfig).toHaveProperty('localization')
    expect(localConfig?.localization).toHaveProperty('locales')
    expect(Array.isArray(localConfig?.localization.locales)).toBe(true)
    expect(localConfig?.localization).toHaveProperty('localStorageCache')
    expect(localConfig?.localization.localStorageCache).toHaveProperty('enabled')
    expect(typeof localConfig?.localization.localStorageCache.enabled).toBe('boolean')
    expect(localConfig?.localization.localStorageCache).toHaveProperty('expirationInMinutes')
    expect(typeof localConfig?.localization.localStorageCache.expirationInMinutes).toBe('number')
  })

  it('has the correct structure for production configuration', () => {
    const productionConfig = configFilesMap.get('production')

    // Check global section
    expect(productionConfig).toHaveProperty('global')
    expect(productionConfig?.global).toHaveProperty('version')
    expect(typeof productionConfig?.global.version).toBe('number')

    // Check http section
    expect(productionConfig).toHaveProperty('http')
    expect(productionConfig?.http).toHaveProperty('timeout')
    expect(typeof productionConfig?.http.timeout).toBe('number')
    expect(productionConfig?.http).toHaveProperty('headers')
    expect(typeof productionConfig?.http.headers).toBe('object')

    // Check localization section
    expect(productionConfig).toHaveProperty('localization')
    expect(productionConfig?.localization).toHaveProperty('locales')
    expect(Array.isArray(productionConfig?.localization.locales)).toBe(true)
    expect(productionConfig?.localization).toHaveProperty('localStorageCache')
    expect(productionConfig?.localization.localStorageCache).toHaveProperty('enabled')
    expect(typeof productionConfig?.localization.localStorageCache.enabled).toBe('boolean')
    expect(productionConfig?.localization.localStorageCache).toHaveProperty('expirationInMinutes')
    expect(typeof productionConfig?.localization.localStorageCache.expirationInMinutes).toBe('number')
  })
})
