(function() {
    Revolvapp.add('plugin', 'add', {
        start: function() {
            this.app.control.add('add', {
                icon: '<i class="fa fa-plus"></i>',
                command: 'add.toggle',
                position: 'first'
            });
        },
        toggle: function(args) {
            alert("open add blocks")
        }
    });
})(Revolvapp);