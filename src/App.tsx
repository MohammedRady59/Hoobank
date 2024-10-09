import {
  Billing,
  Business,
  CardDeal,
  Clients,
  Ctta,
  Footer,
  Hero,
  Navbar,
  Stats,
  Testmonials,
} from "./components";
import styles from "./data/style";

function App() {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} text-white ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth} `}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart} sm:pl-16 pl-6 `}>
        <div className={`${styles.boxWidth}  `}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart} ${styles.paddingX}`}>
        <div className={`${styles.boxWidth} `}>
          <Stats /> <Business /> <Billing /> <CardDeal /> <Testmonials />{" "}
          <Clients /> <Ctta /> <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
