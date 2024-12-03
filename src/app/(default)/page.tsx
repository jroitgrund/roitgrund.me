import clsx from "clsx";
import Link from "next/link";
import { omit } from "lodash";

export default function Home() {
  return (
    <div className="h-screen overflow-auto bg-slate-50 font-neo-grotesque text-slate-950">
      <div className="mx-auto max-w-[375px] bg-inherit">
        <Header />
        <Section id="about">
          <p className="mb-2 leading-tight">
            Hi, I'm Jonathan Roitgrund: software engineer, Imperial College
            London MEng graduate, Google and Palantir alumni, and currently
            freelancing.
          </p>
          <p>
            <HomeA href="https://github.com/jroitgrund/">GitHub</HomeA> |{" "}
            <HomeA href="/cv.pdf">CV</HomeA>
          </p>
        </Section>
        <Section id="portfolio">
          <p className="mb-2 leading-tight">
            <HomeA
              className="text-red-500"
              href="https://github.com/jroitgrund/boyohboy"
            >
              boyohboy
            </HomeA>{" "}
            (2024): work-in-progress GameBoy emulator{" "}
          </p>
          <p className="mb-2 leading-tight">
            <HomeA
              className="text-yellow-500"
              href="https://github.com/jroitgrund/boyohboy"
            >
              leretroprojecteur
            </HomeA>{" "}
            (2023): a directory for vintage movies playing in Paris cinemas
          </p>
          <p className="mb-2 leading-tight">
            <HomeA
              className="text-lime-500"
              href="https://github.com/jroitgrund/matchedpotato"
            >
              matchedpotato
            </HomeA>{" "}
            (2022): crawls vinted.com to find clothes matching a color from a
            user-uploaded picture
          </p>
          <p className="mb-2 leading-tight">
            <HomeA
              className="text-emerald-500"
              href="https://github.com/jroitgrund/bandcamp-feed"
            >
              bandcamp-feed
            </HomeA>{" "}
            (2021): an alternate front-end for bandcamp.com supporting splitting
            subscriptions by genre and embedded playback
          </p>
          <p className="mb-2 leading-tight">
            <HomeA
              className="text-cyan-500"
              href="https://github.com/jroitgrund/pawned"
            >
              pawned
            </HomeA>{" "}
            (2021): a chess game with a GUI and networked play
          </p>
          <p className="mb-2 leading-tight">
            <HomeA
              className="text-blue-500"
              href="https://gitlab.com/jroitgrund/discogs-clone"
            >
              cratedigger
            </HomeA>{" "}
            (2016): an alternate front-end for discogs.com with continuous
            playback
          </p>
          <p className="mb-2 leading-tight">
            <HomeA
              className="text-violet-500"
              href="https://gitlab.com/jroitgrund/passmein"
            >
              passmein
            </HomeA>{" "}
            (2014): an end-to-end encrypted web-based password manager{" "}
          </p>
          <p className="leading-tight">
            <HomeA
              className="text-pink-500"
              href="https://github.com/jroitgrund/chip16"
            >
              chip16
            </HomeA>{" "}
            (2014): an emulator for a fictional console
          </p>
        </Section>
        <Section id="contact">
          <p className="text-center">jonathan AT roitgrund DOT me</p>
        </Section>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="sticky top-0 flex justify-end gap-2 bg-inherit p-4 text-lg font-medium">
      <div>
        <HomeA href="#about">about</HomeA>
      </div>
      <div>|</div>
      <div>
        <HomeA href="#portfolio">portfolio</HomeA>
      </div>
      <div>|</div>
      <div>
        <HomeA href="#contact">contact</HomeA>
      </div>
    </div>
  );
}

function Section({
  children,
  id,
}: Readonly<{ children: React.ReactNode } & React.HTMLProps<HTMLDivElement>>) {
  return (
    <div id={id} className="flex h-screen flex-col justify-center p-10">
      {children}
    </div>
  );
}

function HomeA(props: React.ComponentProps<typeof Link>) {
  return (
    <Link
      className={clsx(props.className, "underline hover:no-underline")}
      {...omit(props, "className")}
    >
      {props.children}
    </Link>
  );
}
