(function () {
  Revolvapp.add("plugin", "add", {
    start: function () {
      this.app.api(
        "component.popup",
        false,
        {
          getName: () => "Add",
          isControl: () => false,
          get: () => {},
          getOffset: () => 0,
          getDimension: () => ({ width: 0, height: 0 }),
        },
        "add",
        {}
      );
    },
    toggle: function (args) {},
  });
})(Revolvapp);
