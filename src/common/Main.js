import {useSelector} from 'react-redux';
import { Frame } from './Frame';

function Main(props) {
  const user = useSelector(state => state.user);
  const title = user.isAdmin ? 'Admin Screen' : 'Screen';

  return (
    <Frame>
      <h1 title={title}>Main {title}</h1>
    </Frame>
  )

}

export default Main;
