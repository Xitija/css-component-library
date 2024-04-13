import { Badge } from "../components/Badge/Badge";
import { CodeBlock } from "./CodeBlock/CodeBlock";
import "./documentation.css";

export const BadgeDoc = () => {
  return (
    <div>
      <h1>Badge</h1>
      <h3>Usage</h3>
      <div className="container">
        <Badge text="default" size="md" />
      </div>
      <CodeBlock codeLines={`<Badge text="default" size="md" />`} />
      <h3>Changing the size of the Badge</h3>
      <p>
        The Badge component comes in four sizes. The default is <code>md</code>.
        Others can be <code>sm</code>, <code>md</code>,<code>lg</code>.
      </p>
      <div className="container">
        <Badge text="default" size="sm" />
        <Badge text="default" size="md" />
        <Badge text="default" size="lg" />
      </div>
      <CodeBlock
        codeLines={`<Badge text="default" size="sm" />
<Badge text="default" size="md" />
<Badge text="default" size="lg" />`}
      />

      <h3>Colors</h3>
      <p>
        The <code>color</code> prop can be
        <code>fun</code>, <code>success</code>, <code>danger</code>,{" "}
        <code>warning</code> or <code>info</code>.
      </p>
      <div className="container">
        <Badge text="fun" size="sm" color="fun" />
        <Badge text="success" size="sm" color="success" />
        <Badge text="danger" size="sm" color="danger" />
        <Badge text="warning" size="sm" color="warning" />
        <Badge text="info" size="sm" color="info" />
      </div>
      <CodeBlock
        codeLines={`<Badge text="fun" size="sm" color="fun" />
<Badge text="success" size="sm" color="success" />
<Badge text="danger" size="sm" color="danger" />
<Badge text="warning" size="sm" color="warning" />
<Badge text="info" size="sm" color="info" />`}/>
    </div>
  );
};
