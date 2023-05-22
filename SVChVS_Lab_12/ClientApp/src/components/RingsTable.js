import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import { RingsTableView } from './RingsTableView';

export class RingsTable extends Component {
    static displayName = RingsTable.name;

    constructor(props) {
        super(props);

        this.state = {
            ring:{}
        }

        this.handleChoose = this.handleChoose.bind(this);
    }

    render() {
        return (
            <div hidden={this.props.isHidden}>
                <Button style={{ marginTop: 10, marginLeft: 10, marginBottom: 10 }} onClick={(event) => this.handleAdd(event)}>
                    Добавить
                </Button>
                <RingsTableView
                    rings={this.props.rings}
                    handleChoose={this.handleChoose}
                    handleExamine={this.props.handleExamine}
                    handleUpdate={this.props.handleUpdate}
                    handleDelete={this.props.handleDelete}
                />
            </div>
        );
    }

    handleChoose(ring) {
        this.setState(
            {
                ring: ring
            }
        )

        this.props.handleChoose(ring);
    }

    handleAdd(event) {
        event.preventDefault();
        this.props.handleAdd();
    }
}
