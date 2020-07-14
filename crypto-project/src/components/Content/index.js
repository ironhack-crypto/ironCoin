import React from 'react';
import MobileView from '../responsiveViews/mobileView';
import DesktopView from '../responsiveViews/desktopView';
import { useWindowDimensions } from '../WindowDimensionsProvider/index';

const ResponsiveLayout = ({ breakpoint, renderMobile, renderDesktop }) => {
    const { width } = useWindowDimensions()
    return (width > breakpoint ? renderDesktop() : renderMobile())
  }
const Content = ({ items }) => (
    <ResponsiveLayout
      breakPoint={767}
      renderDesktop={() => (
        <DesktopView items={items} />
      )}
      renderMobile={() => (
        <MobileView items={items} />
      )}
    />
  )

  export default Content