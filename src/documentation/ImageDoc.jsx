import { Image } from "../components/Image/Image";
import { CodeBlock } from "./CodeBlock/CodeBlock";
import "./documentation.css";

export const ImageDoc = () => {
  return (
    <div>
      <h1>Image</h1>
      <h3>Usage</h3>
      <div className="container">
        <Image
          src="https://i.pravatar.cc/150?img=45"
          alt="Placeholder image"
          size="lg"
          borderType="br3"
        />
      </div>
      <CodeBlock
        codeLines={`<Image src="https://i.pravatar.cc/150?img=45" alt="Placeholder image" />`}
      />
      <h3>Various Sizes Images</h3>
      <p>
        Use <code>size</code> prop to change the size of the image. Available
        sizes are <code>xs, sm, md, lg and lxg</code>. The default value of size
        id <code>md</code>
      </p>
      <div className="container">
        <Image src="https://i.pravatar.cc/150?img=45" size="xs" />
        <Image src="https://i.pravatar.cc/150?img=45" size="sm" />
        <Image src="https://i.pravatar.cc/150?img=45" size="md" />
      </div>
      <CodeBlock
        codeLines={`<Image src="https://i.pravatar.cc/150?img=45" size="xs" />
<Image src="https://i.pravatar.cc/150?img=45" size="sm" />
<Image src="https://i.pravatar.cc/150?img=45" size="md" />`}
      />
      <h3>Image with border radius</h3>
      <p>
        We can set the border-radius to different values using the{" "}
        <code>borderType</code> prop. Values it can take are -{" "}
        <code>br1, br2, br3, and circle</code>. The default value is{" "}
        <code>br3</code>.
      </p>
      <div className="container">
        <Image src="https://i.pravatar.cc/150?img=45" borderType="br3" />
        <Image src="https://i.pravatar.cc/150?img=45" borderType="circle" />
      </div>
      <CodeBlock
        codeLines={`<Image src="https://i.pravatar.cc/150?img=45" borderType="br3" />
<Image src="https://i.pravatar.cc/150?img=45" borderType="circle" />`}
      />
      <h3>Image with fallback image</h3>
      <p>
        We can set the fallback image using the <code>src</code> prop.
      </p>
      <div className="container">
        <Image src="https://bit.ly/broken-link-corrupt" />
      </div>
      <CodeBlock codeLines={`<Image src="https://bit.ly/broken-link-corrupt" />`} />
    </div>
  );
};
