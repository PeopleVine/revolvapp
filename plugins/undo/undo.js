(function () {
  Revolvapp.add("plugin", "undo", {
    start: function () {
      this.app.toolbar.add("undo", {
        title: "Undo",
        icon: '<img class="icon icon-sm" src="../../icons/undo.svg" alt="" />',
        command: "undo.toggle",
      });
    },
    toggle: function () {
      this.app.state.undo();
    },
  });
})(Revolvapp);
