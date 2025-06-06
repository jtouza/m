// helper to read the value of VUE_APP_CONFIG (or VITE_APP_CONFIG if using vite)
export function getAppConfigKey() {

    // if using create-react-ap (webpack):
    // let env: string = 'mock'
    // // @ts-ignore
    // if (process.env && process.env.VUE_APP_CONFIG) {
    //  // @ts-ignore
    //   env = process.env.VUE_APP_CONFIG.trim()
    // }
    // return env

    // Note: Vite uses import.meta.env (reference: https://vitejs.dev/guide/env-and-mode.html)
    // optional: you can console.log the content of import.meta.env to inspect its values like this: console.log('import.meta.env', JSON.stringify(import.meta.env))
    // @ts-ignore

    return (import.meta.env.VITE_APP_CONFIG || '').trim()
}

