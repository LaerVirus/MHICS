import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

export class RingsTableView extends Component {
    static displayName = RingsTableView.name;

    constructor(props) {
        super(props);

        this.state = {
            id: 0
        }
    }

    render() {
        return (
            <Table style={{ marginLeft: 10, marginRight:10 }} striped bordered hover hidden={this.props.isHidden}>
                <thead>
                    <tr>
                        <th>№</th>
                        <th>Тип кольца</th>
                        <th>Цена</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.rings.map((ring, id) =>
                        <tr key={ring.name} onClick={() => { this.props.handleChoose(ring) }}>
                            <td>{id+1}</td>
                            <td>{ring.name}</td>
                            <td>{ring.price} руб.</td>
                            <td>
                                <Button onClick={() => { this.props.handleUpdate(ring) }}>
                                    Обновить
                                </Button>
                            </td>
                            <td>
                                <Button name="btn-delete" variant="danger" onClick={() => { this.props.handleDelete(ring) }}>
                                    Удалить
                                </Button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </Table>
        );
    }
}
