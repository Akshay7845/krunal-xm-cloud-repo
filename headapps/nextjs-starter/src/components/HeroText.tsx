import { Field, RichText, Text } from '@sitecore-jss/sitecore-jss-nextjs';

interface HeroTextProps {
  fields: {
    Title: Field<string>;
    Description: Field<string>;
  };
}

export default function HeroText(props: HeroTextProps) {
  return (
    <div className="hero-text">
      <h1>
        <Text field={props.fields.Title} />
      </h1>
      <div className="description">
        <RichText field={props.fields.Description} />
      </div>
    </div>
  );
}
