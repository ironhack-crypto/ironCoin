import { useWindowDimensions } from '../windowDimensionsProvider/index';

const ResponsiveLayout = ({ breakpoint, renderMobile, renderDesktop }) => {
    const { width } = useWindowDimensions()
    return (width > breakpoint ? renderDesktop() : renderMobile())
  }