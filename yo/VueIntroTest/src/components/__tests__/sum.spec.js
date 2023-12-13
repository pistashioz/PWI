import { describe, it, expect } from 'vitest'

import {sum} from '../sum.js'

describe('Sum', () => {
  it('sum operation', () => {
    expect(sum(3,4)).toBe(7)
  })
})
