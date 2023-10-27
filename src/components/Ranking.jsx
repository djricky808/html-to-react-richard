import "../character-ratings.css";

export function Ranking({ characters }) {
  const SortedCharacters = characters.sort((a, b) => b.votes - a.votes);

  const Top5Characters = [];

  for (let i = 0; i < 5; i++) {
    Top5Characters.push(SortedCharacters[i]);
  }
  return (
    <section id="character-ratings">
      <h4>Top Characters</h4>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Skillset</th>
            <th>Votes</th>
          </tr>
        </thead>
        <tbody>
          {Top5Characters.map((character, characterIndex) => {
            const adjustedIndex = characterIndex + 1;
            const isEvenRow = adjustedIndex % 2 === 0;
            return (
              <tr
                key={character.name}
                className={`${isEvenRow ? "light" : "dark"}`}
              >
                <td>{character.name}</td>
                <td>{character.skillset}</td>
                <td>{character.votes}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
}
