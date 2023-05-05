(function () {
  Revolvapp.add("plugin", "undo", {
    start: function () {
      this.app.toolbar.add("undo", {
        title: "Undo",
        icon: '<img style="filter: brightness(0) invert(1)" class="icon icon-sm" src="https://peoplevine.blob.core.windows.net/media/361/36122e56ba5-7f62-48c8-96c1-096d59a7147a.png" />',
        command: "undo.toggle",
      });
    },
    toggle: function () {
      this.app.state.undo();
    },
  });
})(Revolvapp);
