import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import styled from "styled-components";
const CodeBox = styled(SyntaxHighlighter)`
  border-radius: 10px;
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