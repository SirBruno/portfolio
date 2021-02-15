import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import {
//   decrement,
//   increment,
//   incrementByAmount,
//   incrementAsync,
//   selectCount,
// } from './counterSlice';
import { selectPosts, addPosts } from './counterSlice';
import styles from './Counter.module.css';

export function Counter() {
  // const count = useSelector(selectCount);
  // const dispatch = useDispatch();
  // const [incrementAmount, setIncrementAmount] = useState('2');

  const posts = useSelector(selectPosts);
  const dispatch = useDispatch();

  return (
    // <div>
    //   <div className={styles.row}>
    //     <button
    //       className={styles.button}
    //       aria-label="Increment value"
    //       onClick={() => dispatch(increment())}
    //     >
    //       +
    //     </button>
    //     <span className={styles.value}>{count}</span>
    //     <button
    //       className={styles.button}
    //       aria-label="Decrement value"
    //       onClick={() => dispatch(decrement())}
    //     >
    //       -
    //     </button>
    //   </div>
    //   <div className={styles.row}>
    //     <input
    //       className={styles.textbox}
    //       aria-label="Set increment amount"
    //       value={incrementAmount}
    //       onChange={e => setIncrementAmount(e.target.value)}
    //     />
    //     <button
    //       className={styles.button}
    //       onClick={() =>
    //         dispatch(incrementByAmount(Number(incrementAmount) || 0))
    //       }
    //     >
    //       Add Amount
    //     </button>
    //     <button
    //       className={styles.asyncButton}
    //       onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}
    //     >
    //       Add Async
    //     </button>
    //   </div>
    // </div>
    <div>
      <div>{ posts }</div>
      <button
          className={styles.button}
          aria-label="Add Posts"
          onClick={() => dispatch(addPosts(10))}
        >
          -
        </button>
      <div>
        <a href="https://www.instagram.com/bruno.jsx/" target="_blank" rel="noreferrer">Instagram</a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/sirbruno/" target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
      <div>
        
      </div>
    </div>
  );
}