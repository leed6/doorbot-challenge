import React from "react";
import Button from "material-ui/Button";

export default ({ label, onClick }) => (
  <Button 
    variant="raised" 
    color="primary"
    onClick={onClick}
  >
    {label}
  </Button>
);