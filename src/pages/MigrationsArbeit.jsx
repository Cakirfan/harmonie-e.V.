import React, { useEffect, useState } from "react";
import { allInfo } from "../helper/data";
import MigrationCard from "../components/MigrationCard";
import { Carousel } from "react-bootstrap";
import migration from "../assets/img/images/slider_fluechtlingsarbeit.jpg";
import { motion } from "framer-motion";

const MigrationsArbeit = () => {
  const subImage = allInfo.length > 0 ? allInfo[3].subInfo[0].image : "";

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup function to remove the event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div style={windowWidth < 768 ? { marginTop: "-2.1rem" } : {}}>
      <Carousel
        id="carouselExample"
        className="carousel"
        indicators={false}
        controls={false}
      >
        <Carousel.Item>
          <motion.img
            src={migration}
            className="d-block w-100"
            style={{ minHeight: "200px" }}
            alt="..."
            initial={{ y: -250, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
          />
          <Carousel.Caption className="d-block">
            <motion.span
              className="bg-success text-white py-2 py-md-3 px-3 fw-semibold custom-text-size"
              initial={{ y: -250, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 120 }}
            >
              HARMONIE e.V - DAS KULTURHAUS
            </motion.span>
            <motion.h1
              className="text-white fw-semibold mt-3 my-lg-4"
              initial={{ y: -250, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, type: "spring", stiffness: 120 }}
            >
              FLÜCHTLINGSARBEIT
            </motion.h1>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <section className="row d-flex justify-content-center mt-5 mx-auto">
        {/* <InfoBogen /> */}
        <div className="col col-md-8">
          <span className="bg-warning text-white py-2 px-3 fw-semibold">
            Migrationsarbeit
          </span>
          <h2 className="fw-semibold my-5">
            Integration und Bildung:{" "}
            <p className="mt-3 fs-4 text-secondary">
              Die Schlüsselrollen von{" "}
              <span className="text-success">Harmonie e.V.</span> im
              Unterstützungsnetzwerk für Migranten
            </p>
          </h2>

          <h5 className="fw-semibold mb-3 mt-5">
            Einbindung von Anfang an: Unser Engagement für neu angekommene
            Migranten
          </h5>
          <p className="text-justify text-secondary fs-5">
            Seit der humanitären Aufnahme von hunderttausenden Geflüchteten
            zwischen 2015 und 2022 durch den deutschen Staat hat Harmonie e.V.
            sich intensiv in der Flüchtlingshilfe engagiert. Unser Verein hat es
            sich zur Aufgabe gemacht, den Neuankömmlingen durch Bildung und
            Integration zu helfen, sich in ihrer neuen Heimat zurechtzufinden.
            Wir wissen, wie herausfordernd und entscheidend die erste Phase der
            Integration ist. Daher fördern wir den raschen Austausch mit der
            lokalen Gesellschaft, um Ängste zu reduzieren und den sozialen
            Zusammenhalt zu stärken.
          </p>

          <h5 className="fw-semibold mb-3 mt-5">
            Maßgeschneiderte Schulungsprogramme für eine erfolgreiche
            Integration
          </h5>
          <p className="text-justify text-secondary fs-5">
            Um die Eingliederung zu erleichtern, bietet Harmonie e.V.
            spezialisierte Schulungsprogramme, die auf die Bedürfnisse von
            Migranten zugeschnitten sind:
          </p>

          <ul className="list">
            <li className="list-group-item fs-5 text-secondary">
              <strong>Leben in Deutschland:</strong> Dieses Programm bietet
              praktische Orientierungshilfen zum Alltagsleben, informiert über
              kulturelle Unterschiede und hilft beim Aufbau von
              Lebenskompetenzen.
            </li>
            <li className="list-group-item fs-5 text-secondary my-2">
              <strong>Deutsches Bildungssystem: </strong> Wir erklären das
              Schulsystem in Deutschland, unterstützen Eltern in ihrer
              Erziehungsrolle und fördern die kommunikative Inklusion der Kinder
              ins Schulleben.
            </li>
            <li className="list-group-item fs-5 text-secondary">
              <strong>Berufsausbildung in Deutschland: </strong> Unsere Beratung
              reicht von der Hilfe bei der Berufswahl bis zum Bewerbungsprozess
              und den Einstiegsmöglichkeiten ins Berufsleben.
            </li>
            <li className="list-group-item fs-5 text-secondary">
              <strong>Deutsches Gesundheitswesen: </strong> Wir bieten
              Orientierung im Gesundheitssystem, vermitteln Kontakte zu
              medizinischen Einrichtungen und fördern einen gesunden Lebensstil.
            </li>
          </ul>

          <h5 className="fw-semibold mb-3 mt-5">
            Erfahrungsaustausch und Community-Aufbau
          </h5>
          <p className="text-justify text-secondary fs-5">
            Harmonie e.V. legt großen Wert auf den Aufbau von sozialen
            Netzwerken. Wir ermutigen Migranten, sich aktiv an der Gemeinschaft
            zu beteiligen und unterstützen sie bei der Organisation von
            Begegnungen mit lokalen Einrichtungen und Persönlichkeiten. Diese
            interkulturellen Begegnungen sind essentiell, um das Verständnis und
            die Akzeptanz auf beiden Seiten zu fördern.
          </p>

          <h5 className="fw-semibold mb-3 mt-5">
            Unser Versprechen: Starke Unterstützung für eine starke Gemeinschaft
          </h5>
          <p className="text-justify text-secondary fs-5">
            Durch unser umfassendes Angebot an Schulungen und die Förderung des
            direkten Austauschs stärken wir nicht nur Individuen, sondern die
            gesamte Gesellschaft. Integration basiert auf gesunder Kommunikation
            und gegenseitigem Verständnis – Werte, die wir bei Harmonie e.V.
            täglich leben und weitergeben.
          </p>
          <h5 className="fw-semibold mb-3 mt-5">
            Treten Sie der Harmonie bei, um gemeinsam eine inklusive Zukunft zu
            gestalten!
          </h5>
          <p className="text-justify text-secondary fs-5">
            Harmonie e.V. steht mit seinem Namen für Toleranz, Unterstützung und
            erfolgreiche Integration. Wir sind stolz darauf, eine Brücke
            zwischen Kulturen zu schlagen und freuen uns auf die weitere
            Zusammenarbeit mit allen, die Teil unserer Mission sind.
          </p>
          <hr className="border-3 shadow border-danger my-5" />
        </div>
        <div className="col col-md-8 mb-3">
          <div className="row g-0 shadow-lg">
            <div className="col-md-6 bg-success-subtle">
              <div className="card-body p-4 p-md-5">
                <span className="bg-warning text-white py-2 px-3 fw-semibold">
                  MIGRATIONSARBEIT
                </span>
                <h3 className="card-title text-secondary mt-3">
                  INTEGRATIONSBESUCHE
                </h3>
                <p className="text-start mt-3">
                  In der ersten Integrationsphase der Flüchtlinge ist der
                  schnelle Kontakt zur hiesigen Gesellschaft von großer
                  Bedeutung, um Ängste abzubauen, Berührungspunkte herzustellen
                  und somit die Integration zu beschleunigen. Als Verein
                  motivieren wir daher Flüchtlinge, Besuche zu verschiedenen
                  Persönlichkeiten und Einrichtungen in ihren jeweiligen Städten
                  und Gemeinden zu unternehmen und unterstützen sie bei der
                  Organisation dieser Treffen.
                </p>
                <p className="text-start mt-3">
                  Wir freuen uns sehr, dass wir in diesem Zusammenhang eine
                  Brücke zwischen Flüchtlingen und den jeweiligen Institutionen
                  bzw. Persönlichkeiten bauen können und bedanken uns jetzt
                  schon für die Gastfreundschaft..
                </p>
                <p className="card-text"></p>
              </div>
            </div>
            <div className="col-md-6">
              <img
                src={subImage}
                className="img-fluid rounded-end w-100"
                alt="..."
                style={{ height: "33.5rem" }}
              />
            </div>
          </div>
          <hr className="border-3 shadow border-danger mt-5 mb-4" />
        </div>
      </section>
      <section className="container-fluid text-center">
        <span className="bg-warning text-white py-2 px-3 fw-semibold">
          MIGRATIONSARBEIT
        </span>
        <h3 className="card-title text-secondary mt-3 mb-5">AKTUELLES</h3>
        <div className="col-12 col-md-10 col-lg-8 mx-auto">
          <MigrationCard />
        </div>
      </section>
    </div>
  );
};

export default MigrationsArbeit;
