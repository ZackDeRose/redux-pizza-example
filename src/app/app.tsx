// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useDispatch, useSelector } from 'react-redux';
import {
  addPepperoni,
  addSausage,
  removePepperoni,
  removeSausage,
  selectHasPepperoni,
  selectHasSausage,
  selectPizzaImage,
  selectPizzaPrice,
} from './store';

export function App() {
  const hasPepperoni = useSelector(selectHasPepperoni);
  const hasSausage = useSelector(selectHasSausage);
  const price = useSelector(selectPizzaPrice);
  const imageUrl = useSelector(selectPizzaImage);
  const dispatch = useDispatch();
  return (
    <>
      <img
        src={imageUrl}
        style={{ height: '200px', width: '200px', display: 'block' }}
      />
      <button
        onClick={() => {
          dispatch(hasPepperoni ? removePepperoni({}) : addPepperoni({}));
        }}
      >
        {hasPepperoni ? 'Remove' : 'Add'} Pepperonni
      </button>
      <button
        onClick={() => {
          dispatch(hasSausage ? removeSausage({}) : addSausage({}));
        }}
      >
        {hasSausage ? 'Remove' : 'Add'} Sausage
      </button>
      <h1>Price: ${price}</h1>
    </>
  );
}

export default App;
