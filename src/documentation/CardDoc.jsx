import { CardBadge, CardImage } from "../components/Card/Card";
import { CodeBlock } from "./CodeBlock/CodeBlock";
import "./documentation.css";

export const CardDoc = () => {
  return (
    <div>
      <h1>Card</h1>
      <h3>Usage</h3>

      <h3>Card content with badge</h3>
      <div className="container">
        <CardBadge
          title="Title"
          badgeText="New"
          description="Card content with badge"
          badgeColor="fun"
        />
      </div>
      <CodeBlock
        codeLines={`<CardBadge 
    title="Title"
    badgeText="New"
    description="Card content with badge"
    badgeColor="fun"
/>`}
      />

      <h3>Card with image</h3>
      <div className="container">
        <CardImage
          title="Mountains"
          description="Mesmerizing view"
          imageSrc="https://picsum.photos/id/29/300/200"
          imageInfo="Mountains"
        />
      </div>
      <CodeBlock
        codeLines={`<CardImage
    title="Mountains"
    description="Mesmerizing view"
    imageSrc="https://picsum.photos/id/29/300/200"
    imageInfo="Mountains"
/>`}
      />

      <h3>Fallback image card</h3>
      <div className="container">
        <CardImage
          title="Mountains"
          description="Mesmerizing view"
          imageSrc="https://picsum.photo/id/29/300/200"
          imageInfo="Mountains"
        />
      </div>
      <CodeBlock
        codeLines={`<CardImage
    title="Mountains"
    description="Mesmerizing view"
    imageSrc="https://broken-link/id/29/300/200"
    imageInfo="Mountains"
/>`}
      />
    </div>
  );
};
