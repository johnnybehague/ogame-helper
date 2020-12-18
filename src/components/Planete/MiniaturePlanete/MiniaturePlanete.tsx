import React from "react";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
// import useStyles from "./RecipesList.styles";
import "./MiniaturePlanete.scss";

type MiniaturePlaneteProps = {
  id: string;
  imgUrl: string;
  nom: string;
  onOpenHandler: any;
};

// export default function ListePlanete(props: MiniaturePlaneteProps) {
export default function ListePlanete({
  id,
  imgUrl,
  nom,
  onOpenHandler
}: MiniaturePlaneteProps) {
  return (
    <GridListTile key={id} className="recipeslist__grid-tile">
      <img src={imgUrl} alt={nom} className="recipeslist__grid-image" />
      <GridListTileBar
        title={nom}
        actionIcon={
          <IconButton
            aria-label={`info about ${nom}`}
            className="recipeslist__grid-icon"
            onClick={onOpenHandler}
          >
            <InfoIcon />
          </IconButton>
        }
      />
    </GridListTile>
  );
}
