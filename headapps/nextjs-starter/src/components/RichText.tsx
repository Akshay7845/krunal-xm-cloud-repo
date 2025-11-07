import { JSX } from 'react';
import { Field, RichText as JssRichText } from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  Text?: Field<string>; // Optional safe type
}

export type RichTextProps = {
  params: { [key: string]: string };
  fields?: Fields; // optional fields for safety
};

export const Default = (props: RichTextProps): JSX.Element => {
  const text = props.fields?.Text ? (
    <JssRichText field={props.fields.Text} />
  ) : (
    <span className="is-empty-hint">Rich text</span>
  );

  const id = props.params?.RenderingIdentifier || undefined;
  const styles = props.params?.styles?.trimEnd() || '';

  return (
    <div className={`component rich-text ${styles}`} id={id}>
      <div className="component-content">{text}</div>
    </div>
  );
};
