(function() {
    Revolvapp.add('plugin', 'redo', {
        start: function() {
            this.app.toolbar.add('redo', {
                title: 'Redo',
                icon: '<i class="fa-solid fa-rotate-right"></i>',
                command: 'redo.toggle',
            });
        },
        toggle: function() {
            this.app.state.redo();
        }
    });
})(Revolvapp);