import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default class ConfigFormRenderer extends Component {

  render() {
    return (
        <div id="ConfigFormRenderer">
          <Form>
            <Row>
              <Col>
                <Form.Group controlId="tableConfig.sinceLastArriveList">
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="Tempo entre requisições"
                      aria-label="Tempo entre requisições"
                      aria-describedby="basic-addon2"
                    />
                    <InputGroup.Append>
                      <Button variant="outline-secondary">Adicionar</Button>
                      <Button variant="outline-secondary">Deletar</Button>
                    </InputGroup.Append>
                  </InputGroup>
                  <Form.Control as="select" multiple>
                    {
                      this.props.sinceLastArriveList.map(option =>
                        <option> {option} </option>
                      )
                    }
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="tableConfig.serviceTimeList">
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="Tempo de serviço"
                      aria-label="Tempo de serviço"
                      aria-describedby="basic-addon2"
                    />
                    <InputGroup.Append>
                      <Button variant="outline-secondary">Adicionar</Button>
                      <Button variant="outline-secondary">Deletar</Button>
                    </InputGroup.Append>
                  </InputGroup>
                  <Form.Control as="select" multiple>
                    {
                      this.props.serviceTimeList.map(option =>
                        <option> {option} </option>
                      )
                    }
                  </Form.Control>
                </Form.Group>
              </Col>
            </Row>
          </Form>
        </div>
    );
  }
}
