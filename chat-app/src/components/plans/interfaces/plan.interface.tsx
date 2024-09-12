interface GrantedAction {
  action: string;
  isGranted: boolean;
}
interface Benefit {
  img: string;
  access: GrantedAction[];
}
interface Plans {
  id: number;
  image: string;
  amount: string;
  name: string;
  duration: string;
  benefit: Benefit[];
}

export type PlansProps = {
  plans: Plans[];
};

const PlansList: React.FC<PlansProps> = ({ plans }) => {
  return (
    <div>
      {plans.map((plan) => (
        <div key={plan.id}>
          <div>
            <img src={plan.image} alt={plan.image} />
          </div>
          <div>
            <p>{plan.name}</p>
            <h1>{plan.amount}</h1>
            <small>{plan.duration}</small>
          </div>
          <div>
            {plan.benefit.map((bene) => (
              <div>
                <img src={bene.img} alt="" />
                {bene.access.map((access) => (
                  <div>
                    <p>{access.isGranted}</p>
                    <p>{access.action}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PlansList
