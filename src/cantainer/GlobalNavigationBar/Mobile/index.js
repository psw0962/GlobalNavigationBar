import React, { useState } from "react";
import styled from "styled-components";
import Container from "../../../component/Container";
import logo from "../../../static/images/logo.svg";

const MobileGlobalNavigationBar = () => {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Container style={{ marginTop: "20px", display: "flex", justifyContent: "space-around" }}>
          <img src={logo} alt="logo" style={{ width: "90px" }} />
        </Container>
      </div>
    </>
  );
};

export default MobileGlobalNavigationBar;
