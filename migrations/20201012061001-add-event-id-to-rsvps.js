// migration

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    return queryInterface.addColumn('Rsvps', 'EventId', Sequelize.INTEGER).then(() => {
    return queryInterface.addConstraint('Rsvps', ['EventId'], {
      type: 'foreign key',
      name: 'event_rsvps',
      references: { //Required field
        table: 'Events',
        field: 'id'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    });
  });
},


  down: async (queryInterface, Sequelize) => {
  return queryInterface.removeColumn('Rsvps', 'EventId');
  }
};
