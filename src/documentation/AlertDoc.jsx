import { Alert } from "../components/Alert/Alert";
import { CodeBlock } from "./CodeBlock/CodeBlock";
import "./documentation.css";

export const AlertDoc = () => {
  return (
    <div>
      <h1>Alert</h1>
      <h3>Usage</h3>
      <div className="container">
        <Alert
          variant="simple"
          visiblity="true"
          status="success"
          title="Success"
          text="Successful creation!"
        />
      </div>
      <CodeBlock
        codeLines={`<Alert variant="simple" visiblity="true" status="info" title="Success" text="Successful creation!" />`}
      />
      <ul>
        <li>
          The <code>visiblity</code> prop can be set to <code>true</code> or{" "}
          <code>false</code>. By default value is <code>true</code>.
        </li>
        <li>
          The <code>status</code> prop can be set to <code>info</code>,{" "}
          <code>success</code>, <code>warning</code> or <code>error</code>. By
          default value is <code>info</code>.
        </li>
        <li>
          The <code>title</code> prop can be set to a string. The{" "}
          <code>text</code> prop can be set to a string.
        </li>
      </ul>
      <h3>Variants</h3>
      <p>
        The <code>variant</code> prop can be <code>simple</code> or{" "}
        <code>solid</code>.
      </p>
      <div className="container">
        <Alert
          variant="simple"
          visiblity="true"
          status="warning"
          title="Warning"
          text="Something is not right"
        />
        <Alert
          variant="solid"
          visiblity="true"
          status="warning"
          title="Warning"
          text="Something is not right"
        />
      </div>
      <CodeBlock
        codeLines={`<Alert variant="simple" visiblity="true" status="warning" title="Warning" text="Something is not right" />
<Alert variant="solid" visiblity="true" status="warning" title="Warning" text="Something is not right" />`}
      ></CodeBlock>
      <h3>Statuses</h3>
      <p>
        The <code>status</code> prop can be <code>info</code>,{" "}
        <code>success</code>, <code>warning</code> or <code>error</code>.
      </p>
      <div className="container">
        <Alert
          variant="simple"
          visiblity="true"
          status="info"
          title="Info"
          text="Task information"
        />
        <Alert
          variant="simple"
          visiblity="true"
          status="success"
          title="Success"
          text="Successful creation!"
        />
        <Alert
          variant="simple"
          visiblity="true"
          status="warning"
          title="Warning"
          text="Something is not right"
        />
        <Alert
          variant="simple"
          visiblity="true"
          status="error"
          title="Error"
          text="Something went wrong"
        />
      </div>
      <CodeBlock
        codeLines={`<Alert variant="simple" visiblity="true" status="info" title="Info" text="Task info"/>
<Alert variant="simple" visiblity="true" status="success" title="Success" text="Successful creation!" />
<Alert variant="simple" visiblity="true" status="warning" title="Warning" text="Something is not right" />
<Alert variant="simple" visiblity="true" status="error" title="Error" text="Something went wrong"/>`}
      />
    </div>
  );
};
