module.exports = {
  friendlyName: "View homepage or redirect",

  description:
    "Display or redirect to the appropriate homepage, depending on login status.",

  exits: {
    // success: {
    //   statusCode: 200,
    //   description:
    //     "Requesting user is a guest, so show the public landing page.",
    //   viewTemplatePath: "pages/homepage",
    // },
    // redirect: {
    //   responseType: "redirect",
    //   description:
    //     "Requesting user is logged in, so redirect to the internal welcome page.",
    // },
  },

  fn: async function () {
    const { res } = this;
    return res.redirect("https://audiobaze.store");
  },
};
