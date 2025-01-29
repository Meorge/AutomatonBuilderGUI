import Konva from "konva";

/**
 * An abstract class for objects on the Konva canvas which can be selected.
 */
export default abstract class SelectableObject {
  /**
   * Called when the object is selected. Use this to update the object's
   * appearance and indicate that it is selected.
   */
  public abstract select(): void;

  /**
   * Called when the object is deselected. Use this to update the object's
   * appearance, indicating that it is no longer selected.
   */
  public abstract deselect(): void;

  /**
   * Returns the Konva object/group used to draw this object.
   */
  public abstract get konvaObject(): Konva.Node;

  /**
   * Deletes the Konva object/group used to draw this object.
   */
  public abstract deleteKonvaObjects(): void;
}
