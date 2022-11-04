import { CopyBlock, rainbow } from "react-code-blocks"

function CodeBlock({ code }) {
  return (
    <CopyBlock
      language="python"
      text={code}
      theme={rainbow}
      wrapLines={true}
    />
  );
}

export default CodeBlock;