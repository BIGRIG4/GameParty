// migration

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    return queryInterface.addColumn('Rsvps', 'EventId', Sequelize.INTEGER)

  },


  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Rsvps', 'EventId');
  }
};
