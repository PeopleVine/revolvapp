(function () {
  Revolvapp.add("plugin", "redo", {
    start: function () {
      this.app.toolbar.add("redo", {
        title: "Redo",
        icon: '<img class="icon icon-sm" src="../../icons/redo.svg" alt="" />',
        command: "redo.toggle",
      });
    },
    toggle: function () {
      this.app.state.redo();
    },
  });
})(Revolvapp);
