import React, { Component } from 'react';
import { RingFormView } from './RingFormView';

export class RingForm extends Component {
    static displayName = RingForm.name;

    constructor(props) {
        super(props);

        this.state = {
            ring: this.props.ring,
            formStateAdding: "Добавление",
            formStateUpdating: "Обновление",
            formStateExamine: "Просмотр",
        };

        this.handlePost = this.handlePost.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.postRing = this.postRing.bind(this);
        this.updateRing = this.updateRing.bind(this);
        this.handleBack = this.handleBack.bind(this);
    }

    render() {
        return (
                <RingFormView
                ring={this.state.ring}
                isHidden={this.props.isHidden}
                isAdding={this.props.isAdding}
                isUpdating={this.props.isUpdating}
                handlePost={this.handlePost}
                handleBack={this.handleBack}
                handleUpdate={this.handleUpdate}
                />
        );
    }

    handlePost(event, ring) {
        event.preventDefault();

        this.postRing(ring);
    }

    handleUpdate(event, ring) {
        event.preventDefault();

        this.updateRing(ring);
    }

    async postRing(ring) {
        console.log("Sending");

        post = await fetch('ring/create', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(ring)
        });
        console.log(post);
    }

    async updateRing(ring) {
        console.log("Updating");

        await fetch('ring/update', {
            method: 'PUT',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(ring)
        });
    }

    handleBack(event) {
        event.preventDefault();
        this.props.handleBack();
    }
}
