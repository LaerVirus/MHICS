import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export class RingFormView extends Component {
    static displayName = RingFormView.name;

    constructor(props) {
        super(props);

        this.state = {
            ring: props.ring,
            formStateAdding: "Добавление",
            formStateUpdating: "Обновление",
            formStateExamine: "Просмотр",
            name: props.ring.name,
            price: props.ring.price,
            validated: false
        };

        this.handleChangeInput = this.handleChangeInput.bind(this);
        this.createRingModel = this.createRingModel.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        return (
            <div hidden={ this.props.isHidden}>
                <Button style={{ marginTop: 10, marginLeft: 10, marginBottom:10 }} onClick={(event) => this.props.handleBack(event)}>
                    Назад к списку
                </Button>
                <p style={{ marginLeft: 10 }}>{this.props.isAdding ? this.state.formStateAdding :
                    this.props.isUpdating ? this.state.formStateUpdating :
                        this.state.formStateExamine}</p>
                <Form validated={this.state.validated} onSubmit={this.handleSubmit}>
                    <fieldset disabled={!this.props.isUpdating && !this.props.isAdding} hidden={ this.props.isHidden}>
                        <Row>
                            <Col>
                                <fieldset>
                                    <Form.Group className="mb-3">
                                        <Form.Label size="sm" style={{ marginLeft: 10 }}>Тип кольца</Form.Label>
                                        <Form.Control size="sm" type="text" name="name" value={this.state.name} placeholder={this.state.ring.name} onChange={this.handleChangeInput} required />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label size="sm" style={{ marginLeft: 10 }}>Цена</Form.Label>
                                        <Form.Control size="sm" type="number" name="price" value={this.state.price} placeholder={this.state.ring.price} onChange={this.handleChangeInput} required />
                                    </Form.Group>
                                </fieldset>
                            </Col>
                        </Row>
                        <Row>
                            <fieldset>
                                <Button style={{ marginLeft: 10 }} type="submit" hidden={!this.props.isAdding && !this.props.isUpdating}>
                                    {this.props.isAdding ? "Добавить" : "Обновить"}
                                </Button>
                            </fieldset>
                            </Row>
                    </fieldset>
                </Form>
            </div>
        );
    }

    handleSubmit(event) {
        event.preventDefault();
        const form = event.currentTarget;

        if (form.checkValidity() === false) {
            event.stopPropagation();
        }
        else {
            let ring = this.createRingModel();

            this.props.isAdding ? this.props.handlePost(event, ring) :
                this.props.handleUpdate(event, ring);

            this.setState({validated: true});
        }
    }

    createRingModel() {
        let ring = {
            "name": this.state.name,
            "price": this.state.price,
        }

        return ring;
    }

    handleChangeInput(event) {
        this.setState({[event.target.name]:event.target.value});
    }
}
