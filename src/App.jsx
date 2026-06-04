import React, { useState } from 'react';

// 화면에 보여줄 공룡 정보를 배열로 정리해 두면,
// 나중에 카드를 반복해서 그리기 쉬워집니다.
const dinosaurs = [
  {
    name: '티라노사우루스',
    diet: 'carnivore',
    label: '육식공룡',
    era: '백악기 후기',
    length: '약 12m',
    feature: '강력한 턱과 거대한 이빨로 유명한 최상위 포식자',
    accent: 'ember',
    image: '/images/dinosaurs/tyrannosaurus.png',
  },
  {
    name: '벨로키랍토르',
    diet: 'carnivore',
    label: '육식공룡',
    era: '백악기 후기',
    length: '약 2m',
    feature: '민첩한 움직임과 날카로운 발톱을 가진 사냥꾼',
    accent: 'sunset',
    image: '/images/dinosaurs/velociraptor.png',
  },
  {
    name: '스피노사우루스',
    diet: 'carnivore',
    label: '육식공룡',
    era: '백악기 후기',
    length: '약 15m',
    feature: '등의 돛과 물가 생활에 적응한 대형 포식자',
    accent: 'flame',
    image: '/images/dinosaurs/spinosaurus.png',
  },
  {
    name: '알로사우루스',
    diet: 'carnivore',
    label: '육식공룡',
    era: '쥐라기 후기',
    length: '약 10m',
    feature: '길고 날카로운 이빨과 강한 다리로 사냥하던 대형 포식자',
    accent: 'ember',
    image: '/images/dinosaurs/allosaurus.png',
  },
  {
    name: '카르노타우루스',
    diet: 'carnivore',
    label: '육식공룡',
    era: '백악기 후기',
    length: '약 8m',
    feature: '눈 위의 작은 뿔과 빠른 달리기로 알려진 육식공룡',
    accent: 'sunset',
    image: '/images/dinosaurs/carnotaurus.png',
  },
  {
    name: '기가노토사우루스',
    diet: 'carnivore',
    label: '육식공룡',
    era: '백악기 후기',
    length: '약 13m',
    feature: '거대한 몸집과 긴 두개골을 가진 남미의 대형 포식자',
    accent: 'flame',
    image: '/images/dinosaurs/giganotosaurus.png',
  },
  {
    name: '트리케라톱스',
    diet: 'herbivore',
    label: '초식공룡',
    era: '백악기 후기',
    length: '약 9m',
    feature: '세 개의 뿔과 넓은 프릴로 몸을 방어한 공룡',
    accent: 'fern',
    image: '/images/dinosaurs/triceratops.png',
  },
  {
    name: '브라키오사우루스',
    diet: 'herbivore',
    label: '초식공룡',
    era: '쥐라기 후기',
    length: '약 25m',
    feature: '긴 목을 이용해 높은 나뭇잎을 먹던 거대한 초식공룡',
    accent: 'moss',
    image: '/images/dinosaurs/brachiosaurus.png',
  },
  {
    name: '스테고사우루스',
    diet: 'herbivore',
    label: '초식공룡',
    era: '쥐라기 후기',
    length: '약 9m',
    feature: '등판과 꼬리 가시로 자신을 지키던 느긋한 초식공룡',
    accent: 'earth',
    image: '/images/dinosaurs/stegosaurus.png',
  },
  {
    name: '안킬로사우루스',
    diet: 'herbivore',
    label: '초식공룡',
    era: '백악기 후기',
    length: '약 7m',
    feature: '단단한 갑옷과 꼬리 곤봉으로 몸을 지킨 방어형 공룡',
    accent: 'fern',
    image: '/images/dinosaurs/ankylosaurus.png',
  },
  {
    name: '파라사우롤로푸스',
    diet: 'herbivore',
    label: '초식공룡',
    era: '백악기 후기',
    length: '약 10m',
    feature: '길게 뻗은 머리 볏이 인상적인 무리 생활형 초식공룡',
    accent: 'moss',
    image: '/images/dinosaurs/parasaurolophus.png',
  },
  {
    name: '디플로도쿠스',
    diet: 'herbivore',
    label: '초식공룡',
    era: '쥐라기 후기',
    length: '약 27m',
    feature: '아주 긴 목과 채찍 같은 꼬리를 가진 거대한 초식공룡',
    accent: 'earth',
    image: '/images/dinosaurs/diplodocus.png',
  },
];

