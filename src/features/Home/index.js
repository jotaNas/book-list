import React, { Component } from "react";
import Header from "../../containers/Header";
import Section from "../../containers/Section";

import List from "../../components/List";
import { Input } from "../../components/Input";
import api from "../../api";

//import "./Home.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sectionData: props.sectionData,
      inputItemValue: "",
    };

    this.fetchData = this.fetchData.bind(this);
    this.handleChangeValue = this.handleChangeValue.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChangeValue(e) {
    this.setState({ inputItemValue: e.target.value });
  }

  async handleClick() {
    this.setState(() => this.fetchData(this.state.inputItemValue));
  }

  async fetchData(value) {
    const response = await api.get("/v1/search?query='hits'" + value);

    this.setState({ sectionData: response?.data.hits });
  }

  componentDidMount() {
    this.fetchData("");
  }

  render() {
    const { title } = this.props;

    const { sectionData } = this.state;

    return (
      <div className="Welcome">
        <Header title={title} />
        <Section className="SectionSearch">
          <Input
            inputItem={this.state.inputItemValue}
            handleChangeValue={this.handleChangeValue}
          />

          <button onClick={this.handleClick}>Pesquisar</button>
        </Section>

        <Section className="SectionData">
          <List data={sectionData} />
        </Section>
      </div>
    );
  }
}

export default Home;
