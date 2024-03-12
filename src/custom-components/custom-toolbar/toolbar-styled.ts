import { Button } from "@radix-ui/themes";
import styled from "styled-components";

export const MonthButton = styled(Button)`
  cursor: pointer;
  padding-inline: 49.5px;
  background-color: #fff3d0;
  color: #915930;
  &:hover {
    background-color: #ffce3be8;
    transition: 100ms all linear;
  }
`;
