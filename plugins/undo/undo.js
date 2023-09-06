(function () {
  Revolvapp.add("plugin", "undo", {
    start: function () {
      this.app.toolbar.add("undo", {
        title: "Undo",
        icon: '<img class="icon icon-sm" src="https://peoplevine.blob.core.windows.net/media/1087/undo.png" alt="" />',
        command: "undo.toggle",
      });
    },
    toggle: function () {
      this.app.state.undo();
    },
  });
})(Revolvapp);
