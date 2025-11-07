import { JSX, useEffect, useState } from 'react';
import { Field, RichText as JssRichText } from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  Text?: Field<string>; // Made optional to be safe
}

export type RichTextProps = {
  params: { [key: string]: string };
  fields?: Fields; // fields optional for safety
};

interface Post {
  id: number;
  title: string;
}

export const Default = (props: RichTextProps): JSX.Element => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching data:', err);
        setLoading(false);
      });
  }, []);

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
