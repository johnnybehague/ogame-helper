import * as React from "react";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
import "./Tile.scss";
import TileClass from "./TileClass";

export default function Tile() {
  const tile = new TileClass(1, "imgUrl", "imgTitle", "author");

  return (
    <GridListTile key={tile.id} className="recipeslist__grid-tile">
      <img
        src={tile.imgUrl}
        alt={tile.title}
        className="recipeslist__grid-image"
      />
      <GridListTileBar
        title={tile.title}
        actionIcon={
          <IconButton
            aria-label={`info about ${tile.title}`}
            className="recipeslist__grid-icon"
          >
            <InfoIcon />
          </IconButton>
        }
      />
    </GridListTile>
  );
}
