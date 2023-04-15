module.exports = {
  ci: {
    collect: {
      url: ['http://localhost:3000/'],
      startServerCommand: 'yarn start',
      settings: {
        emulatedFormFactor: 'desktop',
        disableDeviceEmulation: false,
        disableCpuThrottling: false,
        disableNetworkThrottling: false,
        throttlingMethod: 'provided'
      },
      assert: {
        preset: 'lighthouse:recommended',
          assertions: {
              'apple-touch-icon': 'off',
              'color-contrast': 'off',
              'crawlable-anchors': 'off',
              'installable-manifest': 'off',
              'maskable-icon': 'off',
              'meta-description': 'off',
              'offline-start-url': 'off',
              'service-worker': 'off',
              'splash-screen': 'off',
              'themed-omnibox': 'off',
              'works-offline': 'off',
              'content-width': 'off',
          }
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
