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
          description: "A general template.",
          image: "/img/general.png",
        },
        {
          name: "Pending Invoice",
          url: "./templates/Simple Theme/pending-invoice.html",
          description: "A simple invoice template.",
          image: "/img/invoice.png",
        },
        {
          name: "Welcome",
          url: "./templates/Simple Theme/welcome.html",
          description: "Welcome members to their new membership.",
          image: "/img/welcome.png",
        },
      ];

      for (let i = 0; i < templateData.length; i++) {
        var template = templateData[i];

        var self = this;

        var $section = this.dom("<div>").addClass(
          this.prefix + "-template-card"
        );

        var $sectionImageContainer = this.dom("<div>").addClass(
          this.prefix + "-template-image-container"
        );

        var $sectionImage = this.dom("<img>")
          .addClass(this.prefix + "-template-image")
          .attr("src", template.image);

        var $sectionContent = this.dom("<div>").addClass(
          this.prefix + "-template-content"
        );

        var $sectionTitle = this.dom("<div>")
          .addClass(this.prefix + "-template-title")
          .text(template.name);

        var $sectionDescription = this.dom("<div>")
          .addClass(this.prefix + "-template-description")
          .text(template.description);

        var $sectionButton = this.dom("<button>")
          .addClass(this.prefix + "-template-button")
          .text("Select");

        $sectionButton.on("click", () => {
          console.log(template.url);
          self.ajax.get({
            url: templateData[i].url,
            success: function (data) {
              self.app.editor.setTemplate(data);
              self.app.popup.close();
            },
          });
        });

        $sectionImageContainer.append($sectionImage);

        $sectionContent.append($sectionTitle);
        $sectionContent.append($sectionDescription);
        $sectionContent.append($sectionButton);

        $section.append($sectionImageContainer);
        $section.append($sectionContent);

        stack.$body.append($section);
      }
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
