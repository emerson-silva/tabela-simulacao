import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default class ConfigFormRenderer extends Component {

  state = {
    arriveTime: '',
    serviceTime: '',
    arriveTimeList: [],
    serviceTimeList: []
  }

  handleChange = ({target}) => {
    this.setState({
      [target.name]: target.value
    });
  }

  handleChangeArray = ({target}) => {
    let nArray = [];
    let options = target.options;
    console.log(target);
    console.log(options);
    if (options && options.length > 0) {
      for (let i=0; i<options.length; i++) {
        console.log(i + " >> " + options[i].selected);
        if (options[i].selected) {
          nArray.push(options[i].value);
        }
      }
    }
    console.log(nArray);
    this.setState({
      [target.name]: nArray
    })
  }

  addArriveTime = () => {
    this.props.addArriveTime(this.state.arriveTime);
  }

  addServiceTime = () => {
    this.props.addServiceTime(this.state.serviceTime);
  }

  removeArriveTime = () => {
    this.props.removeArriveTime(this.state.arriveTimeList);
    this.setState({
      arriveTimeList: []
    })
  }

  removeServiceTime = () => {
    this.props.removeServiceTime(this.state.serviceTimeList);
    this.setState({
      serviceTimeList: []
    })
  }

  render() {
    return (
        <div id="ConfigFormRenderer">
          <Form onSubmit={this.props.renderTable}>
            <Row>
              <Col>
                <Form.Group controlId="tableConfig.sinceLastArriveList">
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="Tempo entre requisições"
                      aria-label="Tempo entre requisições"
                      aria-describedby="basic-addon2"
                      type="number"
                      name="arriveTime"
                      value={this.state.arriveTime}
                      onChange={this.handleChange}
                    />
                    <InputGroup.Append>
                      <Button variant="outline-success"
                        onClick={this.addArriveTime}>Adicionar</Button>
                      <Button variant="outline-danger"
                        onClick={this.removeArriveTime}>Deletar</Button>
                    </InputGroup.Append>
                  </InputGroup>
                  <Form.Control value={this.state.arriveTimeList} as="select" multiple name="arriveTimeList" onChange={this.handleChangeArray}>
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
                      type="number"
                      name="serviceTime"
                      value={this.state.serviceTime}
                      onChange={this.handleChange}
                    />
                    <InputGroup.Append>
                      <Button variant="outline-success"
                        onClick={this.addServiceTime}>Adicionar</Button>
                      <Button variant="outline-danger"
                        onClick={this.removeServiceTime}>Deletar</Button>
                    </InputGroup.Append>
                  </InputGroup>
                  <Form.Control as="select" value={this.state.serviceTimeList} multiple name="serviceTimeList" onChange={this.handleChangeArray}>
                    {
                      this.props.serviceTimeList.map(option =>
                        <option> {option} </option>
                      )
                    }
                  </Form.Control>
                </Form.Group>
              </Col>
            </Row>
            <Row className={this.props.isTableActive ? 'hidden':'render-bt'}>
              <Col>
                <Button variant="outline-primary" size="lg" onSubmit={this.props.renderTable} block>
                  Gerar Tablela
                </Button>
              </Col>
            </Row>
            <Row>
              <Col>
                <Button className={this.props.isTableActive ? 'hidden':'clear-bt'}
                    variant="outline-danger" size="lg" onSubmit={this.props.cleanTable}>
                  Limpar Configuração
                </Button>
              </Col>
            </Row>
          </Form>
        </div>
    );
  }
}
