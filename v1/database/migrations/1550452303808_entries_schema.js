'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EntriesSchema extends Schema {
  up () {
    this.create('entries', (table) => {
      table.increments()
      table.integer('status').notNullable()
      table
        .integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('SET NULL')
      table
        .integer('event_id')
        .unsigned()
        .references('id')
        .inTable('events')
        .onUpdate('CASCADE')
        .onDelete('SET NULL')
      table.timestamps()
    })
  }

  down () {
    this.drop('entries')
  }
}

module.exports = EntriesSchema
