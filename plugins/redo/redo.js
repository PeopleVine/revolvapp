(function () {
  Revolvapp.add("plugin", "redo", {
    start: function () {
      this.app.toolbar.add("redo", {
        title: "Redo",
        icon: '<img style="filter: brightness(0) invert(1)" class="icon icon-sm" src="https://peoplevine.blob.core.windows.net/media/361/3615252d95e-d60f-4f0c-882a-1edbc9eb5be1.png" />',
        command: "redo.toggle",
      });
    },
    toggle: function () {
      this.app.state.redo();
    },
  });
})(Revolvapp);
