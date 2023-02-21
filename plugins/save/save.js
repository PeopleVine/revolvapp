(function() {
    Revolvapp.add('plugin', 'save', {
        start: function() {
            this.app.toolbar.add('save', {
                title: 'Save',
                icon: '<i class="fa-solid fa-floppy-disk"></i>',
                command: 'save.toggle',
            });
        },
        toggle: function(args) {
            alert('Save the email template!');
        }
    });
})(Revolvapp);