const filterLabels = {
  all: '전체',
  carnivore: '육식',
  herbivore: '초식',
};

const feedingHighlights = [
  {
    name: '티라노사우루스',
    diet: 'carnivore',
    label: '육식공룡',
    scene: '넓은 평원에서 사냥감 추적',
    image: '/images/feeding/tyrannosaurus-feeding.png?v=2',
    description:
      '티라노사우루스는 넓은 평원을 천천히 살피며 먹잇감의 움직임을 노렸고, 기회가 오면 강한 턱으로 단번에 제압하는 사냥꾼이었을 것으로 여겨집니다.',
  },
  {
    name: '벨로키랍토르',
    diet: 'carnivore',
    label: '육식공룡',
    scene: '낮은 자세로 재빠른 사냥',
    image: '/images/feeding/velociraptor-feeding.png?v=2',
    description:
      '벨로키랍토르는 몸을 낮춘 채 빠르게 접근하며 작은 먹잇감을 노렸을 가능성이 크고, 민첩한 다리와 발톱을 이용해 기습에 유리했을 것입니다.',
  },
  {
    name: '스피노사우루스',
    diet: 'carnivore',
    label: '육식공룡',
    scene: '강가를 서성이며 물고기 탐색',
    image: '/images/feeding/spinosaurus-feeding.png?v=2',
    description:
      '스피노사우루스는 강가나 얕은 물가를 서성이며 물고기를 찾는 생활에 잘 어울리는 공룡으로, 긴 주둥이로 물속 먹이를 낚아채는 데 유리했을 것으로 추정됩니다.',
  },
  {
    name: '안킬로사우루스',
    diet: 'herbivore',
    label: '초식공룡',
    scene: '낮은 식물과 풀을 천천히 섭취',
    image: '/images/feeding/ankylosaurus-feeding.png?v=2',
    description:
      '안킬로사우루스는 목이 짧아 땅 가까이에 있는 풀과 낮은 식물을 천천히 뜯어 먹는 데 알맞았고, 위협을 느끼면 단단한 갑옷과 꼬리 곤봉으로 몸을 지켰습니다.',
  },
  {
    name: '스테고사우루스',
    diet: 'herbivore',
    label: '초식공룡',
    scene: '고사리와 풀을 뜯어 먹는 모습',
    image: '/images/feeding/stegosaurus-feeding.png?v=2',
    description:
      '스테고사우루스는 낮은 위치의 풀과 고사리류를 주로 먹었을 것으로 보이며, 머리를 숙인 채 천천히 식물을 훑어 먹는 생활 방식이 잘 어울립니다.',
  },
  {
    name: '브라키오사우루스',
    diet: 'herbivore',
    label: '초식공룡',
    scene: '긴 목으로 높은 나뭇잎 섭취',
    image: '/images/feeding/brachiosaurus-feeding.png?v=2',
    description:
      '브라키오사우루스는 긴 목을 높이 들어 다른 공룡이 닿기 어려운 나뭇잎을 먹는 데 유리했고, 높은 나무의 잎을 차분하게 뜯어 먹는 모습이 대표적으로 떠오릅니다.',
  },
];

