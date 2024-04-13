import { Avatar } from "../components/Avatar/Avatar";
import { CodeBlock } from "./CodeBlock/CodeBlock";
import "./documentation.css";

export const AvatarDoc = () => {
  return (
    <div>
      <h1>Avatar</h1>
      <h3>Usage</h3>
      <ul>
        <li>
          <code>src</code> is the url of the image to be displayed in the avatar
          passed as prop
        </li>
        <li>
          If the link is broken then fallback icon will be displayed, color for
          icon can be specified
        </li>
      </ul>
      <div className="container">
        <Avatar src="https://i.pravatar.cc/150?img=1" />
        <Avatar src="broken-link" color="#D862BC" />
      </div>
      <CodeBlock
        codeLines={`<Avatar src="https://i.pravatar.cc/150?img=1" />
<Avatar src="broken-link" color="#D862BC" />`}
      />

      <h3>Changing the size of the Avatar</h3>
      <p>
        The Avatar component comes in four sizes. The default is <code>md</code>
        . Others can be <code>xs</code>, <code>sm</code>, <code>md</code>,
        <code>lg</code>,<code>lxg</code>.
      </p>
      <div className="container">
        <Avatar src="https://i.pravatar.cc/150?img=10" size="lxg" />
        <Avatar src="https://i.pravatar.cc/150?img=5" size="lg" />
        <Avatar src="https://i.pravatar.cc/150?img=16" size="md" />
        <Avatar src="https://i.pravatar.cc/150?img=9" size="sm" />
        <Avatar src="https://i.pravatar.cc/150?img=26" size="xs" />
      </div>
      <CodeBlock
        codeLines={`<Avatar src="https://i.pravatar.cc/150?img=10" size="lxg" />
<Avatar src="https://i.pravatar.cc/150?img=5" size="lg" />
<Avatar src="https://i.pravatar.cc/150?img=16" size="md" />
<Avatar src="https://i.pravatar.cc/150?img=9" size="sm" />
<Avatar src="https://i.pravatar.cc/150?img=26" size="xs" />`}
      />
    </div>
  );
};
