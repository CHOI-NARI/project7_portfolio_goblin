import Card from "./Card";

const CardText = () => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(2,4fr)",
        gap: "20px",
        color: "#ab7543",
        marginBottom: "100px",
      }}
    >
      <Card
        title={"skill1. HTML / CSS"}
        text={
          "웹 개발의 가장 기본이며 중요한 HTML과 CSS에 대한 탄탄한 이해를 바탕으로 사용자가 편리하고 매력적으로 느끼는 웹 페이지를 구현하는데 집중하고 있습니다. 시맨틱한 HTML 구조를 설계하고, 반응형 웹 디자인(Responsive Design)을 적용해 다양한 디바이스에서도 최적의 사용자 경험을 제공하는데 역량을 쌓아 왔습니다. 특히 해당 경험을 통해 웹 접근성과 성능 최적화를 고려한 코드 작성법을 익혔고, CSS Flexbox, Grid, Animation 등 다양한 기법을 활용해 시각적으로 완성도 높은 페이지를 구현했습니다."
        }
      />
      <Card
        title={"skill2. React / Next.js"}
        text={
          "React를 학습하며, 다양한 컴포넌트 기반 UI를 구현해왔습니다. React의 재사용 가능한 컴포넌트 설계를 적극 활용하여 효율적이고 유지보수하기 쉬운 웹 애플리케이션을 개발하기 위해 노력했으며, 동적 라우팅을 활용해 다양한 요구사항에 맞는 웹 페이지를 구현했습니다."
        }
      />
      <Card
        title={"skill3. Javascript / Typescript"}
        text={
          "웹 개발의 핵심 언어인 JavaScript를 통해 동적이고 사용자 친화적인 UI/UX를 구현하는 데 집중했으며, TypeScript를 적극 도입하여 코드의 안정성과 유지보수성을 높였습니다. 타입 시스템을 활용해 런타임 오류를 최소화하는 경험을 했습니다. 이해하기 어려운 부분도 있었지만, 중요성과 편의성을 경험하며, 부족한점을 보완하기 위해 반복해서 노력하고 있습니다."
        }
      />
      <Card
        title={"skill4. GSAP / WEB API"}
        text={
          "웹 애니메이션과 상호작용이 중요한 프로젝트에서 GSAP의 타임라인 기능과 다양한 애니메이션 효과를 적용하며, 시각적으로 매력적이고 기억에 남는 웹 애플리케이션을 구현했습니다. 또한 브라우저에서 제공하는 다양한 Web API를 활용하여 실용적이고 동적인 기능을 개발할 수 있는 경험을 하였습니다."
        }
      />
    </div>
  );
};

export default CardText;
