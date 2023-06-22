import { ButtonsLinks } from "../utils/data";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <h1 className="text-3xl">Matemática</h1>
      <div className="flex flex-wrap p-6 gap-2 justify-center">
        {ButtonsLinks.map((link, index) => {
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

      <div>
        <p className="p-4 text-center">
          Bem-vindo(a) ao Teste de Conhecimentos em Matemática!{" "}
        </p>
        <p>
          Neste teste, você terá a oportunidade de desafiar e aprimorar seus
          conhecimentos em matemática. Aqui, você encontrará uma variedade de
          questões que abrangem diferentes áreas da matemática, desde aritmética
          básica até problemas mais complexos de álgebra, geometria e
          estatística.
        </p>
        <p>
          Você terá um tempo limite para responder a cada pergunta, o que
          adicionará uma dose de emoção ao teste. No entanto, nosso principal
          foco é encorajá-lo(a) a pensar logicamente, aplicar estratégias de
          resolução de problemas e fortalecer suas habilidades matemáticas. Ao
          final do teste, você receberá uma pontuação com base no número de
          respostas corretas. Isso servirá como uma medida do seu desempenho e
          poderá ajudá-lo(a) a identificar as áreas em que você se destaca e
          aquelas que podem precisar de mais atenção. Estamos ansiosos para ver
          seu progresso e desempenho neste teste de conhecimentos em matemática.{" "}
        </p>
        <p>Prepare-se para enfrentar desafios estimulantes e boa sorte!</p>
      </div>
    </main>
  );
}
