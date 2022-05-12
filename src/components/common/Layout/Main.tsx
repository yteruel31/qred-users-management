import {Outlet} from "react-router-dom";
import styled from "styled-components";
import {Center} from "../Center";
import Stack from "./Stack";

const StyledMain = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
`

function Main() {
    return (
        <StyledMain>
            <Stack spacing={60}>
                <Center>
                    <img src="https://assets-global.website-files.com/6152c3f8ecb71d43ae546fec/6152c3f8ecb71d2c69547231_logo_qred_default_primary_svg%201%20(1).png" width={100}  alt="Qred logo"/>
                </Center>
                <Outlet/>
            </Stack>
        </StyledMain>
    );
}

export default Main;
