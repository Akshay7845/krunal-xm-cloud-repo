import { Image, Link, Text, RichText } from '@sitecore-jss/sitecore-jss-nextjs';

const HeroCard = (props) => {
  const { Title, Description, Image: ImgField, CTALabel, CTALink } = props.fields || {};

  return (
    <div style={{ 
      border: '1px solid #dedede', 
      borderRadius: '8px', 
      padding: '24px', 
      textAlign: 'center', 
      maxWidth: '450px', 
      margin: 'auto' 
    }}>
      
      <Image field={ImgField} style={{ width: '100%', borderRadius: '6px' }} />

      <h2 style={{ marginTop: '16px' }}>
        <Text field={Title} />
      </h2>

      <div style={{ marginBottom: '16px' }}>
        <RichText field={Description} />  
      </div>
       
      
      <Link field={CTALink}>
        <button style={{ 
          padding: '10px 20px', 
          backgroundColor: '#0070f3', 
          color: '#fff', 
          border: 'none', 
          borderRadius: '6px', 
          cursor: 'pointer' 
        }}>
          <Text field={CTALabel} />
        </button>
      </Link>
    </div>
  );
};

export default HeroCard;
