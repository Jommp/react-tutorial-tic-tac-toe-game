import { Square } from '../src/components';

export default () => {
  return <>
    <div className="board-row">
        <Square />
        <Square />
        <Square />
    </div>

    <div className="board-row">
        <Square />
        <Square />
        <Square />
    </div>

    <div className="board-row">
        <Square />
        <Square />
        <Square />
    </div>
  </>;
}
