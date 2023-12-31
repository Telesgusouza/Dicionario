import { useSelector } from "react-redux";
import * as Styled from "./style";
import { RootState } from "@/app/api/redux/configRedux";
import { getDataWord } from "@/app/api/function";
import { IMeaningDefinitions } from "@/app/api/interface";

interface IProps {
  title: string;
  list: IMeaningDefinitions[];
  synonyms: string[];
}

export default function ({ title, list, synonyms }: IProps) {
  const { theme } = useSelector(
    (rootReducer: RootState) => rootReducer.useTheme
  );

  return (
    <Styled.Container className="box" ftColor={theme ? "#ffffff" : "#2d2d2d"}>
      <strong>{title}</strong>

      <article>
        <span>Meaning</span>

        <ul>
          {list.map((item: IMeaningDefinitions) => (
            <li key={item.definition}>
              <p>{item.definition}</p>

              {item.example && <p>"{item.example}"</p>}
            </li>
          ))}
        </ul>
      </article>

      {synonyms.length > 0 && (
        <p>
          Synonyms:{" "}
          {synonyms.map((word: string, index: number) => (
            <a href="#" onClick={() => getDataWord(word)}>
              {word}
              {index < synonyms.length - 1 && ", "}{" "}
            </a>
          ))}
        </p>
      )}
    </Styled.Container>
  );
}
