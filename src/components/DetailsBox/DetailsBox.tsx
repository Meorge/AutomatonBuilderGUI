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
  // seperate the selection into two, nodes and transitions
  const selectedNodes = props.selection.filter(item => item instanceof NodeWrapper) as NodeWrapper[];
  const selectedTransitions = props.selection.filter(item => item instanceof TransitionWrapper) as TransitionWrapper[];

  // display a transition editor for each selected transition
  let selectionElements = selectedTransitions.map((item, index) => {
    if (item instanceof TransitionWrapper) {
      return <DetailsBox_TransitionSelection key={item.id} transition={item} />;
    }
    return <div key={`unhandled-${index}`}>Unhandled item type</div>;
  });

  // display a node editor if at least node is selected
  if (selectedNodes.length > 0) {
    const combinedKey = selectedNodes.map(node => node.id).join('-');
    selectionElements.unshift(
      <DetailsBox_StateSelection
        key={combinedKey}
        nodeWrappers={selectedNodes}
        startNode={props.startNode}
        setStartNode={props.setStartNode}
      />
    )
  }

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
