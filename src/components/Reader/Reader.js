import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Controls from '../Controls/Controls';
import Progress from '../Progress/Progress';
import Publication from '../Publication/Publication';

export default class Reader extends Component {
  static defaultProps = {
    step: 1,
  };

  static propTypes = {
    step: PropTypes.number,
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
  };

  state = {
    publicationIndex: 0,
  };

  handlePrevClick = () => {
    this.setState(prevState => ({
      publicationIndex: prevState.publicationIndex - this.props.step,
    }));
  };

  handleNextClick = () => {
    this.setState(prevState => ({
      publicationIndex: prevState.publicationIndex + this.props.step,
    }));
  };

  render() {
    const { publicationIndex } = this.state;
    const { items } = this.props;
    const publication = items[publicationIndex];
    return (
      <div>
        <Controls
          publicationIndex={publicationIndex}
          onPrevClick={this.handlePrevClick}
          onNextClick={this.handleNextClick}
          totalPages={items}
        />
        <Progress currentPage={publicationIndex + 1} totalPages={items} />
        <Publication publication={publication} />
      </div>
    );
  }
}
