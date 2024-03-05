/* eslint-disable @typescript-eslint/no-explicit-any */
import { GridColumn as Column, Grid, GridHeaderCellProps } from "@progress/kendo-react-grid";
import * as React from "react";
import { IMovie } from "../interfaces/movie";

interface ProductNameHeaderProps extends GridHeaderCellProps {
  children: any;
}

interface GridTableProps {
  movies: IMovie[] | undefined
}

const rowRender = (
  trElement: React.ReactElement<HTMLTableRowElement>  
) => {
  const trProps: any = { style: {textAlign: "center", verticalAlign: "middle"}};
  return React.cloneElement(
    trElement,
    { ...trProps }
  );
};

const GridHeader = (props: ProductNameHeaderProps) => {
  return (
    <a className="" onClick={props.onClick}>      
      <span className="flex justify-center text-xl font-bold">{props.title}</span>
      {props.children}
    </a>
  );
};

export function GridTable({movies}: GridTableProps) {
  return(
    <div>
      <Grid
        className="max-h-[900px] max-w-[1154px]"
        data={movies}
        dataItemKey="id"
        style={{width: "1135px", backgroundColor: "#111827"}}        
        rowRender={rowRender}
      >
        <Column className="text-base" field="id" title="ID" width={100} headerCell={GridHeader}/>
        <Column className="text-base" field="title" title="Título" width={355} headerCell={GridHeader}/>
        <Column className="text-base" field="director" title="Diretor" width={355} headerCell={GridHeader}/>
        <Column className="text-base" field="score" title="Nota" width={300} headerCell={GridHeader}/>
      </Grid>
    </div>      
  )
}