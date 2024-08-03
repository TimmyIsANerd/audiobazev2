/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {
  //  ╦ ╦╔═╗╔╗ ╔═╗╔═╗╔═╗╔═╗╔═╗
  //  ║║║║╣ ╠╩╗╠═╝╠═╣║ ╦║╣ ╚═╗
  //  ╚╩╝╚═╝╚═╝╩  ╩ ╩╚═╝╚═╝╚═╝
  "GET /": { action: "view-homepage-or-redirect" },
  "GET /dashboard": { action: "dashboard/view-welcome" },

  "GET /faq": { action: "view-faq" },
  "GET /legal/terms": { action: "legal/view-terms" },
  "GET /legal/privacy": { action: "legal/view-privacy" },
  "GET /contact": { action: "view-contact" },

  "GET /signup": { action: "entrance/view-signup" },
  "GET /email/confirm": { action: "entrance/confirm-email" },
  "GET /email/confirmed": { action: "entrance/view-confirmed-email" },

  "GET /login": { action: "entrance/view-login" },
  "GET /password/forgot": { action: "entrance/view-forgot-password" },
  "GET /password/new": { action: "entrance/view-new-password" },

  "GET /account": { action: "account/view-account-overview" },
  "GET /account/password": { action: "account/view-edit-password" },
  "GET /account/profile": { action: "account/view-edit-profile" },
  "GET /activatelicense": { action: "dashboard/license/view-activatelicense" },

  //  ╔╦╗╦╔═╗╔═╗  ╦═╗╔═╗╔╦╗╦╦═╗╔═╗╔═╗╔╦╗╔═╗   ┬   ╔╦╗╔═╗╦ ╦╔╗╔╦  ╔═╗╔═╗╔╦╗╔═╗
  //  ║║║║╚═╗║    ╠╦╝║╣  ║║║╠╦╝║╣ ║   ║ ╚═╗  ┌┼─   ║║║ ║║║║║║║║  ║ ║╠═╣ ║║╚═╗
  //  ╩ ╩╩╚═╝╚═╝  ╩╚═╚═╝═╩╝╩╩╚═╚═╝╚═╝ ╩ ╚═╝  └┘   ═╩╝╚═╝╚╩╝╝╚╝╩═╝╚═╝╩ ╩═╩╝╚═╝
  "/terms": "/legal/terms",
  "/logout": "/api/v1/account/logout",

  //  ╦ ╦╔═╗╔╗ ╦ ╦╔═╗╔═╗╦╔═╔═╗
  //  ║║║║╣ ╠╩╗╠═╣║ ║║ ║╠╩╗╚═╗
  //  ╚╩╝╚═╝╚═╝╩ ╩╚═╝╚═╝╩ ╩╚═╝
  // …

  //  ╔═╗╔═╗╦  ╔═╗╔╗╔╔╦╗╔═╗╔═╗╦╔╗╔╔╦╗╔═╗
  //  ╠═╣╠═╝║  ║╣ ║║║ ║║╠═╝║ ║║║║║ ║ ╚═╗
  //  ╩ ╩╩  ╩  ╚═╝╝╚╝═╩╝╩  ╚═╝╩╝╚╝ ╩ ╚═╝
  // Note that, in this app, these API endpoints may be accessed using the `Cloud.*()` methods
  // from the Parasails library, or by using those method names as the `action` in <ajax-form>.
  "/api/v1/account/logout": { action: "account/logout" },
  "PUT   /api/v1/account/update-password": {
    action: "account/update-password",
  },
  "PUT   /api/v1/account/update-profile": { action: "account/update-profile" },
  "PUT   /api/v1/account/update-billing-card": {
    action: "account/update-billing-card",
  },
  "PUT   /api/v1/entrance/login": { action: "entrance/login" },
  "POST  /api/v1/entrance/signup": { action: "entrance/signup" },
  "POST  /api/v1/entrance/send-password-recovery-email": {
    action: "entrance/send-password-recovery-email",
  },
  "POST  /api/v1/entrance/update-password-and-login": {
    action: "entrance/update-password-and-login",
  },
  "POST  /api/v1/deliver-contact-form-message": {
    action: "deliver-contact-form-message",
  },
  "POST  /api/v1/observe-my-session": {
    action: "observe-my-session",
    hasSocketFeatures: true,
  },

  // Licence Keys
  "GET /api/v1/generate/license/:number": { action: "key/generate-license" },
  "POST /activate/licensekey": { action: "license/activate-license" },
  // Set Expiry Date
  "POST /service/expiry": { action: "license/set-expiry" },
  // View Keys
  "GET /keys": { action: "view-list-keys" },

  // Admin Functions
  "GET /users": { action: "view-list-users" },

  // View User
  "GET /user/:id": { action: "view-user" },

  // Revoke User
  "GET /user/revoke/:id": { action: "dashboard/revoke-user" },

  // Delete User
  "GET /user/delete/:id": { action: "dashboard/user/delete" },

  // Store Functions
  "GET /store": { action: "view-store" },
  "GET /store/product": { action: "view-add-product" },
  "GET /store/product/:id": { action: "store/view-get-product" },
  "GET /store/product/modify/:id": { action: "store/view-edit-product" },

  // Add Product
  "POST /store/product": { action: "store/add-product" },
  "PATCH /store/product/:id": { action: "store/edit-product" },
  "GET /store/product/delete/:id": { action: "store/delete-product" },

  // Order Process
  "GET /orders": { action: "store/view-get-orders" },
  "GET /orders/:id": { action: "store/view-get-order" },

  // Cart Page
  "GET /cart/checkout": { action: "cart/view-get-cart" },

  // Coupon
  "GET /coupons": { action: "coupon/view-get-coupons" },
  "GET /coupon/:id": { action: "coupon/view-edit-coupon" },
  "GET /coupon/generate": { action: "coupon/view-create-coupon" },
  "POST /coupon/generate": { action: "coupon/create-coupon" },

  // Validate Coupon
  "POST /coupon/validate": { action: "coupon/verify-coupon" },
  "PATCH /coupon/verify": { action: "coupon/verify-coupon" },
  "PATCH /coupon/update/:id": { action: "coupon/update-coupon" },
  "DELETE /coupon/:id": { action: "coupon/delete-coupon" },

  // Sync Cart to Server Side
  "GET /cart": { action: "cart/get-cart" },
  "POST /cart/sync": { action: "cart/sync-cart" },
  "DELETE /cart": { action: "cart/empty-cart" },

  // Custom Order
  "GET /order/custom": { action: "view-custom-order" },
  "POST /order/custom": { action: "order/create-custom" },
  "DELETE /order/custom/:id": { action: "order/delete-custom" },

  // Transaction
  "GET /order/transaction/:id": { action: "store/view-transaction-process" },

  // Buy Product
  "POST /order/buy": { action: "store/buy-product" },
  //Payment Action
  "GET /order/transaction/:id/:action": { action: "store/payment-action" },

  // Submit Review
  "POST /review": { action: "review/submit-review" },
  "GET /review/:productId": { action: "review/view-get-reviews" },

  // Delete Review
  "DELETE /review/:id": { action: "review/delete-review" },

  // Bot Sign In
  "POST /api/v1/bot/auth/login": { action: "bot/auth/bot-login" },
  // Bot Get User Profile
  "GET /api/v1/bot/user": { action: "bot/profile/get-user" },

  // Check Expired Subscriptions
  "GET /api/v1/system/subscription": { action: "system/sub-check" },

  // Stay Alive Cron Job
  "GET /cron-job": { action: "system/status" },

  // Telegram Hook
  "POST /webhook": { action: "bot/telegram/parse-command" },

  // Daily Chart Page
  "GET /store/buy-spotify-chart": { action: "special/view-daily-chart" },

  // Create Invoice
  "POST /store/process-spotify-chart-request": {
    action: "special/process-chart-request",
  },

  // Requests
  "GET /store/spotify-chart/requests": { action: "special/view-requests" },

  // Invoice
  "GET /store/invoice/:id": { action: "special/view-invoice-user" },
};
