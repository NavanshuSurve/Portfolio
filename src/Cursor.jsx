import { useRef } from 'react';
import Crosshair from './Crosshair';

const Cursor = () => {
const containerRef = useRef(null);

return (
  <div ref={containerRef} style={{ height: '300px', overflow: 'hidden' }}>
    <Crosshair color='#26ee0fff'/> 
  </div>
)
};
export default Cursor;
