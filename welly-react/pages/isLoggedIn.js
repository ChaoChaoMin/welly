import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "@/styles/loginCounter.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import validator from "validator";

export default function loginPage() {
  const [login, setLogin] = useState(false);
  const [loginBelow, setLoginBelow] = useState(false);
  const wellyData = {
    username: "welly",
    password: "16888",
  };

  const intialData = {
    username: "",
    password: "",
  };

  const [data, setData] = useState(intialData);
  const [error, setError] = useState({ ...intialData, agree: "" });
  const hasError = (errors, fieldname) => {
    return !!errors[fieldname];
  };

  const handelClickIn = (e) => {
    setLogin(true);
  };

  const handelClickOut = (e) => {
    setLogin(false);
  };

  const validateFields = (data, error) => {
    const newErrors = { ...error };

    Object.keys(data).forEach((field) => {
      if (validator.isEmpty(data[field], { ignore_whitespace: true })) {
        newErrors[field] = `${field} 為必填，預設：${wellyData[field]}`;
      }
    });
    return newErrors;
  };

  const handelSubmit = (e) => {
    e.preventDefault();

    const newErrors = validateFields(data);
    setError(newErrors);
    if (Object.keys(newErrors).length === 0) {
      setLoginBelow(!loginBelow);
    }
  };

  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>4. React: 條件渲染</h1>
        <p className={styles.total}>
          {login ? "Welcome , Welly" : "Please Login"}
        </p>
        <div className={styles.containerBtn}>
          <Button
            className={styles.btn}
            variant="outline-secondary"
            onClick={handelClickIn}
          >
            Login
          </Button>
          <Button
            className={styles.btn}
            variant="outline-secondary"
            onClick={handelClickOut}
          >
            Logout
          </Button>
        </div>
        <p className={styles.total}>or</p>
        <div className={styles.total}>
          {!loginBelow ? (
            <Form onSubmit={handelSubmit}>
              <Form.Group as={Row} className="mb-3" controlId="username">
                <Form.Label column sm="3">
                  Username
                </Form.Label>
                <Col sm="9">
                  <Form.Control
                    type="username"
                    name="username"
                    placeholder={`Username: ${wellyData.username}`}
                    value={data.username}
                    onChange={(e) =>
                      setData({ ...data, username: e.target.value })
                    }
                  />
                </Col>
                <div className="error">{error.username}</div>
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="password">
                <Form.Label column sm="3">
                  Password
                </Form.Label>
                <Col sm="9">
                  <Form.Control
                    type="password"
                    name="password"
                    placeholder={`Password: ${wellyData.password}`}
                    value={data.password}
                    onChange={(e) =>
                      setData({ ...data, password: e.target.value })
                    }
                  />
                </Col>
                <div className="error">{error.password}</div>
              </Form.Group>
            </Form>
          ) : (
            <div className={styles.welcome}> Welcome, Welly</div>
          )}
        </div>
        <div className={styles.containerBtn}>
          <Button
            className={styles.btn}
            variant="outline-secondary"
            onClick={handelSubmit}
          >
            {loginBelow ? "Logout" : "Login"}
          </Button>
        </div>
      </div>
    </>
  );
}
