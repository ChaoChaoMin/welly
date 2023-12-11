import React, { useReducer } from "react";
import { Button } from "react-bootstrap";
import styles from "@/styles/loginCounter.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

//定義初始狀態為0
const iniState = { total: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case "increase":
      return { total: state.total + action.payload.value };
    case "decrease":
      return { total: state.total - action.payload.value };
    default:
      return state;
  }
};

export default function Counter() {
  //宣告state, dispatch
  const [state, dispatch] = useReducer(reducer, iniState);
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>5. React: 計數器</h1>
        <h1 className={styles.total}>{state.total}</h1>
        <div className={styles.containerBtn}>
          <Button
            className={styles.btn}
            variant="outline-secondary"
            onClick={() => {
              dispatch({ type: "increase", payload: { value: 1 } });
            }}
          >
            +1
          </Button>
          <Button
            className={styles.btn}
            variant="outline-secondary"
            onClick={() => {
              dispatch({ type: "decrease", payload: { value: 1 } });
            }}
          >
            -1
          </Button>
        </div>
      </div>
    </>
  );
}
