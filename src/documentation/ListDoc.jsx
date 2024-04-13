import { List, ListItem } from "../components/List/List";
// import { Text } from "../components/Text/Text";
import { CodeBlock } from "./CodeBlock/CodeBlock";
import "./documentation.css";

export const ListDoc = () => {
  return (
    <div>
      <h1>List</h1>
      <h3>Usage</h3>
      <p>
        The <code>List</code> component comes in two types. The default is{" "}
        <code>ordered</code>. Others can be <code>unordered</code> or{" "}
        <code>no-bullet</code>.
      </p>
      <div className="container">
        <List type="ordered">
          {/* <ListItem>
            <Text text="This is first List Item" classes="underline xl" />
          </ListItem> */}
          <ListItem>This is first List Item</ListItem>
          <ListItem>This is second List Item</ListItem>
          <ListItem>This is third List Item</ListItem>
        </List>
      </div>
      <CodeBlock
        codeLines={`<List type="ordered">
    <ListItem>This is first List Item</ListItem>
    <ListItem>This is second List Item</ListItem>
    <ListItem>This is third List Item</ListItem>
</List>`}
      />
      <div className="container">
        <List type="unordered">
          <ListItem>This is first List Item</ListItem>
          <ListItem>This is second List Item</ListItem>
          <ListItem>This is third List Item</ListItem>
        </List>
      </div>
      <CodeBlock
        codeLines={`<List type="unordered">
    <ListItem>This is first List Item</ListItem>
    <ListItem>This is second List Item</ListItem>
    <ListItem>This is third List Item</ListItem>
</List>`}
      />

      <div className="container">
        <List type="no-bullet">
          <ListItem>This is first List Item</ListItem>
          <ListItem>This is second List Item</ListItem>
          <ListItem>This is third List Item</ListItem>
        </List>
      </div>
      <CodeBlock
        codeLines={`<List type="no-bullet">
    <ListItem>This is first List Item</ListItem>
    <ListItem>This is second List Item</ListItem>
    <ListItem>This is third List Item</ListItem>
</List>`}/>
    </div>
  );
};
