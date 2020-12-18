import React from "react";
import GridList from "@material-ui/core/GridList";
import DetailPlanete from "./DetailPlanete";
import MiniaturePlanete from "./MiniaturePlanete";
import "./ListePlanete.scss";
import { planetes } from "./../../config";

export default function ListePlanete() {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="listePlanete">
      <GridList className="listePlanete__grid">
        {planetes.map((planete) => (
          <>
            <MiniaturePlanete
              id={planete.id}
              nom={planete.nom}
              onOpenHandler={handleClickOpen}
            />
            <DetailPlanete onCloseHandler={handleClose} open={open} />
          </>
        ))}
      </GridList>
    </div>
  );
}
