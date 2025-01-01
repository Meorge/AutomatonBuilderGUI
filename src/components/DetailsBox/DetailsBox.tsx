import NodeWrapper from "../../NodeWrapper";
import SelectableObject from "../../SelectableObject";
import TransitionWrapper from "../../TransitionWrapper";
import DetailsBox_NoSelection from "./DetailsBox_NoSelection";
import DetailsBox_StateSelection from "./DetailsBox_StateSelection";
import DetailsBox_TransitionSelection from "./DetailsBox_TransitionSelection";

interface DetailsBoxProps {
  selection: Array<SelectableObject>;
  startNode: NodeWrapper;
  setStartNode: React.Dispatch<React.SetStateAction<NodeWrapper>>;
}

/**
 * Displays editors for each selected item in the left-hand panel.
 * @param props
 * @param {Array<SelectableObject>} selection An array of the currently-selected
 * objects.
 * @param {NodeWrapper} startNode The node currently selected as the start node.
 * @param {React.Dispatch<React.SetStateAction<NodeWrapper>>} setStartNode A function
 * to call for setting the start node to another node.
 * @returns
 */
export default function DetailsBox(props: DetailsBoxProps) {
  // For each item selected display its corresponding editor
  const selectionElements = props.selection.map((item, index) => {
    if (item instanceof NodeWrapper) {
      return (
        <DetailsBox_StateSelection
          key={item.id}
          nodeWrapper={item}
          startNode={props.startNode}
          setStartNode={props.setStartNode}
        />
      );
    } else if (item instanceof TransitionWrapper) {
      return <DetailsBox_TransitionSelection key={item.id} transition={item} />;
    }
    return <div key={`unhandled-${index}`}>Unhandled item type</div>;
  });

  return (
    <div className="details-box flex flex-col h-min">
      <div className="flex-1 overflow-auto">
        {selectionElements.length > 0 ? (
          selectionElements
        ) : (
          <DetailsBox_NoSelection />
        )}
      </div>
    </div>
  );
}
