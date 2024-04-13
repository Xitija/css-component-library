import { Text } from "../components/Text/Text";
import { CodeBlock } from "./CodeBlock/CodeBlock";
import "./documentation.css";

export const TextDoc = () => {
  return (
    <div>
      <h1>Text</h1>
      <h3>Usage</h3>
      <h3>Styling text</h3>
      <p>
        Text can be styled with different classes or combination of classes like{" "}
        <code>bold</code>, <code>italic</code>, <code>underline</code> and{" "}
        <code>strikethrough</code>
      </p>
      <div className="container">
        <Text
          text="The quick brown fox jumps over the lazy dog"
          classes="bold"
        />
        <Text
          text="The quick brown fox jumps over the lazy dog"
          classes="bold italic"
        />
        <Text
          text="The quick brown fox jumps over the lazy dog"
          classes="italic strikethrough"
        />
        <Text
          text="The quick brown fox jumps over the lazy dog"
          classes="underline"
        />
      </div>
      <CodeBlock
        codeLines={`<Text text="The quick brown fox jumps over the lazy dog" classes="bold" />
<Text text="The quick brown fox jumps over the lazy dog" classes="bold italic" />
<Text text="The quick brown fox jumps over the lazy dog" classes="italic strikethrough" />
<Text text="The quick brown fox jumps over the lazy dog" classes="underline" />
`}
      />

      <h3>Changing the size of the text</h3>
      <p>
        Text can be sized with different classes like <code>sm</code>,{" "}
        <code>md</code>, <code>lg</code> and <code>xl</code>
      </p>
      <div className="container">
        <Text text="The quick brown fox jumps over the lazy dog" classes="sm" />
        <Text text="The quick brown fox jumps over the lazy dog" classes="md" />
        <Text text="The quick brown fox jumps over the lazy dog" classes="lg" />
        <Text text="The quick brown fox jumps over the lazy dog" classes="xl" />
        <Text
          text="The quick brown fox jumps over the lazy dog"
          classes="xxl"
        />
        <Text
          text="The quick brown fox jumps over the lazy dog"
          classes="xxxl"
        />
        <Text
          text="The quick brown fox jumps over the lazy dog"
          classes="xxxxl"
        />
      </div>
      <CodeBlock
        codeLines={`<Text text="The quick brown fox jumps over the lazy dog" classes="sm" />
<Text text="The quick brown fox jumps over the lazy dog" classes="md" />
<Text text="The quick brown fox jumps over the lazy dog" classes="lg" />
<Text text="The quick brown fox jumps over the lazy dog" classes="xl" />
<Text text="The quick brown fox jumps over the lazy dog" classes="xxl" />
<Text text="The quick brown fox jumps over the lazy dog" classes="xxxl" />
<Text text="The quick brown fox jumps over the lazy dog" classes="xxxxl" />`}
      />
      <h3>Changing the color of the text</h3>
      <p>Text can be colored by passing the color prop in hex code.</p>
      <div className="container">
        <Text
          color="#FF9800"
          text="The quick brown fox jumps over the lazy dog"
          classes="xxl italic underline"
        />
      </div>
      <CodeBlock
        codeLines={`<Text color="#FF9800" text="The quick brown fox jumps over the lazy dog" classes="xxl italic underline" />`}
      />

      <h3>Code style for text</h3>
      <p>
        Code can be added using the <code>CodeBlock</code> by passing code to prop codeLines
        in string literals along with proper spaces and formatting
      </p>
      <CodeBlock codeLines={`console.log("Hello world!")`} />
      <CodeBlock
        codeLines={`<CodeBlock codeLines={\`console.log("Hello world!")\`} />`}
      />
    </div>
  );
};
