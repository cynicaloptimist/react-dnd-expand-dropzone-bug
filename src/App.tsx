import React from 'react';
import './App.css';
import { DndProvider, useDrop, useDrag } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";

const App: React.FC = () => {
  return (
    <div className="App">
      <DndProvider backend={HTML5Backend}>
        <DraggableItem />
        <DropZone />
        <DraggableItem />
      </DndProvider>
    </div>
  );
}

function DropZone() {
  const [canDrop, drop] = useDrop({
    accept: "item",
    collect: monitor => monitor.canDrop()
  });

  const style: React.CSSProperties = {
    height: canDrop ? "20px" : "0px",
    backgroundColor: "blue"
  };

  return <div ref={drop} style={style} />
}

function DraggableItem() {
  const [, drag] = useDrag({
    item: { type: "item" }
  });
  return <div ref={drag}>Drag Me</div>;
}

export default App;
