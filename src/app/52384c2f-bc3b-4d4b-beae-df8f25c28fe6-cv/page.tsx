import clsx from "clsx";

export default function Cv() {
  return (
    <div className="min-w-screen flex min-h-screen items-center justify-center bg-neutral-200 py-20 print:py-0">
      <div className="flex h-[842pt] w-[595pt] flex-col justify-between overflow-hidden bg-white px-12 py-8 font-neo-grotesque text-neutral-950">
        <div>
          <CvHeader />
        </div>
        <div>
          <div className="flex gap-16">
            <div className="flex w-1/2 flex-col">
              <Section>
                <SectionHeader>
                  beta.gouv (November 2024 - Present)
                </SectionHeader>
                <CvUl>
                  <CvLi>
                    From-scratch development of a platform to track publicly
                    funded projects intiated by local communities
                  </CvLi>
                  <CvLi>
                    Design of a synchronization protocol to keep all
                    project-tracking tools up-to-date
                  </CvLi>
                </CvUl>
              </Section>
              <Section>
                <SectionHeader>
                  Leave (November 2022 - October 2024)
                </SectionHeader>
                <CvUl>
                  <CvLi>
                    <CvB>Travelling</CvB>
                  </CvLi>
                  <CvLi>
                    <CvB>Side-projects</CvB>: collaborative filtering based
                    recommendation engine for bandcamp.com in Kotlin, GameBoy
                    emulator in Rust
                  </CvLi>
                  <CvLi>
                    <CvB>Volunteer work</CvB>
                    <CvUl nested>
                      <CvLi tighter>
                        Dev work for the redesign of leretroprojecteur.com, a
                        directory for old movies playing in Paris theatres
                      </CvLi>
                      <CvLi tighter>
                        Field work for FNPF, a bird-shelter in Nusa Penida,
                        Indonesia
                      </CvLi>
                      <CvLi tighter>
                        Math tutor at https://www.ensparis.fr/
                      </CvLi>
                    </CvUl>
                  </CvLi>
                  <CvLi>
                    <CvB>Freediving</CvB>: Became a certified freediving
                    instructor
                  </CvLi>
                </CvUl>
              </Section>
              <Section>
                <SectionHeader>Laminar Markets (October 2022)</SectionHeader>
                <CvUl>
                  <CvLi>
                    Built the entire front-end for a crypto trading platform
                  </CvLi>
                  <CvLi>
                    Integrated with the front-end crypto wallet APIs, the
                    back-end HTTP API, and the back-end websocket API to build
                    interactive real-time components for order books, currency
                    pair tickers, currency pair trading charts, recent trades,
                    and placing orders
                  </CvLi>
                </CvUl>
              </Section>
              <Section noMargin>
                <SectionHeader>
                  Surfboard (January 2022 - October 2022)
                </SectionHeader>
                <CvUl>
                  <CvLi>
                    Cut down on developer error and production downtime by
                    introducing new tools including type generation for SQL
                    entities, protocol buffers, type checking, integration tests
                    with dockerized external services, structured (JSON) logging
                    and log querying, paging on error logs, rolling restarts &
                    high availability
                  </CvLi>
                  <CvLi>
                    Led small teams (2-3 people) in the delivery of large new
                    features, including building a new python web service from
                    scratch and converting a pipeline which used to be several
                    hours long and spanned 4 different services into a single
                    real-time (&lt;1s latency) endpoint in our main backend
                    service
                  </CvLi>
                </CvUl>
              </Section>
            </div>
            <div className="flex w-1/2 flex-col">
              <Section>
                <SectionHeader>
                  Palantir (June 2016 - March 2021){" "}
                </SectionHeader>
                <CvUl>
                  <CvLi>
                    <CvB>Authentication and authorization service</CvB>: led the
                    work to implement two-factor auth, reported and fixed
                    security vulnerabilities, implemented an RBAC-based
                    permissions model for our authorizations graph
                  </CvLi>
                  <CvLi>
                    <CvB>Status page service</CvB>: led the work to build a
                    status page for our platform, with completely decoupled
                    infrastructure to guarantee 100% uptime and automated status
                    updates based on platform health metrics
                  </CvLi>
                  <CvLi>
                    <CvB>Code authoring service</CvB>: improved cold-start
                    performance tenfold and made session resumption after
                    connection drops instantaneous, added custom webhooks to our
                    platformd's continuous integration tool
                  </CvLi>
                  <CvLi>
                    Created a company-wide GitHub bot to automatically fix lint
                    errors on pull requests
                  </CvLi>
                </CvUl>
              </Section>
              <Section>
                <SectionHeader>
                  Google Compare (November 2014 - April 2016)
                </SectionHeader>
                <CvUl>
                  <CvLi>
                    Built a logging & monitoring system to help debug failed
                    requests to 3rd party insurance providers
                  </CvLi>
                  <CvLi>
                    Built a tool to enable non-engineers to integrate with 3rd
                    party insurance providers without writing code.
                  </CvLi>
                </CvUl>
              </Section>
              <Section>
                <SectionHeader>
                  Google Analytics (intern, Summer 2013)
                </SectionHeader>
                <CvUl>
                  <CvLi>
                    Built an NLP-powered front-end to query Google Analytics
                    e.g. “how many users were from France?”
                  </CvLi>
                </CvUl>
              </Section>
            </div>
          </div>
        </div>
        <div>
          <CvHr />
        </div>
        <div>
          <div className="flex gap-16">
            <div className="w-1/2 flex-col">
              <Section noMargin>
                <SectionHeader>Projects</SectionHeader>
                <CvUl>
                  <CvLi>
                    <CvB>
                      <CvA href="https://github.com/jroitgrund/boyohboy/">
                        boyohboy (2024)
                      </CvA>
                    </CvB>
                    : work-in-progress GameBoy emulator
                  </CvLi>
                  <CvLi>
                    <CvB>
                      <CvA href="https://github.com/LeRetroProjecteur/website">
                        leretroprojecteur (2023)
                      </CvA>
                    </CvB>
                    : a directory for vintage movies playing in Paris cinemas
                  </CvLi>
                  <CvLi>
                    <CvB>
                      <CvA href="https://github.com/jroitgrund/matchedpotato/">
                        matchedpotato.shop (2022)
                      </CvA>
                    </CvB>
                    : crawls vinted.com to find clothes matching a color from a
                    user-uploaded picture
                  </CvLi>
                  <CvLi>
                    <CvB>
                      <CvA href="https://github.com/jroitgrund/bandcamp-feed">
                        bandcamp-feed (2021)
                      </CvA>
                    </CvB>
                    : an alternate front-end for bandcamp.com supporting
                    splitting subscriptions by genre and embedded playback
                  </CvLi>
                  <CvLi>
                    <CvB>
                      <CvA href="https://github.com/jroitgrund/pawned">
                        pawned (2021)
                      </CvA>
                    </CvB>
                    : a chess game with a GUI and networked play
                  </CvLi>
                  <CvLi>
                    <CvB>
                      <CvA href="https://gitlab.com/jroitgrund/discogs-clone">
                        cratedigger (2016)
                      </CvA>
                    </CvB>
                    : an alternate front-end for discogs.com with continuous
                    playback
                  </CvLi>
                  <CvLi>
                    <CvB>
                      <CvA href="https://github.com/jroitgrund/passmein">
                        passmein (2014)
                      </CvA>
                    </CvB>
                    : an end-to-end encrypted web-based password manager
                  </CvLi>
                  <CvLi>
                    <CvB>
                      <CvA href="https://github.com/jroitgrund/chip16">
                        chip16 (2014)
                      </CvA>
                    </CvB>
                    : an emulator for a fictional console
                  </CvLi>
                </CvUl>
              </Section>
            </div>
            <div className="w-1/2 flex-col">
              <Section>
                <SectionHeader>Tech</SectionHeader>
                <CvUl>
                  <CvLi>
                    <CvB>Back-end</CvB>: Java (Dropwizard, Jersey), Typescript
                    (Node, Express, Nest.js), Python (FastAPI, Flask), Ruby
                    (Rails), SQL (Postgres, SQLite, Hibernate), Redis, GCP
                    PubSub, RabbitMQ
                  </CvLi>
                  <CvLi>
                    <CvB>Front-end</CvB>: React (Next.js, Redux, Zustand), CSS
                    (Tailwind)
                  </CvLi>
                  <CvLi>
                    <CvB>Infra & Misc</CvB>: Docker, Ansible, Terraform, AWS,
                    GCP, LDAP, SAML, OAuth
                  </CvLi>
                </CvUl>
              </Section>
              <Section>
                <SectionHeader>Education</SectionHeader>
                <CvUl>
                  <CvLi>
                    <CvB>MEng Computing</CvB> at Imperial College London
                  </CvLi>
                  <CvLi>
                    <CvB>Master's thesis ('SubSync, a long audio aligner')</CvB>{" "}
                    improved on the state-of-the-art for subtitle alignment
                  </CvLi>
                </CvUl>
              </Section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CvHeader() {
  return (
    <div className="text-neutral-00 flex justify-between">
      <div className="text-2xl font-medium">Jonathan Roitgrund</div>
      <div className="text-right text-lg leading-tight">
        +33 6 95 44 48 14
        <br />
        jroitgrund@gmail.com
        <br />
        <CvA href="https://github.com/jroitgrund">
          https://github.com/jroitgrund
        </CvA>
      </div>
    </div>
  );
}

function CvUl({
  children,
  nested,
}: {
  children: React.ReactNode;
  nested?: boolean;
}) {
  return (
    <ul
      className={clsx("list-inside list-disc", {
        "pl-2 marker:text-stone-700": nested ?? false,
      })}
    >
      {children}
    </ul>
  );
}

function CvLi({
  children,
  tighter,
}: {
  children: React.ReactNode;
  tighter?: boolean;
}) {
  return (
    <li
      className={clsx("list-item leading-tight", {
        "my-1": !(tighter ?? false),
      })}
    >
      {children}
    </li>
  );
}

function Section({
  children,
  noMargin,
}: {
  children: React.ReactNode;
  noMargin?: boolean;
}) {
  return (
    <div className={clsx({ "mb-4": !(noMargin ?? false) })}>{children}</div>
  );
}

function SectionHeader({ children }: { children: React.ReactNode }) {
  return <div className="text-lg font-medium text-neutral-800">{children}</div>;
}

function CvHr() {
  return <hr className="border-[1pt] border-neutral-300" />;
}

function CvB({ children }: { children: React.ReactNode }) {
  return <b className="font-medium text-neutral-900">{children}</b>;
}

function CvA(props: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a {...props} className="text-neutral-900 underline">
      {props.children}
    </a>
  );
}
