
import SQL from '../..'

export const input = SQL.NAMED('query')`
  SELECT *
  FROM users
  WHERE id = 1
`

export const name = 'query'

export const text = `
  SELECT *
  FROM users
  WHERE id = 1
`

export const values = []