import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import { RingForm} from './RingForm';
import { RingsTable} from './RingsTable';

export class RingPage extends Component {
    static displayName = RingPage.name;

    constructor(props) {
        super(props);

        this.state = {
            rings: [],
            ring: {},
            isDisplayTable: true,
            isDisplayForm: false,
            isAdding: false,
            isUpdating: false,
        };

        this.handleChoose = this.handleChoose.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleBack = this.handleBack.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.clearState = this.clearState.bind(this);

        this.getRings = this.getRings.bind(this);
        this.deleteRing = this.deleteRing.bind(this);
    }

    componentDidMount() {
        this.getRings();
    }

    clearState() {
        this.setState(
            {
                ring: {},
                isDisplayTable: true,
                isDisplayForm: false,
                isAdding: false,
                isUpdating: false,
            }
        );
    }

    render() {
        return (
            <Row>
                { this.state.isDisplayTable ?
                <RingsTable
                    handleChoose={this.handleChoose}
                    rings={this.state.rings}
                    isHidden={!this.state.isDisplayTable}
                    handleAdd={this.handleAdd}
                    handleDelete={this.handleDelete}
                    handleUpdate={ this.handleUpdate}
                />
                    :
                <RingForm
                    ring={ this.state.ring}
                    isHidden={!this.state.isDisplayForm}
                    handleBack={this.handleBack}
                    isUpdating={this.state.isUpdating}
                    isAdding={this.state.isAdding}
                />
                }
            </Row>
        );
    }

    handleAdd() {
        this.setState(
            {
                ring: {},
                isDisplayTable: false,
                isDisplayForm: true,
                isAdding:true,
            }
        );
    }

    handleBack() {
        this.clearState();

        this.getRings();
    }

    handleChoose(currentRing) {
        if (event.target.name != "btn-delete") {
            this.setState(
                {
                    ring: currentRing,
                    isDisplayTable: false,
                    isDisplayForm: true,
                }
            );
        }
    }

    handleDelete(currentRing) {
        if (confirm("Вы действительно хотите удалить данный товар?")) {
            this.deleteRing(currentRing);
        }
    }

    handleUpdate(currentRing) {
        this.setState(
            {
                ring:currentRing,
                isDisplayForm: true,
                isDisplayTable: false,
                isUpdating: true
            }
        );
    }

    async deleteRing(ring) {
        console.log("Deleting");

        await fetch('ring/delete', {
            method: 'DELETE',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(ring.name)
        });
    }

    async getRings() {
        console.log("Receiving");

        const response = await fetch('ring');
        console.log(response);
        const data = await response.json();
        console.log(data);

        this.setState({ rings: data });
    }
}
