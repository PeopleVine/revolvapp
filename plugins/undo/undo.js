(function() {
    Revolvapp.add('plugin', 'undo', {
        start: function() {
            this.app.toolbar.add('undo', {
                title: 'Undo',
                icon: '<i class="fa-solid fa-rotate-left"></i>',
                command: 'undo.toggle',
            });
        },
        toggle: function(args) {
            alert('Undo last action!');
        }
    });
})(Revolvapp);