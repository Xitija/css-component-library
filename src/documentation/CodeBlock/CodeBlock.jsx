export const CodeBlock = ({codeLines}) => {
  return (
    <pre>
      <code className="language-jsx">
        {codeLines}
      </code>
    </pre>
  );
};
