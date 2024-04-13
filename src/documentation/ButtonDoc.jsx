import { Button } from "../components/Buttons/Buttons";
import { CodeBlock } from "./CodeBlock/CodeBlock";
export const ButtonDoc = () => {
  return (
    <div>
      <h1>Buttons</h1>
      <h3>Usage</h3>
      <div className="container">
        <Button
          variant="simple"
          size="sm"
          disabled={false}
          onClickHandler={() => {}}
          text="Submit"
        />
      </div>
      <CodeBlock
        codeLines={`<Button variant="simple" size="sm" disabled={false} onClickHandler={() => {}} text="Submit" />`}
      />

      <h3>Changing the size of the Button</h3>
      <p>
        The Button component comes in four sizes. The default is <code>sm</code>
        . Others can be <code>xs</code>, <code>sm</code>, <code>md</code>,
        <code>lg</code>.
      </p>

      <div className="container">
        <Button
          variant="simple"
          size="xs"
          disabled={false}
          onClickHandler={() => {}}
          text="Submit"
        />
        <Button
          variant="simple"
          size="sm"
          disabled={false}
          onClickHandler={() => {}}
          text="Submit"
        />
        <Button
          variant="simple"
          size="md"
          disabled={false}
          onClickHandler={() => {}}
          text="Submit"
        />
        <Button
          variant="simple"
          size="lg"
          disabled={false}
          onClickHandler={() => {}}
          text="Submit"
        />
      </div>
      <CodeBlock
        codeLines={`<Button variant="simple" size="xs" disabled={false} onClickHandler={() => {}} text="Submit" />
<Button variant="simple" size="sm" disabled={false} onClickHandler={() => {}} text="Submit" />
<Button variant="simple" size="md" disabled={false} onClickHandler={() => {}} text="Submit" />
<Button variant="simple" size="lg" disabled={false} onClickHandler={() => {}} text="Submit" />`}
      />

      <h3>Button Variants</h3>
      <p>
        Use <code>Variants</code> prop to have 4 different appearances of button
        - <code>simple</code>,<code>clean</code>, <code>clear</code>. The
        default variant of Button is <code>simple</code>
      </p>
      <div className="container">
        <Button variant="simple" />
        <Button variant="clean" />
        <Button variant="clear" />
      </div>
      <CodeBlock
        codeLines={`<Button variant="simple" />
<Button variant="clean" />
<Button variant="clear" />`}
      />

      <h3>Disabled Button</h3>
      <p>
        Use <code>disabled</code> prop to set the disabled value of the button
        to <code>true</code> or <code>false</code>. By default value is{" "}
        <code>false</code>.
      </p>

      <div className="container">
        <Button disabled={true} text="Submit" />
        <Button disabled={false} text="Submit" />
      </div>

      <CodeBlock
        codeLines={`<Button disabled={true} text="Submit" />
<Button disabled={false} text="Submit" />`} />
    </div>
  );
};