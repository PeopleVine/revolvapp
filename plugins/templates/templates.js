(function() {
    Revolvapp.add('plugin', 'templates', {
        start: function() {
            this.app.toolbar.add('templates', {
                title: 'Templates',
                icon: '<i class="fa-solid fa-book"></i>',
                command: 'templates.toggle',
                position: 'first'
            });
        },
        toggle: function(args) {
            alert('Show all email templates!');
        }
    });
})(Revolvapp);