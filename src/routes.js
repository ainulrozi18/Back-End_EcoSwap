const handlers = require('./handler');
const middleware = require('./middleware');

const routes = [
  {
    method: 'POST',
    path: '/daftar',
    handler: handlers.registerHandler,
    options: {
      auth: false,
    },
  },
  {
    method: 'POST',
    path: '/daftar-admin',
    handler: handlers.registerAdminHandler,
    options: {
      auth: false,
    },
  },
  {
    method: 'POST',
    path: '/login',
    handler: handlers.loginHandler,
    options: {
      auth: false,
    },
  },
  {
    method: 'POST',
    path: '/logout',
    handler: handlers.logoutHandler,
    options: {
      pre: [{ method: middleware.validateToken }],
    },
  },
  {
    method: 'POST',
    path: '/login/admin',
    handler: handlers.adminLoginHandler,
    options: {
      auth: false,
    },
  },
  {
    method: 'POST',
    path: '/logout/admin',
    handler: handlers.adminLogoutHandler,
    options: {
      pre: [{ method: middleware.validateToken }],
    },
  },
  {
    method: 'GET',
    path: '/users',
    handler: handlers.getAllUsersHandler,
    options: {
      auth: false,
    },
  },
  {
    method: 'GET',
    path: '/users/{id}',
    handler: handlers.getUserHandler,
    options: {
      auth: false,
    },
  },
  {
    method: 'PUT',
    path: '/users/{id}',
    handler: handlers.updateUserHandler,
    options: {
      auth: false,
    },
  },
  {
    method: 'POST',
    path: '/pickups',
    handler: handlers.requestPickupHandler,
    options: {
      pre: [{ method: middleware.validateToken }],
    },
  },
  {
    method: 'DELETE',
    path: '/batal-pickups/{id}',
    handler: handlers.cancelPickupHandler,
    options: {
      pre: [{ method: middleware.validateToken }],
    },
  },
  {
    method: 'POST',
    path: '/pickups/{id}/approve',
    handler: handlers.approvePickupHandler,
    options: {
      pre: [{ method: middleware.validateToken }],
    },
  },
  {
    method: 'GET',
    path: '/points/{id}',
    handler: handlers.getUserPointsHandler,
    options: {
      auth: false,
    },
  },
  {
    method: 'GET',
    path: '/pickups/users/{userId}',
    handler: handlers.getPickupsByUserIdHandler,
    options: {
      auth: false,
    },
  },
  {
    method: 'GET',
    path: '/pickups',
    handler: handlers.getAllPickupsHandler,
    options: {
      auth: false,
    },
  },
  {
    method: 'POST',
    path: '/withdrawals',
    handler: handlers.requestWithdrawalHandler,
    options: {
      pre: [{ method: middleware.validateToken }],
    },
  },
  {
    method: 'PUT',
    path: '/withdrawals/{id}/approve',
    handler: handlers.approveWithdrawalHandler,
    options: {
      pre: [{ method: middleware.validateToken }],
    },
  },
  {
    method: 'GET',
    path: '/withdrawals',
    handler: handlers.getAllWithdrawalsHandler,
    options: {
      auth: false,
    },
  },
  {
    method: 'GET',
    path: '/pickups/{id}',
    handler: handlers.getPickupByIdHandler,
    options: {
      auth: false,
    },
  },
  {
    method: 'GET',
    path: '/withdrawals/{id}',
    handler: handlers.getWithdrawalByIdHandler,
    options: {
      auth: false,
    },
  },
  {
    method: 'GET',
    path: '/tokens',
    handler: handlers.getTokensHandler,
    options: {
      auth: false,
    },
  },
  {
    method: 'GET',
    path: '/tokens/{userId}',
    handler: handlers.getTokensByUserIdHandler,
    options: {
      auth: false,
    },
  },
  {
    method: 'DELETE',
    path: '/hapus-pickups/{id}',
    handler: handlers.deletePickupHandler,
    options: {
      auth: false,
    },
  },
  {
    method: 'DELETE',
    path: '/hapus-withdrawals/{id}',
    handler: handlers.deleteWithdrawalHandler,
    options: {
      auth: false,
    },
  },
  {
    method: 'DELETE',
    path: '/hapus-users/{id}',
    handler: handlers.deleteUserHandler,
    options: {
      auth: false,
    },
  },
];

module.exports = routes;
