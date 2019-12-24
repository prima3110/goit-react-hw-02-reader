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
    const totalPages = items.length;
    const firstPublication = publicationIndex === 0;
    const lastPublication = publicationIndex === totalPages - 1;
    return (
      <>
        <Controls
          firstPublication={firstPublication}
          lastPublication={lastPublication}
          onPrevClick={this.handlePrevClick}
          onNextClick={this.handleNextClick}
        />
        <Progress currentPage={publicationIndex + 1} totalPages={totalPages} />
        <Publication
          currentPage={publicationIndex + 1}
          publication={publication}
        />
      </>
    );
  }
}
