import { TopBar } from "./top-bar";

function Header() {
  return (
    <header className="bg-brand h-40 sticky top-0 shadow-xl bg-[url(/header-bg.svg)] bg-cover bg-center bg-no-repeat">
      <TopBar />
    </header>
  );
}
export { Header };
