(function () {
  Revolvapp.add("plugin", "redo", {
    start: function () {
      this.app.toolbar.add("redo", {
        title: "Redo",
        icon: '<img class="icon icon-sm" src="https://peoplevine.blob.core.windows.net/media/1087/redo.png" alt="" />',
        command: "redo.toggle",
      });
    },
    toggle: function () {
      this.app.state.redo();
    },
  });
})(Revolvapp);
