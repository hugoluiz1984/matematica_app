import { FracoesButtonsLinks } from "../../utils/data";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <h1 className="text-3xl">Frações</h1>
      <div className="flex flex-wrap p-6 gap-2 justify-center">
        {FracoesButtonsLinks.map((link, index) => {
          return (
            <button
              key={index}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-0 rounded w-44"
            >
              <a href={link.path}>{link.label}</a>
            </button>
          );
        })}
      </div>
    </main>
  );
}
