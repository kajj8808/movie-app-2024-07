export default function Header() {
  return (
    <header className="fixed z-40 flex justify-center w-full p-5">
      <nav className="relative flex gap-2 p-5 text-white list-none bg-black rounded-full shadow-2xl bg-opacity-80">
        <li className="bg-black">POPULAR</li>
        <li>COMING SOON</li>
        <li>NOW PLAYING</li>
        <div className=""> </div>
      </nav>
    </header>
  );
}