function App() {
  // 현재 어떤 버튼이 선택되었는지 저장합니다.
  const [selectedFilter, setSelectedFilter] = useState('all');

  // 선택한 필터에 따라 보여줄 카드 목록만 따로 계산합니다.
  const filteredDinosaurs =
    selectedFilter === 'all'
      ? dinosaurs
      : dinosaurs.filter((dinosaur) => dinosaur.diet === selectedFilter);

  // 비교표에 들어갈 이름 목록도 데이터에서 바로 만들면,
  // 공룡을 더 추가해도 표 내용을 따로 다시 고칠 필요가 없습니다.
  const carnivoreNames = dinosaurs
    .filter((dinosaur) => dinosaur.diet === 'carnivore')
    .map((dinosaur) => dinosaur.name)
    .join(', ');

  const herbivoreNames = dinosaurs
    .filter((dinosaur) => dinosaur.diet === 'herbivore')
    .map((dinosaur) => dinosaur.name)
    .join(', ');

  return (
    <div className="page-shell">
      <header className="topbar" id="top">
        <div className="brand-block">
          <p className="brand-kicker">Museum Field Guide</p>
          <h1>공룡 도감</h1>
        </div>

        <nav className="topnav" aria-label="주요 섹션">
          <a href="#hero">소개</a>
          <a href="#carnivores">육식공룡</a>
          <a href="#herbivores">초식공룡</a>
          <a href="#comparison">비교표</a>
          <a href="#cards">대표 공룡</a>
          <a href="#feeding">먹이 활동</a>
        </nav>
      </header>

      <main>
        <section className="hero-section" id="hero">
          <div className="hero-copy">
            <p className="section-tag">Special Exhibition</p>
            <h2>포식자와 초식동물의 세계를 한눈에 보는 공룡 도감</h2>
            <p className="hero-text">
              육식공룡과 초식공룡을 비교하며 살펴볼 수 있는 페이지입니다.
              공룡붐은 온다 -기계공학과 4학년 박상하-
            </p>

            <div className="hero-actions">
              <a className="button-primary" href="#cards">
                대표 공룡 보기
              </a>
              <a className="button-secondary" href="#comparison">
                비교표 확인
              </a>
            </div>
          </div>

          <div className="hero-panel" aria-hidden="true">
            <div className="fossil-card carnivore-panel">
              <span className="panel-badge">Carnivore Archive</span>
              <strong>날카로운 이빨</strong>
              <p>빠른 추적, 강한 턱, 사냥 중심 생태</p>
            </div>
            <div className="fossil-card herbivore-panel">
              <span className="panel-badge">Herbivore Archive</span>
              <strong>튼튼한 방어</strong>
              <p>넓은 몸집, 긴 목, 뿔과 등판 같은 생존 전략</p>
            </div>
          </div>
        </section>

        <section className="info-section carnivore-section" id="carnivores">
          <div className="section-heading">
            <p className="section-tag">Carnivores</p>
            <h3>육식공룡 소개</h3>
          </div>
          <div className="section-grid">
            <article className="info-card">
              <h4>사냥에 특화된 몸</h4>
              <p>
                육식공룡은 날카로운 이빨과 발톱, 강한 턱을 바탕으로 먹잇감을
                추적하고 사냥하는 데 유리한 신체를 가졌습니다.
              </p>
            </article>
            <article className="info-card">
              <h4>빠른 반응과 민첩성</h4>
              <p>
                일부 육식공룡은 빠르게 방향을 바꾸고 집단으로 움직이며 사냥
                전략을 세웠을 것으로 추정됩니다.
              </p>
            </article>
            <article className="info-card">
              <h4>입체 시야와 감각 활용</h4>
              <p>
                많은 육식공룡은 앞쪽을 보는 시야와 예민한 감각을 활용해 먹잇감과의
                거리 파악, 추적, 기습에 유리했을 것으로 여겨집니다.
              </p>
            </article>
          </div>
        </section>

        <section className="info-section herbivore-section" id="herbivores">
          <div className="section-heading">
            <p className="section-tag">Herbivores</p>
            <h3>초식공룡 소개</h3>
          </div>
          <div className="section-grid">
            <article className="info-card">
              <h4>식물 섭취에 맞는 구조</h4>
              <p>
                초식공룡은 나뭇잎과 식물을 효율적으로 먹기 위한 부리, 치아,
                긴 목 같은 구조를 발달시켰습니다.
              </p>
            </article>
            <article className="info-card">
              <h4>방어 중심 생존 전략</h4>
              <p>
                거대한 몸집, 뿔, 프릴, 등판, 꼬리 가시 등은 포식자로부터 몸을
                지키는 데 큰 역할을 했습니다.
              </p>
            </article>
            <article className="info-card">
              <h4>무리 생활과 경계 행동</h4>
              <p>
                일부 초식공룡은 무리를 이루어 이동하며 주변을 경계했고, 함께
                움직일수록 포식자를 더 빨리 발견하는 데 도움이 되었을 것입니다.
              </p>
            </article>
          </div>
        </section>

        <section className="comparison-section" id="comparison">
          <div className="section-heading">
            <p className="section-tag">Field Notes</p>
            <h3>육식 / 초식 비교표</h3>
          </div>

          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>항목</th>
                  <th>육식공룡</th>
                  <th>초식공룡</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>먹이</td>
                  <td>다른 동물, 물고기, 작은 공룡</td>
                  <td>나뭇잎, 풀, 식물</td>
                </tr>
                <tr>
                  <td>대표 특징</td>
                  <td>이빨, 발톱, 강한 턱</td>
                  <td>뿔, 등판, 긴 목, 큰 몸집</td>
                </tr>
                <tr>
                  <td>생존 방식</td>
                  <td>추적과 사냥 중심</td>
                  <td>방어와 무리 생활 중심</td>
                </tr>
                <tr>
                  <td>대표 공룡</td>
                  <td>{carnivoreNames}</td>
                  <td>{herbivoreNames}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="cards-section" id="cards">
          <div className="section-heading">
            <p className="section-tag">Collection Cards</p>
            <h3>대표 공룡 카드 {dinosaurs.length}종</h3>
          </div>

          <div className="filter-row" role="group" aria-label="공룡 필터">
            {Object.entries(filterLabels).map(([filterKey, filterLabel]) => (
              <button
                key={filterKey}
                type="button"
                className={selectedFilter === filterKey ? 'filter-button active' : 'filter-button'}
                aria-pressed={selectedFilter === filterKey}
                onClick={() => setSelectedFilter(filterKey)}
              >
                {filterLabel}
              </button>
            ))}
          </div>

          <div className="cards-grid">
            {filteredDinosaurs.map((dinosaur) => (
              <article
                key={dinosaur.name}
                className={`dino-card ${dinosaur.diet} ${dinosaur.accent}`}
              >
                <div className="card-top">
                  <span className="card-label">{dinosaur.label}</span>
                  <span className="card-era">{dinosaur.era}</span>
                </div>
                {/* 공룡별 이미지를 별도 프레임 안에 넣어 카드 상단에서 먼저 보이게 합니다. */}
                <div className="card-figure">
                  <img
                    src={dinosaur.image}
                    alt={`${dinosaur.name} 일러스트`}
                    loading="lazy"
                  />
                </div>
                <h4>{dinosaur.name}</h4>
                <p className="card-feature">{dinosaur.feature}</p>
                <dl className="card-meta">
                  <div>
                    <dt>분류</dt>
                    <dd>{dinosaur.label}</dd>
                  </div>
                  <div>
                    <dt>길이</dt>
                    <dd>{dinosaur.length}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
        </section>

        <section className="feeding-section" id="feeding">
          <div className="section-heading">
            <p className="section-tag">Behavior Notes</p>
            <h3>먹이 활동 설명칸</h3>
          </div>
          <p className="feeding-intro">
            육식공룡은 사냥 장면을, 초식공룡은 목 길이에 맞는 먹이 활동 장면을
            따로 모아 살펴볼 수 있게 정리했습니다.
          </p>

          <div className="feeding-grid">
            {/* 새 섹션도 배열을 반복해서 만들면 이미지와 설명을 한곳에서 관리할 수 있습니다. */}
            {feedingHighlights.map((highlight) => (
              <article
                key={highlight.name}
                className={`feeding-card ${highlight.diet}`}
              >
                <div className="feeding-figure">
                  <img
                    src={highlight.image}
                    alt={`${highlight.name} 먹이 활동 장면`}
                    loading="lazy"
                  />
                </div>
                <div className="feeding-content">
                  <div className="feeding-top">
                    <span className="feeding-label">{highlight.label}</span>
                    <span className="feeding-scene">{highlight.scene}</span>
                  </div>
                  <h4>{highlight.name}</h4>
                  <p>{highlight.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>공룡 도감</p>
        <a href="#top">맨 위로 이동</a>
      </footer>
    </div>
  );
}

export default App;
