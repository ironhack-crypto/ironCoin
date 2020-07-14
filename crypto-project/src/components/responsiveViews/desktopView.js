import React from 'react';
import Tile from '../responsiveLayout/tileView';
import { useWindowDimensions } from '../windowDimensionsProvider/index';

const DesktopView = ({ items }) => {
    const { width } = useWindowDimensions()
    return (
      <div
        className={'tile is-ancestor '
          .concat(width < 1088 ? 'is-vertical' : '')}
      >
        {items.map((item, idx) => (
          <Tile
            key={item.title}
            {...item}
          />
        ))}
      </div>
    )
  }

  export default DesktopView