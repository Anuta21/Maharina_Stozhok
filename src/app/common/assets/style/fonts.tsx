import styled from "styled-components";
import { Color } from "./colors";

export const font = styled.div`
  font-family: "Playfair Display";
  color: ${Color.Black};
`;

// --- Titles

export const T1 = styled(font)`
  font-weight: 700;
  font-size: 14px;
`;

export const T2 = styled(font)`
  font-weight: 700;
  font-size: 18px;
`;

export const T3 = styled(font)`
  font-weight: 700;
  font-size: 42px;
`;

// --- Subtitles

export const S1 = styled(font)`
  font-weight: 500;
  font-size: 16px;
`;

export const S2 = styled(font)`
  font-weight: 500;
  font-size: 22px;
`;

export const S3 = styled(font)`
  font-weight: 500;
  font-size: 32px;
`;

// --- Section title

export const ST1 = styled(font)`
  font-weight: 400;
  font-size: 14px;
`;

export const ST2 = styled(font)`
  font-weight: 400;
  font-size: 16px;
`;

export const ST3 = styled(font)`
  font-weight: 400;
  font-size: 20px;
`;
export const ST4 = styled(font)`
  font-weight: 400;
  font-size: 12px;
`;

// --- Bold font

export const B1 = styled(font)`
  font-weight: 900;
  font-size: 12px;
`;
