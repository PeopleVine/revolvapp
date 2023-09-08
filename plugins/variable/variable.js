(function() {
    Revolvapp.add('plugin', 'variable', {
        translations: {
            en: {
                "variable": {
                    "variable": "Variable"
                }
            }
        },
        defaults: {
            icon: '<img src="https://peoplevine.blob.core.windows.net/media/1087/variables-icon.png" alt="">',
            items: ['email', 'name', 'company', 'phone', 'address', 'city', 'state', 'zip', 'country'],
            classname: Revolvapp.prefix + '-variable',
            template: {
                start: '{@',
                end: '@}'
            }
        },
        popups: {
            base: {
                title: '## variable.variable ##',
                builder: 'variable.buildItems'
            }
        },
        init: function() {},
        start: function() {
            this.app.toolbar.add('variable', {
                title: '## variable.variable ##',
                icon: this.opts.variable.icon,
                components: 'editable',
                command: 'variable.popup'
            });
        },
        popup: function(params, button) {
            this.app.popup.create('variable', this.popups.base);
            this.app.popup.open({ button: button });
        },
        insert: function(params, button, name) {
            this.app.popup.close();

            var start = this.opts.variable.template.start;
            var end = this.opts.variable.template.end;

            this.app.component.insert("<span class='variable-block'>" + start + name + end + "</span>", 'after');
            // this.app.component.insert(start + name + end, 'after');
        },
        buildItems: function() {
            var vars = this.opts.variable.items;
            var items = {};

            for (var i = 0; i < vars.length; i++) {
                var $el = this.dom('<span>').addClass(this.opts.variable.classname).html(vars[i]);
                items[vars[i]] = {
                    title: $el.get().outerHTML,
                    command: 'variable.insert'
                };
            }

            return items;
        }
    });
})(Revolvapp);
