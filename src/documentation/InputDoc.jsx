import { Input } from "../components/Input/Input";
import { CodeBlock } from "./CodeBlock/CodeBlock";
import "./documentation.css";

export const InputDoc = () => {
  return (
    <div>
      <h1>Input</h1>
      <h3>Usage</h3>
      <div className="container">
        <Input placeholder="Basic Input" />
      </div>
      <CodeBlock codeLines={`<Input placeholder="Basic Input" />`}/>

      <h3>Changing the size of the Input</h3>
      <p>
        The Input component comes in four sizes. The default is <code>sm</code>.
        Others can be <code>xs</code>, <code>sm</code>, <code>md</code>,{" "}
        <code>lg</code>.
      </p>
      <div className="container">
        <Input placeholder="extra small input" size="xs" />
        <Input placeholder="small input" size="sm" />
        <Input placeholder="medium input" size="md" />
        <Input placeholder="large input" size="lg" />
      </div>
      <CodeBlock codeLines={`<Input placeholder="extra small input" size="xs" />
<Input placeholder="small input" size="sm" />
<Input placeholder="medium input" size="md" />
<Input placeholder="large input" size="lg" />`}/>

      <h3>Input Box Variants</h3>
      <p>
        Use <code>Variants</code> prop to have 4 different appearances of input
        - <code>simple</code>, <code>filled</code>, <code>clean</code>,{" "}
        <code>clear</code>. The default variant of Input is <code>simple</code>
      </p>
      <div className="container">
        <Input variant="simple" />
        <Input variant="filled" />
        <Input variant="clean" />
        <Input variant="clear" />
      </div>
      <CodeBlock codeLines={`<Input variant="simple" />
<Input variant="filled" />
<Input variant="clean" />
<Input variant="clear" />`} />
      <h3>Different Input Type </h3>
      <p>
        Inputs can be set to store different type of values, like{" "}
        <code>text</code>, <code>password</code> using the{" "}
        <code>inputType</code> prop. The default value is set to{" "}
        <code>text</code>
      </p>
      <div className="container">
        <Input inputType="text" />
        <Input inputType="password" placeholder="Enter password" />
      </div>
      <CodeBlock codeLines={`<Input inputType="text" />
<Input inputType="password" placeholder="Enter password" />`} />

      <h3>Disabled Input</h3>
      <p>
        Use <code>disabled</code> prop to set the disabled value of the input to{" "}
        <code>true</code> or <code>false</code>. By default value is{" "}
        <code>false</code>.
      </p>
      <div className="container">
        <Input disabled={true} />
        <Input disabled={false} />
      </div>
      <CodeBlock codeLines={`<Input disabled={true} />
<Input disabled={false} />`} />

      <h3>ReadOnly Input</h3>
      <p>
        Use <code>readOnly</code> prop to set the readOnly value of the input to{" "}
        <code>true</code> or <code>false</code>. By default value is{" "}
        <code>false</code>.
      </p>
      <div className="container">
        <Input readOnly={true} placeholder="Read Only" />
        <Input readOnly={false} />
      </div>
      <CodeBlock codeLines={`<Input readOnly={true} placeholder="Read Only" />\n<Input readOnly={false} />`} />
    </div>
  );
};
