import { Tool } from "../Tool";

interface ToolButtonProps {
  title?: string;
  tool: Tool;
  currentTool: Tool;
  setCurrentTool: React.Dispatch<React.SetStateAction<Tool>>;
}

/**
 * Displays the icon for a single tool. When the tool is active, the button
 * will take on a different appearance to indicate as such.
 * @param props
 * @param {string} [props.title] The name of the tool.
 * @param {Tool} [props.tool] The tool that this button corresponds to.
 * @param {Tool} [props.currentTool] The currently selected tool. This is used
 * to change the appearance of the tool button to indicate whether it is selected.
 * @param {React.Dispatch<React.SetStateAction<Tool>>} [props.setCurrentTool] A function for setting the current tool.
 */
export default function ToolButton(
  props: React.PropsWithChildren<ToolButtonProps>,
) {
  let classes = "rounded-full p-2 m-1 mx-2 block ";

  if (props.tool === props.currentTool) {
    classes += "bg-sky-500 text-white ";
  } else {
    classes += "bg-white text-black";
  }

  function setToolToThis() {
    props.setCurrentTool(props.tool);
  }

  return (
    <button
      id="states-button"
      className={classes}
      onClick={setToolToThis}
      title={props.title}
    >
      {props.children}
    </button>
  );
}
