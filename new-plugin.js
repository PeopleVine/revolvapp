(function() {
    Revolvapp.add('plugin', 'myplugin', {
        start: function() {
            this.app.toolbar.add('mybutton', {
                title: 'Templates',
                icon: '<i class="fa-solid fa-book"></i>',
                command: 'myplugin.toggle',
                position: 'first'
            });
        },
        toggle: function(args) {
            alert('My Button is toggled!');
        }
    });
})(Revolvapp);