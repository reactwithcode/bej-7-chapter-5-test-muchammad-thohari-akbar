'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Cards', [{
      card_number: 1,
      issuer: "mastercard",
      is_status: false,
      user_id: 1,
    }, {
      card_number: 2,
      issuer: "visa",
      is_status: false,
      user_id: 1,
    }, {
      card_number: 4,
      issuer: "mastercard",
      is_status: false,
      user_id: 1,
    }, {
      card_number: 2,
      issuer: "visa",
      is_status: false,
      user_id: 1,
    }, {
      card_number: 3,
      issuer: "mastercard",
      is_status: false,
      user_id: 1,
    }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Cards', null, {});
  }
};
