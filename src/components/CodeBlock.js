import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import styled from "styled-components";
const CodeBox = styled(SyntaxHighlighter)`
  border-radius: 10px;
  &::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #E6E6E6;
    border-radius: 10px;
    background-clip: padding-box;
    border: 2px solid transparent;
  }
  &::-webkit-scrollbar-track {
    display: none;
  }
  &::-webkit-scrollbar-track-piece:end {
    margin-bottom: 10px;
  }
`

function CodeBlock({ code }) {
  return (
    <CodeBox
      language="hcl"
      style={atomOneDark}
      wrapLines={true}
    >
      {code}
    </CodeBox>
  );
}

export default CodeBlock;