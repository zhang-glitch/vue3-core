import { UserConfig } from 'vitest/config'
import config from './vitest.config'

export default {
  // eslint-disable-next-line no-restricted-syntax
  ...config,
  test: {
    // eslint-disable-next-line no-restricted-syntax
    ...config.test,
    include: ['packages/vue/__tests__/e2e/*.spec.ts']
  }
} as UserConfig
