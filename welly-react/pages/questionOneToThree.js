import React, { useState } from "react";
import styles from "@/styles/javaScript.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

export default function questionOneToThree() {
  const [text, setText] = useState("Hello");
  function reverseString() {
    const reversedText = text.split("").reverse().join("");
    setText(reversedText);
  }
  const [numbers, setNumbers] = useState([2, 8, 4, 10, 1, 7]);
  function filterNumbersGreaterThanFive() {
    const numberFilter = numbers.filter((number) => parseInt(number) > 5);
    setNumbers(numberFilter);
  }

  const queationThree = `
    function formatName(firstName, lastName) {
      return \`\${firstName || ''} \${lastName || ''}\`.trim();
    }
  `;

  const queationThreeSecond = `利用\`\${}\`語法插入變數值，表達若是firstName 或是lastName為空，則以空字串代替;
  再加上trim，縮減掉不必要的空格，使原本的程式碼更精簡，但又可達一樣的效果。`;

  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>1. JavaScript: 字串反轉</div>
        <div id="hello" className={styles.content}>
          {text}
        </div>
        <Button
          className={styles.btn}
          variant="outline-secondary"
          onClick={reverseString}
        >
          Reverse
        </Button>
        <div className={styles.title}>2. JavaScript: 陣列過濾</div>
        <div id="hello" className={styles.content}>
          {JSON.stringify(numbers)}
        </div>
        <Button
          className={styles.btn}
          variant="outline-secondary"
          onClick={filterNumbersGreaterThanFive}
        >
          Filter
        </Button>
        <div className={styles.title}>3. JavaScript: 重構</div>
        <div className={styles.contentText}>
          <div>原本提供的程式碼即可正常執行，但可以改成：</div>
          <div>{queationThree}</div>
          <div>{queationThreeSecond}</div>
        </div>
      </div>
    </>
  );
}
