export type Feature = {
  id: number;
  images: string;
  title: string;
  text: string;
};

export type SectProps = {
  features: Feature[];
};

// The FeaturesList component should accept SectProps as its prop type
const FeaturesList: React.FC<SectProps> = ({ features }) => {
  return (
    
    <div className="flex items-center justify-center flex-wrap w-7/12 gap-10">
      {features.map((feature) => (
        <div key={feature.id} className="flex items-center gap-5">
          <img src={feature.images} alt={feature.title} />
          <div className="flex flex-col gap-3 leading-3"> 
          <h2 className="font-bold">{feature.title}</h2>
          <p className="font-light text-sm">{feature.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeaturesList;