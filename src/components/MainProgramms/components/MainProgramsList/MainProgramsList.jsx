import React from 'react';
import {MainProgrammsListItem} from "../MainProgrammsListItem/MainProgrammsListItem";

export const MainProgramsList = () => {
  return (
      <ul className="programs__list">
          <MainProgrammsListItem/>

          <MainProgrammsListItem/>

          <MainProgrammsListItem/>
      </ul>
  );
}
