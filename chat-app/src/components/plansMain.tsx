import React from "react";
import PlansList from "./plans/interfaces/plan.interface";

function plansMain() {
  const plans = [
    {
      id: 1,
      image: "/images/pro.png",
      name: "Starter",
      amount: "Free",
      duration: "Per month",
      benefit: [
        {
          img: "/images/granted.png",
          access: [
            {
              isGranted: true,
              action: "Full courses library",
            },
            {
              isGranted: true,
              action: "A new daily meditation",
            },
            {
              isGranted: true,
              action: "Access to the meditation guru",
            },
            {
              isGranted: true,
              action: "Sleep podcasts and exercises",
            },
            {
              isGranted: true,
              action: "Guided meditations",
            },
            {
              isGranted: true,
              action: "Cooking recipes",
            },
          ],
        },
      ],
    },
  ];
  return (
    <div>
      <PlansList plans={plans} />
    </div>
  );
}

export default plansMain;
