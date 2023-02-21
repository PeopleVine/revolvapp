Revolvapp.add('block', 'block.block-name', {
    mixins: ['block'],
    type: 'block-name',
    title: 'Upcoming Events',
    // icon: '<svg ...></svg>',
    section: 'misc',
    build: function() {
        let pvComponent = "data-pv-component";
        let pvType = "data-pv-type";
        let pvParameters = "data-pv-parameters";

        // block
        this.block = this.app.create('tag.block', {
            padding: '40px',
            [pvComponent]: 'event',
            [pvType]: 'eventList',
            [pvParameters]: 'returnTotal:9'
        });

        // components
        var image = this.app.create('tag.image', {
            src: '{@event_graphic@}'
        });

        var text = this.app.create('tag.text', {
            html: '{@event_description@}',
            margin: '10px 0 0 0'
        });

        // add
        this.block.add(image);
        this.block.add(text);
    }
});