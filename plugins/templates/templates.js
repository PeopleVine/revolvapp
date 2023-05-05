(function () {
  Revolvapp.add("plugin", "templates", {
    start: function () {
      this.app.toolbar.add("templates", {
        title: "Templates",
        icon: '<i class="fa-solid fa-book"></i>',
        command: "templates.popup",
        position: "first",
      });
    },
    translations: {
      en: {
        style: {
          style: "Style",
          "remove-style": "Remove Style",
        },
      },
    },
    defaults: {
      icon: '<svg height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m15 1c-3.5955345 2.88454776-5.25146525 9.6241453-7.87485347 9.6241453h-2.6253419l-2.62495116 4.3758547h-.87485347c1.75009768-5.25102559 6.33028189-14 14-14z"/></svg>',
      styles: false,
    },
    popups: {
      base: {
        left: 0,
        width: "500px",
        title: "Templates",
        builder: "templates.buildItems",
      },
    },
    init: function () {},
    popup: function (params, button) {
      this.app.popup.create("templates", this.popups.base);
      this.app.popup.open({ button: button });
    },
    set: function (params, button, name) {
      this.app.popup.close();

      this.app.toolbar.build();
    },
    buildItems: function (stack) {
      const templateData = [
        {
          name: "General",
          url: "./templates/Simple Theme/general.html",
        },
      ];
    },

    // private
    _objectToCss: function (obj) {
      var keys = Object.keys(obj);
      var str = "";

      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        str += key + ":" + obj[key] + ";";
      }

      return str;
    },
  });
})(Revolvapp);
