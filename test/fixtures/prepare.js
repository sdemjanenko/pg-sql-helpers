
import SQL from '../..'

export const input = SQL.PREPARE('query')`
  SELECT *
  FROM users
  WHERE id = 1
`

export const text = `
  SELECT *
  FROM users
  WHERE id = 1
`

export const values = []

export const name = 'query'
